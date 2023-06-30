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
      supplies:state.supplies + 15,
      distance:state.distance,
      days:state.days + 1,
      }
    }
    case 'travel':{
      const supplyNeeded = 20 *action.payload.days
      if(action.payload.days < supplyNeeded){
        return state
      }
      return {
        ...state, 
        supplies:state.supplies -(20 *action.payload.days),
        distance:state.distance + (10 * action.payload.days),
        days: state.days + action.payload.days
      }
    }
    case 'tippedWagon':{
      return {
      ...state,
      supplies:state.supplies - 30 ,
      distance: state.distance,
      days:state.days + 1
      }
    }
    default:{
      return state;
    }
  }
}

let wagon = reducer(undefined, {})
console.log(wagon)

wagon = reducer(wagon, {type:'travel', payload:{days:1}})
console.log(wagon)

wagon = reducer(wagon, {type:'gather', payload:{days:2}})
console.log(wagon)

wagon = reducer(wagon, {type:'tippedWagon', payload:{days:3}})
console.log(wagon)

wagon = reducer(wagon, {type:'travel', payload:{days:3}})
console.log(wagon)

wagon = reducer(wagon, {type:'travel', payload:{days:3}})
console.log(wagon)

