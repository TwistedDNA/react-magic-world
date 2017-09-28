export default function(state=null, action){
  switch(action.type){
    case 'ADD_RULE':
      state.rules.add(action.payload);
      break;
  }
  return state;
}