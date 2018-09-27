import { withRouter } from "next/router";

import { connect } from "react-redux";
import Layout from "../components/layout";

import { loadData } from "../store/menuReducer";

class Item extends React.Component {
  static async getInitialProps({
    ctx: {
      store,
      isServer,
      query: { id }
    }
  }) {
    if (!store.getState().menu.list[id]) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  render() {
    const {
      item,
      router: {
        query: { id }
      }
    } = this.props;

    return (
      <Layout>
        <h2>{`Item: ${item.name}`}</h2>
        <p>{`sold: ${item.sold}`}</p>
        <p>{`votes: ${item.votes}`}</p>
        <p>{`price: ${item.price}`}</p>
      </Layout>
    );
  }
}

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
