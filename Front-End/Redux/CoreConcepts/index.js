const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'songs/addSong':{
      return [...state, action.payload]
    }
    case 'songs/removeSong':{
      return state.filter(song => action.payload !== song)
    }
    default:{
      return state
    }
  }
}
 

const state = ['Take Five', 'Clair deLune', 'Respect']

const addNewSong ={
  type:'songs/addSong',
  payload:'Halo',
}

const removeSong = {
  type:'songs/removeSong',
  payload:'Take Five'
}

const removeAll = {
  type:'songs/removeAll'
}
