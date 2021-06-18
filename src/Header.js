import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header({ title }) {
    return (
        <AppBar elevation={0}>
            <Toolbar>
                <Typography className={title}>
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
    )
}