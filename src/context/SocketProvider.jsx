import React, { createContext, useContext, useMemo } from 'react'
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

const SocketProvider = (props) => {
    //https://wicikibackendcall.onrender.com
    // const socket = useMemo(() => io("video-peers-server.onrender.com/"), []);
    const socket = useMemo(() => io("wicikibackendcall.onrender.com/"), []);
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

export default SocketProvider