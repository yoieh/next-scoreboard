import React, { Component } from "react";
import InputText from "./inputText";
import InputNumber from "./inputNumber";

export default class AddItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {
        name: "",
        id: "",
        votes: 0,
        sold: 0,
        price: 0
      }
    };
  }

  componentDidMount() {
    this.clearForm();
  }

  componentWillUnmount() {
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      newItem: {
        name: "",
        id: "",
        votes: 0,
        sold: 0,
        price: 0
      }
    });
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prevState => ({
      newItem: {
        ...prevState.newItem,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    const { addItem } = this.props;
    const { newItem } = this.state;

    e.preventDefault();
    newItem.id =
      newItem.id && newItem.id.length > 0 ? newItem.id : newItem.name;

    newItem.name.length > 0 &&
      newItem.id.length &&
      addItem(this.state.newItem) &&
      this.clearForm();
  };

  render() {
    const {
      newItem: { name, id, votes, sold, price }
    } = this.state;

    return (
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          onSubmit={this.handleSubmit}
        >
          <InputText
            name="name"
            title="Name"
            value={name}
            onChange={this.handleChange}
          />
          <InputText
            name="id"
            title="id"
            value={id}
            onChange={this.handleChange}
          />
          <InputNumber
            name="votes"
            title="Votes"
            value={votes}
            onChange={this.handleChange}
          />
          <InputNumber
            name="sold"
            title="Sold"
            value={sold}
            onChange={this.handleChange}
          />
          <InputNumber
            name="price"
            title="Price"
            value={price}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
