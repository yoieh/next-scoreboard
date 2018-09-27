const initialState = {
  loadingData: false,
  list: []
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menu/FAILURE":
      return {
        ...state,
        ...{ error: action.error },
        loadingData: false
      };
    case "menu/LOAD_DATA_SUCCESS":
      return {
        ...state,
        ...{ list: { ...state.list, ...action.data } },
        loadingData: false
      };
    case "menu/LOAD_DATA":
      return {
        ...state,
        ...{ list: { ...state.list, ...action.data } },
        loadingData: true
      };
    case "menu/ADD":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.id]: {
            ...state.list[action.item.id],
            ...action.item
          }
        }
      };

    case "menu/REMOVE":
      delete state.list[action.item.id];
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
          [action.item.id]: {
            ...state.list[action.item.id],
            votes: state.list[action.item.id] + action.item.amount
          }
        }
      };
    case "menu/DOWN_VOTE":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.id]: {
            ...state.list[action.item.id],
            votes: state.list[action.item.id] - action.item.amount
          }
        }
      };
    case "menu/SOLD":
      return {
        ...state,
        list: {
          ...state.list,
          [action.item.id]: {
            ...state.list[action.item.id],
            sold: state.list[action.item.id] + action.item.amount
          }
        }
      };
    default:
      return state;
  }
};

export const addItem = (id, name, sold = 0, votes = 0, price = 0) => ({
  type: "menu/ADD",
  item: { id, name, sold, votes, price }
});

export const removeItem = id => ({
  type: "menu/REMOVE",
  item: { id }
});

export const upVoteItem = id => ({
  type: "menu/UP_VOTE",
  item: { id, amount: 1 }
});

export const downVoteItem = id => ({
  type: "menu/DOWN_VOTE",
  item: { id, amount: 1 }
});

export const soldItem = (id, amount) => ({
  type: "menu/SOLD",
  item: { id, amount }
});

export function loadData() {
  return { type: "menu/LOAD_DATA" };
}

export function loadDataSuccess(data) {
  return {
    type: "menu/LOAD_DATA_SUCCESS",
    data
  };
}

export function failure(error) {
  return {
    type: "menu/FAILURE",
    error
  };
}
