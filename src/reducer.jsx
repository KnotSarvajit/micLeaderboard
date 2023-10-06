const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        message:action.payload.message,
        name: action.payload.name,
        image: action.payload.image,
        words: action.payload.words,
      };
    }
  
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        message:action.payload.message,
        name: action.payload.name,
        image: action.payload.image,
        words: action.payload.words,
      };
    }
    return state;
};

export default reducer; 