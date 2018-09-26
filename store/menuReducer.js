const initialState = {
  list: []
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menu/ADD":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.key]: {
            ...state.list[action.item.key],
            ...action.item
          }
        }
      };

    case "menu/REMOVE":
      delete state.list[action.item.key];
      return {
        ...state,
        list: {
          ...state.list
        }
      };
    case "menu/UP_VOTE":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.key]: {
            ...state.list[action.item.key],
            votes: state.list[action.item.key] + action.item.amount
          }
        }
      };
    case "menu/DOWN_VOTE":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.key]: {
            ...state.list[action.item.key],
            votes: state.list[action.item.key] - action.item.amount
          }
        }
      };
    case "menu/SOLD":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.key]: {
            ...state.list[action.item.key],
            sold: state.list[action.item.key] + action.item.amount
          }
        }
      };
    default:
      return state;
  }
};

export const addItem = (key, name, sold = 0, votes = 0, price = 0) => ({
  type: "menu/ADD",
  item: { key, name, sold, votes, price }
});

export const removeItem = key => ({
  type: "menu/REMOVE",
  item: { key }
});

export const upVoteItem = key => ({
  type: "menu/UP_VOTE",
  item: { key, amount: 1 }
});

export const downVoteItem = key => ({
  type: "menu/DOWN_VOTE",
  item: { key, amount: 1 }
});

export const soldItem = (key, amount) => ({
  type: "menu/SOLD",
  item: { key, amount }
});
