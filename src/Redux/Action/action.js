// export const incNumber = () => {
//   return {
//     type: "increment",
//   };
// };

// export const decNumber = () => {
//   return {
//     type: "decrement",
//   };
// };

export const addTodo = (data) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "delete",
    id,
  };
};

export const deleteAll = () => {
  return {
    type: "deleteAll",
  };
};
