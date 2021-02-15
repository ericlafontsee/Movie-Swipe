import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    marginTop: "10em",
    width: "32em"
  },
  hero: {
    marginTop: "10em",
    height: "20em"
  },
  card: {
    boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
    borderStyle: "groove",
    width: "100%"
  },
  cardHeader: {
    display: "inline-block"
  },
  cardContent: {},
  div: {
    borderRight: "1px dashed grey",
    marginTop: "-1em",
    marginBottom: "-2em",
    marginRight: "5em"
  },
  button: {
    backgroundColor: theme.palette.common.red,
    height: "14em",
    width: "1em",
    float: "right",
    color: "white"
  },
  email: {
    marginTop: "1.5em",
    marginLeft: "2em",
    padding: ".5em"
  },
  password: {
    marginTop: "1.5em",
    marginLeft: "2em",
    padding: ".5em"
  },
  signup: {
    marginTop: "2em",
    width: "30em",
    textAlign: "center"
  },
  signUpForm: {
    marginLeft: "1em",
    marginRight: "1em",
    textAlign: "center"
  },
  leftQuestions: {
    marginRight: "2em",
    marginBottom: "1em"
  },
  rightQuestions: {
    marginLeft: "2em",
    marginBottom: "1em"
  },
  submitButton: {
    display: "block",
    margin: "auto",
    marginTop: "1em"
  }
}));

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [upForm, setUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [inForm, setInForm] = useState({
    email: "",
    password: ""
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSignUp() {
    if (!upForm.email) {
      console.log("please enter an email address");
      return;
    } else if (!upForm.password) {
      console.log("please enter a password");
      return;
    } else if (!upForm.firstName) {
      console.log("please enter a first name");
      return;
    } else if (!upForm.lastName) {
      console.log("please enter a last name");
      return;
    } else {
      API.getUser(upForm.email).then((response) => {
        if (response.data === null) {
          API.createUser({ ...upForm })
            .then((response) => {
              console.log(response);
              return response;
            })
            .then((response) => {
              console.log("response", response);
              return response;
              setUpForm({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
              });
            })
            .catch((err) => {
              console.log(err);
              alert("Email address provided is already signed up");
            });
        } else {
          console.log("pick a different email");
        }
      });
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpForm({ ...upForm, [name]: value });
  };

  const handleSignInChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInForm({ ...inForm, [name]: value });
  };

  function handleSignIn(inForm) {
    console.log(inForm);
    if (!inForm.email) {
      console.log("please enter your email");
      return;
    } else if (!inForm.password) {
      console.log("please enter your password");
      return;
    } else {
    }
  }

  return (
    <>
      <Container className={classes.heroContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Button className={classes.button} onClick={handleSignIn}>
              Admit
            </Button>
            <div className={classes.div}>
              <form style={{ height: "100%" }}>
                <TextField
                  className={classes.email}
                  id="standard-basic"
                  label="Email"
                  name="email"
                  onChange={(e) => {
                    handleSignInChange(e);
                  }}
                />
                <TextField
                  className={classes.password}
                  id="standard-basic"
                  label="Password"
                  name="password"
                  onChange={(e) => {
                    handleSignInChange(e);
                  }}
                />
              </form>
            </div>
          </CardContent>
        </Card>
        <div className={classes.signup}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Not a user? Sign up for free today!
          </Button>
          <Dialog
            disableBackdropClick
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Signup"}
              <Button style={{ float: "right", height: "1em", width: "1em" }}>
                <CloseRoundedIcon button onClick={handleClose} />
              </Button>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className={classes.signUpForm}>
                  <TextField
                    className={classes.leftQuestions}
                    label="First Name"
                    required
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    className={classes.rightQuestions}
                    label="Last Name"
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    className={classes.leftQuestions}
                    label="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    className={classes.rightQuestions}
                    label="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <Button
                    className={classes.submitButton}
                    variant="outlined"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSignUp(upForm);
                      handleClose();
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </>
  );
}
