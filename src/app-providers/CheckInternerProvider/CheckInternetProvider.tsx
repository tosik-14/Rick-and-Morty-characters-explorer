import React, { useState, createContext, useContext, useEffect } from "react";
import { getNetworkStateAsync } from 'expo-network';

type InternetContextType = {
    isConnected: boolean;
}

const InternetContext = createContext<InternetContextType>({isConnected: true});

export const CheckInternetProvider: React.FC<{children: React.ReactNode }> = ({children}) => {
    const [isConnected, setIsConnected] = useState(true);

    const checkConnection = async () => {
        const status = await getNetworkStateAsync();
        setIsConnected(status.isConnected && status.isInternetReachable !== false);
    }
    console.log("INET PROVIDER", isConnected);
    useEffect(() => {
        checkConnection();
        const timeout = setInterval(() => {
            checkConnection();
        }, 10000);
        return () => clearInterval(timeout);
    }, []);

    return (
        <InternetContext.Provider value={{isConnected}}>
            {children}
        </InternetContext.Provider>
    );
};

export const useInternet = () => useContext(InternetContext);