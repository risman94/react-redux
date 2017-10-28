import { ADD_TODO, TOGGLE, REMOVE, INPUT_UPDATE, UPDATE } from "./constants";

let todoId = 0;
export const addTodoAction = text => ({
  type: ADD_TODO,
  id: (todoId++).toString(),
  text
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

export const toggleUpdate = id => ({
  type: INPUT_UPDATE,
  id
});

export const update = (id, text) => ({
  type: UPDATE,
  id,
  text
});
