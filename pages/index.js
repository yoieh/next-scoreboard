import { connect } from "react-redux";
import { withRouter } from "next/router";

import Layout from "../components/layout";
import List from "../components/list";

class Scoreboard extends React.Component {
  render() {
    return (
      <Layout>
        <h2 className="bg-danger">List</h2>
        <List threshold={0.8} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Scoreboard)
);
