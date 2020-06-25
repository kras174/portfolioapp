import withAuth from "./../components/hoc/withAuth";
import { getSecretData } from "../actions";

class Secret extends React.Component {
  state = {
    secretData: [],
  };

  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({
      secretData,
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>
        <h1>Secret Page Content</h1>
        {isAuthenticated && <h2>secretData</h2>}
      </>
    );
  }
}

export default withAuth(Secret);
