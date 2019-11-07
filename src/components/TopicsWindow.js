import {List, ListItem, ListItemText} from "@material-ui/core";
import React, {useContext} from "react";
import useStyles from "../styles";
import {DashboardCTX} from "../Dashboard";
import {CTX} from "../store";

export default () => {
    const classes = useStyles();
    const {allChats} = useContext(CTX);
    const topics = Object.keys(allChats);
    const {setActiveTopic} = useContext(DashboardCTX);
    return (
        <List component={"ul"} className={classes.listContainer}>
            {
                topics.map((topic, index) => (
                        <TopicItem key={index} {...{topic, setActiveTopic}}/>
                    )
                )
            }
        </List>
    )
}


const TopicItem = ({topic, setActiveTopic}) => {
    const classes = useStyles();
    return (
        <ListItem button className={classes.topicsList}
                  onClick={(e) => setActiveTopic(topic)}>
            <ListItemText primary={topic}/>
        </ListItem>
    )
};