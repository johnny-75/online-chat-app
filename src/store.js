import React, {useReducer, createContext} from "react";
import io from "socket.io-client"

export const CTX = createContext();

const initialState = {
    General: [
        {
            from: "John",
            msg: "hi"
        },
        {
            from: "Sharath",
            msg: "hello"
        }
    ],
    Public: [
        {
            from: "Jeevan",
            msg: "hi"
        },
        {
            from: "Gagan",
            msg: "hello"
        }
    ]
};

const reducer = (state, action) => {
    const {from, msg, topic} = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE': {
            return ({
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            })
        }
        default:
            return state;
    }
};

let socket;

const sendChatAction = (msg) => {
    socket.emit('on chat', msg);
};

export default function Store(props) {

    if (!socket) {
        socket = io(':3001/');
        socket.on('on chat', function (msg) {
            dispatcher({type: "RECEIVE_MESSAGE", payload: msg})
        });
    }

    const [allChats, dispatcher] = useReducer(reducer, initialState);
    return (
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}
        </CTX.Provider>
    )
}