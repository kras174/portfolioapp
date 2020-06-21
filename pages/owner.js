import withAuth from "../components/hoc/withAuth";

const Owner = () => <h1>Hello Owner Page</h1>;

export default withAuth(Owner, "siteOwner");
