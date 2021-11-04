import React from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'
import { Typography } from '@material-ui/core'

export default function Main({ breakpoints, media }) {
    return (
        <Container style={{ marginTop: '20px' }}>
            <div className='customTypo'>
                <Typography variant='h6'>Frontend Projects</Typography>
            </div>

            {/* Masonry */}
            <Masonry
                breakpointCols={breakpoints}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {/* Canvas */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev-canvas.netlify.app/'
                    image='https://i.postimg.cc/8czcFZ0W/canvas-logo.jpg'
                    title='Canvas'
                    type='React web application, test task for Frontend internship'
                    functionality='can draw a rectangle from 4 random lines'
                    technologies='JavaScript, React JS'
                    codelink='https://github.com/RuslanLaptev98/gnivc/tree/master/canvas'
                />
                {/* Explore Books v2*/}
                <ProjectCard
                    media={media}
                    link='https://explore-books.netlify.app/'
                    image='https://i.postimg.cc/cC2ZsPPf/explore-books.jpg'
                    title='Explore Books'
                    type='React web application, test task for Junior Frontend Developer position'
                    functionality='searches for books using Google Books API'
                    technologies='JavaScript, React JS, Redux'
                    codelink='https://github.com/RuslanLaptev98/explore-books'
                />
                {/* Crypto v2*/}
                <ProjectCard
                    other='v2, currently in development'
                    media={media}
                    link='https://code-name-crypto.netlify.app/'
                    image='https://i.postimg.cc/pVgNsw25/crypto.jpg'
                    title='Crypto v2'
                    type='React web application, personal project'
                    functionality='shows current cryptocurrency to fiat currency exchange rates with Chart JS, shows news about cryptocurrency using external API'
                    technologies='JavaScript, React JS, Chart JS'
                    codelink='https://github.com/RuslanLaptev98/crypto-v2'
                />
                {/* Questionnaire */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev-questionnaire.netlify.app/'
                    image='https://i.postimg.cc/QCSzNWVr/questionnaire-logo.png'
                    title='Questionnaire'
                    type='React web application, test task for Frontend Developer Intern position'
                    functionality='10 questions quiz app using Open Trivia DB API'
                    technologies='React JS, JavaScript, SCSS'
                    codelink='https://github.com/RuslanLaptev98/questionnaire'
                />
            </Masonry>

            <div className='customTypo'>
                <Typography variant='h6'>Archived Projects</Typography>
            </div>
            <Masonry
                breakpointCols={breakpoints}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {/* Ocean`s */}
                <ProjectCard
                    media={media}
                    link='https://vk.com/oceanstherapy'
                    image='https://i.postimg.cc/Dy8t15vR/oceans.jpg'
                    title='Ocean`s'
                    type='Node.js & mongoDB server application'
                    functionality='The chat bot sends the user his/her portrait depending on his/her answers in the community polls'
                    technologies='Node.js, mongoDB, VK API'
                />
                {/* Book Search */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev-book-search.netlify.app/'
                    image='https://i.postimg.cc/gJZDccPP/book-search.jpg'
                    title='Book Search'
                    type='React web application, test task for Frontend Developer Intern position'
                    functionality='searches for books using Open Library API'
                    technologies='React JS, JavaScript, SCSS'
                    codelink='https://github.com/RuslanLaptev98/book-search'
                />
                {/* Flights */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev-flights.netlify.app/'
                    image='https://i.postimg.cc/L5dtJQr7/Flights.jpg'
                    title='Flights'
                    type='React web application, test task for JavaScript Developer position'
                    functionality='renders and sorts given flights by price and travel time'
                    technologies='React JS, JavaScript, SCSS'
                    codelink='https://github.com/RuslanLaptev98/flights'
                />
                {/* Crypto */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev98.github.io/crypto/'
                    image='https://i.postimg.cc/pVgNsw25/crypto.jpg'
                    title='Crypto'
                    type='Web application, personal project'
                    functionality='shows current cryptocurrency to fiat currency exchange rates'
                    technologies='JavaScript (Fetch API, DOM Manipulation), SCSS'
                    codelink='https://github.com/RuslanLaptev98/crypto'
                />
                {/* Weather */}
                <ProjectCard
                    media={media}
                    link='https://ruslanlaptev98.github.io/weather/'
                    image='https://i.postimg.cc/FRQjDbPL/weather.jpg'
                    title='Weather'
                    type='Web application, personal project'
                    functionality='shows current weather in Moscow and St.Petersburg'
                    technologies='JavaScript (Fetch API, DOM Manipulation), SCSS'
                    codelink='https://github.com/RuslanLaptev98/weather'
                />
            </Masonry>
        </Container>
    )
}
