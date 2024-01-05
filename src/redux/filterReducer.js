const filterReducer = (state = 'all', action) => {
    switch (action.type) {
      case 'TOGGLE_FILTER':
        // Toggle filter logic
        return action.payload;
      default:
        return state;
    }
  };
  
  export default filterReducer;