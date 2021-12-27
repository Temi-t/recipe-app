const initialSearchTerm = "";

//actions
export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};
export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};

//reducer
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case "searchTerm/setSearchTerm":
      return action.payload;
    case "searchTerm/clearSearchTerm":
      return "";
    default:
      return searchTerm;
  }
};
export default searchTermReducer;
