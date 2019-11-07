import {Button, Container, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, {useContext} from "react";
import useStyles from '../styles'
import {DashboardCTX} from "../Dashboard";
import {CTX} from "../store";

export default () => {
    const classes = useStyles();
    const {textValue, setTextValue, activeTopic} = useContext(DashboardCTX);
    const {sendChatAction} = useContext(CTX);
    const sender = `john ${Math.random(100).toFixed(0)}`;
    return (
        <Container className={classes.flex}>
            <TextField
                className={classes.textField}
                label={"Send Message"}
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
                fullWidth
                margin="normal"
                placeholder="type here.."
            />
            <Button variant="outlined" color="primary"
                    className={classes.button} size="small"
                    onClick={(e) => {
                        if (textValue !== '') {
                            sendChatAction({from: sender, msg: textValue, topic: activeTopic});
                            setTextValue("");
                        }
                    }}>
                Send
                <SendIcon style={{marginLeft: "2px"}}>send</SendIcon>
            </Button>
        </Container>
    )
}