import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AppsIcon from '@material-ui/icons/Apps';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
        marginRight: 'auto'
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
     },
     sectionDesktop: {
         display: 'none',
     [theme.breakpoints.up('md')]: {
         display: 'flex',
        },
     },
     sectionMobile: {
         dipaly: 'flex',
         [theme.breakpoints.up('md')]: {
             display: 'none'
         },
     },
     desktopMenu: {
         "& .MuiMenu-list": {
             width: "100%",
             height: "100%",
             Color: "#242433"
         }
     }
 }));


export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    }
    
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-account-menu';
    const renderMenu = (
        <Menu
            className={classes.desktopMenu}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem 
                onClick={handleMenuClose}
                component={Link}
                to={"/mymatches"}
            >
                My Matches
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <AppsIcon />
                    </Badge>
                </IconButton>
                <p>Matches</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>

            <AppBar className={classes.appbar} position="static">
                <ToolBar disableGutters>
                    <Button 
                        className={classes.logoContainer}
                        component={Link}
                        to={"/"}
                    >
                        <img alt="site logo" src={logo} className={classes.logo} />
                    </Button>
                    <div className={classes.sectionDesktop}>
                        <IconButton 
                            color="inherit"
                            component={Link}
                            to={"/liked"}
                            
                        >
                            <Badge badgeContent={null} color="secondary">
                                <AppsIcon style={{fontSize:"60"}}/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            style={{marginRight: "5em"}}
                            
                            aria-label="accout of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle style={{fontSize:"60"}} />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton> 
                    </div>
                </ToolBar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </>
    )
};

