// Sidebar.jsx

import React, { createContext, useReducer, useContext } from "react";

const initialValue = {
  toggle: true,
  toggleNavbar: true,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOGGLE":
      return { ...state, toggle: payload };

    case "SET_TOGGLE_NAVBAR":
      return { ...state, toggleNavbar: payload };

    default:
      return state; // Remove the unnecessary object wrapping
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
