import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo,
} from 'react';

const InitialState = {
  user: null, // user object for the app.
  userStatus: false,
  // redirectToUrl: "",
  otpTimeout: false,
  isConnected: undefined,
  enclaveInfo: {},
  selectedEnclave: {},
  questionBanks: [],
  AdminData: {},
  MaterialContent: {},
};

/** @fixme Decode the last state when fetching from localstorage and then assign. */
export const DefaultState = localStorage.getItem('last_state')
  ? JSON.parse(localStorage.getItem('last_state'))
  : InitialState;

export const StoreContext = createContext(DefaultState);
export const StoreDispatchContext = createContext();

export const ContextStoreProvider = ({ children }) => {
  // eslint-disable-next-line consistent-return
  const StateReducer = (State, action) => {
    console.log(action.type, action);

    switch (action.type) {
      /** @note Keeping the user actions same as opCodes passed from the backend to keep it in sync */
      case 'Login': {
        const state = { ...State };
        state.user = action.user;
        localStorage.setItem('last_state', JSON.stringify(state));
        return state;
      }

      case 'browser_reload': {
        // console.log("browser_reload");
        localStorage.setItem('last_state', JSON.stringify({ ...State }));
        return State;
      }

      case 'RemoveState': {
        localStorage.removeItem('last_state');
        localStorage.removeItem('otpTimeout');
        return InitialState;
      }

      case 'Log': {
        console.log(action);
        return State;
      }

      case 'ADD_QUESTION_BANK': {
        return {
          ...State,
          questionBanks: [...State.questionBanks, action?.payload],
        };
      }
      case 'AddAdminDetails': {
        console.log('AdminData', action);
        const state = { ...State };
        state.AdminData = action.AdminData;
        return state;
      }
      case 'AddContentDetails': {
        console.log('Material Details', action);
        const state = { ...State };
        state.MaterialContent = action.MaterialContent;
        return state;
      }
      // case "REDIRECT_TO": {
      //   const state = { ...State };
      //   if(!action.redirectToUrl.includes("sign-in")){
      //     state.redirectToUrl = action.redirectToUrl;
      //   }
      //   State = state;
      //   return State;
      // }
      default: {
        return DefaultState;
      }
    }
    // return null;
  };

  const [State, StateDispatch] = useReducer(StateReducer, DefaultState);

  const Store = useMemo(() => [State, StateDispatch], [State]);

  const StoreDispatch = useCallback(StateDispatch, [StateDispatch]);

  return (
    <StoreDispatchContext.Provider value={StoreDispatch}>
      <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
    </StoreDispatchContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}

export function useDispatch() {
  return useContext(StoreDispatchContext);
}
