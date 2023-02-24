import { createContext } from "react";

export const StateContext = createContext(null);

const StateLogic = (props) => {
  const [senderAddress, _senderAddress] = useState(null);
  const [authenticated, _authenticated] = useState(false);

  let contextValue = {
    senderAddress,
    _senderAddress,

    authenticated,
    _authenticated,
  };

  console.log("pools", pools);

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
