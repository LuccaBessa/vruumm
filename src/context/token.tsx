import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TokenContextType = {
    tokenState: TokenState | undefined;
    setToken: Function;
};

type TokenState = {
    token: string | undefined;
};

const TokenContext = createContext<TokenContextType>({
    tokenState: { token: undefined },
    setToken: () => null,
});

const TokenProvider = ({ children }: any) => {
    const [tokenState, handleTokenState] = useState<TokenState>();

    const setToken = (token: string) => {
        AsyncStorage.setItem('token', token);

        handleTokenState({
            token: token,
        });
    };

    return <TokenContext.Provider value={{ tokenState, setToken }}>{children}</TokenContext.Provider>;
};

const useTokenContext = () => {
    const context = useContext(TokenContext);
    return context;
};

export { TokenProvider, useTokenContext };