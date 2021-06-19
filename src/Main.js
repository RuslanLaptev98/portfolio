import React from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'

export default function Main({ breakpoints, media }) {
    return (
        <Container>
            {/* Masonry */}
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {/* Flights */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev-flights.netlify.app/"
                    image="https://i.postimg.cc/L5dtJQr7/Flights.jpg"
                    title="Flights"
                    type="Web application, test task for JavaScript Developer position"
                    functionality="renders and sorts given flights by price and travel time"
                    technologies="React JS, JavaScript, SCSS"
                />

                {/* Book Search */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev-book-search.netlify.app/"
                    image="https://i.postimg.cc/gJZDccPP/book-search.jpg"
                    title="Book Search"
                    type="Web application, test task for Frontend Developer Intern position"
                    functionality="searches for books using Open Library API"
                    technologies="React JS, JavaScript, SCSS"
                />

                {/* Crypto */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev98.github.io/crypto/"
                    image="https://i.postimg.cc/pVgNsw25/crypto.jpg"
                    title="Crypto"
                    type="Web application, personal project"
                    functionality="shows current cryptocurrency to fiat currency exchange rates"
                    technologies="JavaScript (Fetch API, DOM Manipulation), SCSS"
                />

                {/* Weather */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev98.github.io/weather/"
                    image="https://i.postimg.cc/FRQjDbPL/weather.jpg"
                    title="Weather"
                    type="Web application, personal project"
                    functionality="shows current weather in Moscow and St.Petersburg"
                    technologies="JavaScript (Fetch API, DOM Manipulation), SCSS"
                />
            </Masonry>
        </Container>
    )
}
