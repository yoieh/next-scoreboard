import { connect } from "react-redux";
import AddItem from "../components/addItem";
import { addItem } from "../store/menuReducer";

import Layout from "../components/layout";

const dashboard = props => (
  <Layout>
    <AddItem {...props} />
  </Layout>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addItem: ({ id, name, price, sold, votes }) =>
    dispatch(addItem(id, name, sold, votes, price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
