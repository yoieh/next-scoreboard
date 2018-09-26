// import { Link } from "react-router-dom";
// import Link from "next/link";
import { withRouter } from "next/router";

import { Link, Router } from "../router";

const ItemsStyle = {
  flex: "0.1 0",
  padding: "1rem",
  marginLeft: "1rem"
};

const Item = ({ keyName, number, name, sold, votes, price }) => (
  <Link route="item" params={{ id: keyName }}>
    <a
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid",
        borderColor: "#b8c2d3",
        marginTop: "0.4rem"
      }}
    >
      <span style={ItemsStyle}>{`#${number}.`}</span>
      <span style={{ ...ItemsStyle, flex: "1 0" }}>{`${name}`}</span>
      <span style={ItemsStyle}>{`${price} kr`}</span>
      <span style={ItemsStyle}>{`${sold} st`}</span>
      <span style={ItemsStyle}>{`${votes}`}</span>
    </a>
  </Link>
);

export default Item; // withRouter(Item);
