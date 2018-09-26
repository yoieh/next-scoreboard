import { Button } from "reactstrap";
const ItemsStyle = {
  flex: "0.1 0",
  padding: "10px",
  marginLeft: "10px",
  marginTop: "10px"
};

export default class InputHeader extends React.Component {
  render() {
    const { sort } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <span style={ItemsStyle}>{`#`}</span>
        <Button
          onClick={() => sort("nameSort")}
          style={{ ...ItemsStyle, flex: "1 0" }}
        >{`Name`}</Button>
        <Button
          onClick={() => sort("priceSort")}
          style={ItemsStyle}
        >{`Price`}</Button>
        <Button
          onClick={() => sort("soldSort")}
          style={ItemsStyle}
        >{`Sold`}</Button>
        <Button
          onClick={() => sort("voteSort")}
          style={ItemsStyle}
        >{`Votes`}</Button>
      </div>
    );
  }
}
