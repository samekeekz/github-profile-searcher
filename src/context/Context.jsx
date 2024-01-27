import { createContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_query': {
      return {
        ...state,
        query: action.payload,
      };
    }

    case 'fetch': {
      return {
        ...state,
        data: {},
        query: '',
        visible: true,
        hiddenText: true,
        error: null, // Clear previous error on new fetch
      };
    }
    case 'fetch_success': {
      return {
        ...state,
        data: action.data,
        visible: false,
      };
    }
    case 'fetch_error': {
      return {
        ...state,
        visible: false,
        hiddenText: false,
        error: action.error, // Store error details
      };
    }
    default:
      return state;
  }
};

const initialState = {
  data: null,
  visible: false,
  query: '',
  hiddenText: true,
  error: null,
};

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
