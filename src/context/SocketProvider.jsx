// import React, { createContext, useContext, useMemo } from 'react'
// import { io } from "socket.io-client";

// const SocketContext = createContext(null);

// export const useSocket = () => {
//     const socket = useContext(SocketContext);
//     return socket;
// }

// const SocketProvider = (props) => {
//     //https://wicikibackendcall.onrender.com
//     // const socket = useMemo(() => io("video-peers-server.onrender.com/"), []);
//     const socket = useMemo(() => io("wicikibackendcall.onrender.com/"), []);
//     return (
//         <SocketContext.Provider value={socket}>
//             {props.children}
//         </SocketContext.Provider>
//     )
// }

// export default SocketProvider






import React, { createContext, useContext, useMemo } from 'react'
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    const socket = useMemo(() => {
        if (typeof window !== "undefined") {
            return io("https://wicikibackendcall-zd2l.onrender.com/")
        }
        return null; // do not create socket on server
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;
