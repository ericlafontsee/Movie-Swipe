import { React, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    marginTop: "10em",
    width: "30em",
  },
  hero: {
    marginTop: "10em",
    height: "20em",
  },
  card: {
    boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
    borderStyle: "groove"

  },
  cardHeader: {
    display: "inline-block",
  },
  cardContent: {
    
  },
  div: {
    borderRight: "1px dashed grey",
    height: "15em",
    marginTop: "-1em",
    marginBottom: "-2em",
    marginRight: "5em",
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
  const [ open, setOpen ] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container className={classes.heroContainer}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Button className={classes.button}>
              Admit
            </Button>
          <div className={classes.div}>
            <form>
            <TextField 
              className={classes.email} 
              id="standard-basic" 
              label="Email" 
            />
            <TextField 
              className={classes.password} 
              id="standard-basic" 
              label="Password" 
            />
            </form>
          </div>
          </CardContent>
        </Card>
        <div className={classes.signup}>
          <Button 
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
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
              <Button style={{ float: "right", height: "1em", width: "1em"}}>
              <CloseRoundedIcon button onClick={handleClose}/>
              </Button>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className={classes.signUpForm}>
                  <TextField
                  className={classes.leftQuestions}
                  label="First Name"
                  />
                  <TextField
                  className={classes.rightQuestions}
                  label="Last Name"
                  />
                  <TextField
                  className={classes.leftQuestions}
                  label="Email"
                  />
                  <TextField
                  className={classes.rightQuestions}
                  label="password"
                  />
                  <Button 
                    className={classes.submitButton}
                    variant="outlined">
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