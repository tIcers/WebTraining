const todoReducer = (state = [], action) => {
 switch (action.type) {
   case 'todos/addTodo': {
      return [...state, action.payload]
   }
   case 'todos/removeAll': {
     return [];
   }
   default: {
     return state;
   }
 }
}

// Example call to reducer
const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
const addTodoAction = { type: 'todos/addTodo', payload: 'Descend' };
const newState = todoReducer(state, addTodoAction);
