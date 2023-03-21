import { useState, createContext, useContext } from "react";

export const StateContext = createContext(null);

const StateLogic = (props) => {
  const [senderAddress, _senderAddress] = useState(null);
  const [authenticated, _authenticated] = useState(false);
  const [fetchWalletRes, _fetchWalletRes] = useState([]);
  const [selectedItems, _selectedItems] = useState([]);
  const [userStaked, _userStaked] = useState(false);
  const [timeToUnstake, _timeToUnstake] = useState(null);
  const [listBadgerState, _listBadgerState] = useState([]);
  const [listBabyBadgerState, _listBabyBadgerState] = useState([]);
  const [badgers, _badgers] = useState(false);
  const [babyBadgers, _babyBadgers] = useState(false);
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

    userStaked,
    _userStaked,

    timeToUnstake,
    _timeToUnstake,

    listBadgerState,
    _listBadgerState,

    listBabyBadgerState,
    _listBabyBadgerState,

    badgers,
    _badgers,

    babyBadgers,
    _babyBadgers,

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
