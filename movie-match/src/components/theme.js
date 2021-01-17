import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const matchRed = '#EF4B4B';
const matchGrey = '#707070';
const matchLightGrey = '#afafac';
const matchBlue = "#0B72B9";


export default createMuiTheme({
    palette: {
        common: {
            red: matchRed,
            grey: matchGrey,
            lightGrey: matchLightGrey,
            blue: matchBlue
        },
        primary: {
            main: matchRed
        },
        secondary: {
            main: matchGrey
        },

    },
    typography: {
        buttonMain: {
            backgroundColor: matchRed,
            color: "white",
            width: "7.5em",
            height: "2.75em"
        },
        buttonSecondary: {
            backgroundColor: matchGrey,
            color: "white",
            width: "7.5em",
            height: "2.75em"
        }
    }
});
