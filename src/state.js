import { useState, createContext, useContext } from "react";

export const StateContext = createContext(null);

const StateLogic = (props) => {
  const [senderAddress, _senderAddress] = useState(null);
  const [authenticated, _authenticated] = useState(false);
  const [fetchWalletRes, _fetchWalletRes] = useState([]);
  const [selectedItems, _selectedItems] = useState([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);




  let contextValue = {
    senderAddress,
    _senderAddress,

    authenticated,
    _authenticated,

    fetchWalletRes,
    _fetchWalletRes,

    selectedItems,
    _selectedItems,

    email,
    setEmail,

    emailError,
    setEmailError,

  };

  return (
    <StateContext.Provider value={{ ...contextValue }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateLogic;

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppStateProvider");
  }
  return context;
};
