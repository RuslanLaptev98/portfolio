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
                {/* Crypto v2*/}
                <ProjectCard
                    other="code name: crypto v2, currently in development"
                    media={media}
                    link="https://code-name-crypto.netlify.app/"
                    image="https://i.postimg.cc/pVgNsw25/crypto.jpg"
                    title="Crypto v2"
                    type="SPA, personal project"
                    functionality="shows current cryptocurrency to fiat currency exchange rates with Chart JS, shows news about cryptocurrency using external API"
                    technologies="JavaScript, React JS, Chart JS"
                    codelink="https://github.com/RuslanLaptev98/crypto-v2"
                />

                {/* Questionnaire */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev-questionnaire.netlify.app/"
                    image="https://i.postimg.cc/QCSzNWVr/questionnaire-logo.png"
                    title="Questionnaire"
                    type="React web application, test task for a Frontend Developer Intern position"
                    functionality="10 questions quiz app using Open Trivia DB API"
                    technologies="React JS, JavaScript, SCSS"
                    codelink="https://github.com/RuslanLaptev98/questionnaire"
                />
                {/* Book Search */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev-book-search.netlify.app/"
                    image="https://i.postimg.cc/gJZDccPP/book-search.jpg"
                    title="Book Search"
                    type="React web application, test task for Frontend Developer Intern position"
                    functionality="searches for books using Open Library API"
                    technologies="React JS, JavaScript, SCSS"
                    codelink="https://github.com/RuslanLaptev98/book-search"
                />
                {/* Flights */}
                <ProjectCard
                    media={media}
                    link="https://ruslanlaptev-flights.netlify.app/"
                    image="https://i.postimg.cc/L5dtJQr7/Flights.jpg"
                    title="Flights"
                    type="React web application, test task for JavaScript Developer position"
                    functionality="renders and sorts given flights by price and travel time"
                    technologies="React JS, JavaScript, SCSS"
                    codelink="https://github.com/RuslanLaptev98/flights"
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
                    codelink="https://github.com/RuslanLaptev98/crypto"
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
                    codelink="https://github.com/RuslanLaptev98/weather"
                />
            </Masonry>
        </Container>
    )
}
