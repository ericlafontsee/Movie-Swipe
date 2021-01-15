import { createMuiTheme } from '@material-ui/core/styles';

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
        }
    },
});
