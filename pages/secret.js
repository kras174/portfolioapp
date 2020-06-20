import withAuth from "./../components/hoc/withAuth";

class Secret extends React.Component {
  render() {
    return <h1>Secret Page Content</h1>;
  }
}

export default withAuth(Secret);
