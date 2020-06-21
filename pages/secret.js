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
    return <h1>Secret Page Content</h1>;
  }
}

export default withAuth(Secret);
