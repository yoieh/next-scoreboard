import React from "react";
import { connect } from "react-redux";

// import { loadData, startClock, tickClock } from "../actions";

import Page from "../components/page";
import Layout from "../components/layout";

class Index extends React.Component {
  // static async getInitialProps(props) {
  //   const { store, isServer } = props.ctx;
  //   store.dispatch(tickClock(isServer));

  //   if (!store.getState().placeholderData) {
  //     store.dispatch(loadData());
  //   }

  //   return { isServer };
  // }

  // componentDidMount() {
  //   this.props.dispatch(startClock());
  // }

  render() {
    return (
      <Layout>
        <div className="text-center">
          <h1>Hello from Next</h1>
          <p className="lead">Lorem ipsum... yeah whatever...</p>
          {/* <p>{someEntryAsProp.fields.text}</p> */}
          <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
        </div>
      </Layout>
    );
  }
}

export default connect()(Index);
