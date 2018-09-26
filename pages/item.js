import { withRouter } from "next/router";

import { connect } from "react-redux";
import Layout from "../components/layout";

const Item = ({
  item,
  router: {
    query: { id }
  }
}) => (
  <Layout>
    <h2>{`Item: ${item.name}`}</h2>
    <p>{`sold: ${item.sold}`}</p>
    <p>{`votes: ${item.votes}`}</p>
    <p>{`price: ${item.price}`}</p>
  </Layout>
);

const mapStateToProps = (
  state,
  {
    router: {
      query: { id }
    }
  }
) => ({
  item: state.menu.list[id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Item)
);
