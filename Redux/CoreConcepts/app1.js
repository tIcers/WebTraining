const globalSong = 'We are the World';

const playlistReducer = (state = [], action) => {
 switch (action.type) {
   case 'songs/addGlobalSong': {
     return [...state, action.payload];
   }
   default:
     return state;
 }
}
 
// Example call to reducer
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];
const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
const newState = playlistReducer(state, addAction);
