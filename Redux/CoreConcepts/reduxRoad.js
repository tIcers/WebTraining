const initialWagonState = {
  supplies:100,
  distance:0,
  days:0
}

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather':{
      return {
      ...state, 
      supplies:state.supplies + 10,
      distance:state.distance,
      days:state.days + 1,
      }
    }
    case 'travel':{
      return {
        ...state, 
        supplies:state.supplies -(20 *state.days),
        distance:state.distance + (10 * state.days),
        days: state.days + state.days
      }
    }
    case 'tippedWagon':{
      return {
      ...state,
      supplies:state.supplies - (30 * state.days),
      distance: state.distance,
      days:state.days + 1
      }
    }
    default:{
      return state;
    }
  }
}
