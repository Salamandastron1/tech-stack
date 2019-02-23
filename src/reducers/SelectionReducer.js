export default (state = null, action) => {
  switch(action.type) {
    case 'SELECT_LIBRARY':
      console.log('reducer ran')
      return action.payload;
    default:
      return state;
  }
};