export const initialState = {
  item: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "STORE_STATE":
      console.log(action.item)
       return {
         ...state,
         item: [...action.item],
       };
    case "REMOV_ITEM":
      let temp = state.item;
      console.log(state)
      console.log(action.item)
      var foundIndex = temp.findIndex((x) => x.id === action.item);
      console.log(foundIndex)
      let temp1=temp.filter(function (obj) {
        return obj.id !== action.item;
      });
      return {
        ...state,
        item: temp1,
      };
      case "EDIT_ITEM":
       
        let temp2 = state.item;
        var foundIndex = temp2.findIndex((x) => x.id === action.item[0]);
        temp2[foundIndex].title=action.item[1]
        console.log(temp2[foundIndex].title)
        return {
          ...state,
          item: temp2,
        };
    default:
      return state;
  }
}

export default reducer;
