import { makeStyles } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Header from './Header'
import Main from './Main'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121',
        },
    },
})
const useStyles = makeStyles((theme) => {
    return {
        title: {
            flexGrow: 1,
        },
        toolbar: theme.mixins.toolbar,
        media: {
            height: 0,
            paddingTop: '35%',
        },
    }
})

function App() {
    const classes = useStyles()
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1,
    }
    return (
        <div className="App">
            <ThemeProvider theme={myTheme}>
                <Header title={classes.title} />
                <div className={classes.toolbar} />
                <Main breakpoints={breakpoints} media={classes.media} />
            </ThemeProvider>
        </div>
    )
}

export default App
