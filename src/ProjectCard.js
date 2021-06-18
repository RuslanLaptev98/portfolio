import React from 'react'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'

export default function ProjectCard({
    media,
    link,
    image,
    title,
    type,
    functionality,
    technologies,
}) {
    return (
        <div>
            <a href={link} target="_blank">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            image={image}
                            title={title}
                            className={media}
                        ></CardMedia>

                        <CardContent>
                            <Typography>
                                <span className="type">Type:</span> {type}
                            </Typography>
                            <Typography>
                                <span className="type">Functionality:</span>{' '}
                                {functionality}
                            </Typography>
                            <Typography>
                                <span className="type">Technologies:</span>{' '}
                                {technologies}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>
        </div>
    )
}
