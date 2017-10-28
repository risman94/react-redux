import {
  ADD_TODO,
  TOGGLE,
  REMOVE,
  INPUT_UPDATE,
  UPDATE
} from "../actions/constants";

const addTodo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.id, text: action.text, completed: false, inputEdit: false }
      ];
    case TOGGLE:
      return state.map(a => {
        if (a.id === action.id) {
          return {
            ...a,
            completed: !a.completed
          };
        }
        return a;
      });
    case REMOVE:
      return state.filter(({ id }) => id !== action.id);
    case INPUT_UPDATE:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            inputEdit: !todo.inputEdit
          };
        }
        return todo;
      });
    case UPDATE:
      return state.map(b => {
        if (b.id === action.id) {
          return {
            ...b,
            text: action.text,
            inputEdit: false
          };
        }
        return b;
      });
    default:
      return state;
  }
};

export default addTodo;
