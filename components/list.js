import { connect } from "react-redux";

import Item from "./item";
import ItemHeader from "./itemHeader";

import { loadData } from "../store/menuReducer";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteSort: "DESC",
      soldSort: null,
      priceSort: null,
      nameSort: null
    };
  }

  componentDidMount() {
    this.props.loadData();
  }

  toogelSort = type =>
    this.setState({
      voteSort: null,
      soldSort: null,
      priceSort: null,
      [type]: this.state[type] === "DESC" ? "ASC" : "DESC"
    });

  sortVote = (a, b) => {
    const { voteSort } = this.state;
    switch (voteSort) {
      case "DESC":
        return a.votes > b.votes ? -1 : a.votes < b.votes ? 1 : 0;
      case "ASC":
        return a.votes < b.votes ? -1 : a.votes > b.votes ? 1 : 0;
      default:
        return 0;
    }
  };

  sortSold = (a, b) => {
    const { soldSort } = this.state;
    switch (soldSort) {
      case "DESC":
        return a.sold > b.sold ? -1 : a.sold < b.sold ? 1 : 0;
      case "ASC":
        return a.sold < b.sold ? -1 : a.sold > b.sold ? 1 : 0;
      default:
        return 0;
    }
  };

  sortPrice = (a, b) => {
    const { priceSort } = this.state;
    switch (priceSort) {
      case "DESC":
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      case "ASC":
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
      default:
        return 0;
    }
  };

  sortName = (a, b) => {
    const { nameSort } = this.state;
    switch (nameSort) {
      case "DESC":
        return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      case "ASC":
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      default:
        return 0;
    }
  };

  sort = (a, b) => {
    const { voteSort, soldSort, priceSort } = this.state;
    if (voteSort) {
      return this.sortVote(a, b);
    } else if (soldSort) {
      return this.sortSold(a, b);
    } else if (priceSort) {
      return this.sortPrice(a, b);
    } else {
      return this.sortName(a, b);
    }
  };

  render() {
    const { list, loadingData } = this.props;
    const newList = Object.keys(list)
      .map((key, index) => ({
        id: list[key].id,
        name: list[key].name,
        sold: list[key].sold,
        votes: list[key].votes,
        price: list[key].price
      }))
      .sort(this.sort);

    return (
      <div>
        <ItemHeader sort={this.toogelSort} />

        {newList.length > 0 ? (
          newList.map((item, index) => (
            <Item
              key={item.id}
              keyName={item.id}
              number={index + 1}
              name={item.name}
              sold={item.sold}
              votes={item.votes}
              price={item.price | 0}
            />
          ))
        ) : loadingData ? (
          <span>Laddar data</span>
        ) : (
          <span>Listan är tom</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.menu.list,
  loadingData: state.menu.loadingData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadData: () => dispatch(loadData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
