import React, {
  createContext,
  useReducer,
  useContext
  // useEffect
} from "react";

var LayoutStateContext = createContext();
var LayoutDispatchContext = createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {
  const [state, dispatch] = useReducer(layoutReducer, {
    isSidebarOpened: false
  });

  // useEffect(() => {
  //   onProfileLoad();
  // }, []);

  // const onProfileLoad = async () => {
  //   const user = await getUser();
  //   dispatch({ type: "SET_ROLE", role: !user ? null : user.role });
  // };

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  var context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };

// ###########################################################
function toggleSidebar(dispatch) {
  dispatch({
    type: "TOGGLE_SIDEBAR"
  });
}
