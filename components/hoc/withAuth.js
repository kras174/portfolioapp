export default function (Component, role) {
  return class withAuth extends React.Component {
    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user[`${process.env.NAMESPACE}/role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }
      if (!isAuthenticated) {
        return <h1>Please login to see this page</h1>;
      } else if (!isAuthorized) {
        return <h1>Sorry. You don't have a permisions for this page</h1>;
      } else {
        return <Component {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}
