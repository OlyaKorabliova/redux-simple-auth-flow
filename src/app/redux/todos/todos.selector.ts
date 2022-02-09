export const getAllTodos = (state) => {
  return state.todos.items;
};

export const getTodoById = (state, id) => {
  const todo = state.todos.items.find((todoEl) => todoEl.id === id);

  return todo;
};

export const getError = (state) => state.todos.error;
