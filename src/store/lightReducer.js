const initialState = {
    isOn: false,
  };
  
export const lightReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TURN_ON":
        return { isOn: true };
      case "TURN_OFF":
        return { isOn: false };
      case "TOGGLE":
        return { isOn: !state.isOn };
      default:
        return state;
    }
  };
  
  export default lightReducer;
  