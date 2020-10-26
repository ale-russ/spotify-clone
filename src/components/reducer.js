export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //REMOVE after developing....
  //Commented out because need to upgrade the account to premiume
  // token:
  //   "BQDHHq5d6Kb1gmdJvcihssnBXch3Rx72KUMfLfl_ZpLpj6Zxib…4PhZRrWH-ppoNUsTauPxzzzUcRWJyolAeobjcox7xlOErqmB",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playslists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
