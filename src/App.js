import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Masonry from 'react-masonry-css'

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
                <AppBar elevation={0}>
                    <Toolbar>
                        <Typography className={classes.title}>
                            Web Developer Portfolio
                        </Typography>

                        <Typography>
                            Ruslan Laptev
                            <a
                                href="https://github.com/RuslanLaptev98"
                                alt="GitHub"
                                title="GitHub"
                                className="icons-link"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ruslan-laptev-100579177/"
                                alt="LinkedIn"
                                title="LinkedIn"
                                className="icons-link"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://ruslanlaptev98.github.io/resume/"
                                alt="Resume"
                                title="Resume"
                                className="icons-link"
                                target="_blank"
                            >
                                <i className="fas fa-file"></i>
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbar}></div>
                <Container>
                    {/* Masonry */}
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {/* Book Search */}
                        <div>
                            <a
                                href="https://ruslanlaptev-book-search.netlify.app/"
                                target="_blank"
                            >
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            image="https://i.postimg.cc/gJZDccPP/book-search.jpg"
                                            title="Book Search"
                                            className={classes.media}
                                        ></CardMedia>

                                        <CardContent>
                                            <Typography>
                                                <span className="type">
                                                    Type:
                                                </span>{' '}
                                                Web application, test task for
                                                frontend developer intern
                                                position
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Functionality:
                                                </span>{' '}
                                                searches for books using Open
                                                Library API
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Technologies:
                                                </span>{' '}
                                                React JS, JavaScript
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>

                        {/* Crypto */}
                        <div>
                            <a
                                href="https://ruslanlaptev98.github.io/crypto/"
                                target="_blank"
                            >
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.postimg.cc/pVgNsw25/crypto.jpg"
                                            title="Crypto"
                                        ></CardMedia>

                                        <CardContent>
                                            <Typography>
                                                <span className="type">
                                                    Type:
                                                </span>{' '}
                                                Web application, personal
                                                project
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Functionality:
                                                </span>{' '}
                                                shows current cryptocurrency to
                                                fiat currency exchange rates
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Technologies:
                                                </span>{' '}
                                                JavaScript (Fetch API, DOM
                                                manipulation)
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>

                        {/* Weather */}
                        <div>
                            <a
                                href="https://ruslanlaptev98.github.io/weather/"
                                target="_blank"
                            >
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            image="https://i.postimg.cc/FRQjDbPL/weather.jpg"
                                            title="Weather"
                                            className={classes.media}
                                        ></CardMedia>

                                        <CardContent>
                                            <Typography>
                                                <span className="type">
                                                    Type:
                                                </span>{' '}
                                                Web application, personal
                                                project
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Functionality:
                                                </span>{' '}
                                                shows current weather in Moscow
                                                and St.Petersburg
                                            </Typography>
                                            <Typography>
                                                <span className="type">
                                                    Technologies:
                                                </span>{' '}
                                                JavaScript (Fetch API, DOM
                                                manipulation)
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </a>
                        </div>
                    </Masonry>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App
