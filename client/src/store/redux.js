import { createStore } from "redux";

export const ACTIONS = {
  LOADING: "LOADING",
  GET_POSTS: "GET_POSTS",
  LOAD_POSTS: "LOAD_POSTS",
  LOAD_APOD: "LOAD_APOD",
};

const initialState = {
  apod: {},
  loading: false,
  loaded: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    
    case ACTIONS.LOAD_APOD: {
      return {
        ...state,
        apod: action.payload,
        loading: false,
        loaded: true
      }
    }
    default:
      return state;
  }
};

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export function createReduxStore() {
  const store = createStore(dataReducer, enableReduxDevTools);
  return store;
}
