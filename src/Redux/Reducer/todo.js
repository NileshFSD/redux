const initialState = {
  list: [],
};

const addList = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "delete":
      const newList = state.list.filter((li) => li.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "deleteAll":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default addList;
