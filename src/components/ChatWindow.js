import {Avatar, CardHeader, List} from "@material-ui/core";
import React, {useContext} from "react";
import useStyles from '../styles'
import {CTX} from "../store";
import {DashboardCTX} from "../Dashboard";

export default () => {
    const classes = useStyles();
    const {allChats} = useContext(CTX);
    const {activeTopic} = useContext(DashboardCTX);
    return(
        <List component={"ul"} className={classes.listContainer}>
            {
                allChats[activeTopic].map((chat, index) => (
                        <ChatItem key={index} {...chat}/>
                    )
                )
            }
        </List>
    )
}


const ChatItem = (chat) => {
    const classes = useStyles();
    return (
        <CardHeader
            style={{textAlign: "left", padding: "0px", margin: "0 5px 5px 0",}}
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {chat.from.substr(0, 1).toUpperCase()}
                </Avatar>
            }
            title={chat.from}
            subheader={chat.msg}
        />
    )
};