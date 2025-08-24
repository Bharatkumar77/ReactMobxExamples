import React, { createContext, useContext } from 'react';
import { Store } from '../MobxStore';

export const StoreContext = createContext(Store);

export const StoreProvider = ({ children }) => 
      <StoreContext.Provider value={Store}>
        {children}
      </StoreContext.Provider>;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}