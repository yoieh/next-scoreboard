import Item from "./item";
import ItemHeader from "./itemHeader";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteSort: "DESC",
      soldSort: null,
      priceSort: null,
      nameSort: null
    };
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

  // handleCheck = e => {
  //   const { list } = this.props;
  //   const id = e.currentTarget.dataset.id;
  //   const item = list[id];
  // };

  render() {
    const { list } = this.props;
    const newList = Object.keys(list)
      .map((key, index) => ({
        key: list[key].key,
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
              key={item.key}
              keyName={item.key}
              number={index + 1}
              name={item.name}
              sold={item.sold}
              votes={item.votes}
              price={item.price | 0}
            />
          ))
        ) : (
          <span>Listan är tom</span>
        )}
      </div>
    );
  }
}
