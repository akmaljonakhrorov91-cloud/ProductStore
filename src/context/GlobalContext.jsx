import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};
// reducer fcuntion
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Add_to_cart":
      return { ...state, cart: [...state.cart, payload] };
    case "delete":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id == payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };
    case "Calculate_total":
      const { totalPrice, totalAmount } = state.cart.reduce(
        (acc, curVal) => {
          const { amount, price } = curVal;
          const itemTotal = amount * price;
          acc.totalAmount += amount;
          acc.totalPrice += itemTotal;
          return acc;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalPrice, totalAmount };
    default:
      return state;
  }
};
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "Calculate_total" });
  }, [state.cart]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
