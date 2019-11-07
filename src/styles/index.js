import {makeStyles} from "@material-ui/core";

 export  default makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: "50px"
    },
    flex: {
        display: "flex"
    },
    topicsWindow: {
        width: "30%",
        height: "300px",
        borderRight: "1px solid gray"
    },
    chatWindow: {
        width: "70%",
        margin: "10px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        width: "15%",
        margin: theme.spacing(1)
    },
    topicsList: {
        width: "100%",
        // maxWidth: "360px",
        backgroundColor: theme.palette.background.paper,
    },
    listContainer: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: "300px",
    },
    chip: {
        margin: theme.spacing(1),
    },
    avatar: {
        maxWidth: "50px",
        // height: "5px",
        fontSize: "20px"
    },
}));