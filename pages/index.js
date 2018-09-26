import { connect } from "react-redux";
import { withRouter } from "next/router";

import Layout from "../components/layout";
import List from "../components/list";

class Scoreboard extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <Layout>
        <h2 className="bg-danger">List</h2>
        <List list={list} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.menu.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Scoreboard)
);
