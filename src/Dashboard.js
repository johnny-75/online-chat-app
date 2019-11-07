import React, {createContext, useContext} from "react"
import {Paper, Typography} from '@material-ui/core';
import {CTX} from './store'
import useStyles from './styles'
import {ChatWindow, InputWindow, TopicsWindow} from './components'

export const DashboardCTX = createContext();

export const ChatBoard = (props) => {

    const [textValue, setTextValue] = React.useState("");
    const {allChats} = useContext(CTX);
    const topics = Object.keys(allChats);
    const [activeTopic, setActiveTopic] = React.useState(topics[0]);

    return (
        <DashboardCTX.Provider value={{textValue, setTextValue, activeTopic, setActiveTopic}}>
            {props.children}
        </DashboardCTX.Provider>
    )
};

export default function Dashboard() {
    const classes = useStyles();
    const {activeTopic} = useContext(DashboardCTX);

    return (
        <div>
            <Paper className={classes.root}>
                <div style={{textAlign: "center"}}>
                    <Typography variant="h5" component="h3">
                        Chat Application
                    </Typography>
                    <Typography component="p">
                        {activeTopic}
                    </Typography>
                </div>
                <div className={classes.flex}>

                    <div className={classes.topicsWindow}>
                        <TopicsWindow/>
                    </div>
                    <div className={classes.chatWindow}>
                        <ChatWindow/>
                    </div>
                </div>
                <InputWindow/>
            </Paper>
        </div>
    )
}

