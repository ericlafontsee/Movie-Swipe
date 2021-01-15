import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import axios from 'axios';

import logo from '../../assets/Header.svg';
const queryGenre = "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

 const useStyles = makeStyles((theme) => ({
     logo: {
         height: "8em",
         backgroundColor: "main",
     },
     logoContainer: {
        padding: 0
     },
     appbar: {
         backgroundColor: "#EF4B4B",
     },
     toolbarMargin: {
         ...theme.mixins.toolbar,
         marginBootom: "3em"
     }
 }));



export default function Header() {
    function getUser(){
        axios.get(queryGenre).then(response => console.log(response))};
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
        {getUser()}
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

