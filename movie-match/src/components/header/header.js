import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import logo from '../../assets/Header.svg';


 const useStyles = makeStyles((theme) => ({
     logo: {
         backgroundColor: "main",
         height: "8em",
         [theme.breakpoints.down("md")]: {
             height: "7em",
             width: "80%",
             marginLeft: "-10em"
         },
         [theme.breakpoints.down("xs")]: {
             height: "5.5em",
             width: "75%",
             marginLeft: "-5.5em"
         }
     },
     logoContainer: {
        padding: 0,
     },
     appbar: {
         backgroundColor: "#EF4B4B",
         zIndex: theme.zIndex.modal + 1
     },
     toolbarMargin: {
         ...theme.mixins.toolbar,
         marginBootom: "3em",
         [theme.breakpoints.down("md")]: {
             marginBottom: "2em"
         },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
     }
 }));



export default function Header() {

    const classes = useStyles();
    const theme = useTheme();
    return (
        <>

            <AppBar className={classes.appbar} position="fixed">
                <ToolBar disableGutters>
                    <Button className={classes.logoContainer}>
                        <img alt="site logo" src={logo} className={classes.logo} />
                    </Button>
                </ToolBar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </>
    )
};

