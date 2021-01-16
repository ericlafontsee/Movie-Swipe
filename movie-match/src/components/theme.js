import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const matchRed = '#EF4B4B';
const matchGrey = '#707070';

export default createMuiTheme({
    palette: {
        common: {
            red: matchRed,
            grey: matchGrey
        },
        primary: {
            main: matchRed
        },
        secondary: {
            main: matchGrey
        }
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
