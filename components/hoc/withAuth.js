export default function (Component) {
  return class withAuth extends React.Component {
    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;

      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return <h1>Please login to see this page</h1>;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}
