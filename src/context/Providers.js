import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsStates/authState';
import contactsInitialState from './initialsStates/contactsInitialState';
import auth from './reducer/auth';
import contacts from './reducer/contacts';

export const GlobleContext = createContext({});

const GlobleProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobleContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobleContext.Provider>
  );
};

export default GlobleProvider;
