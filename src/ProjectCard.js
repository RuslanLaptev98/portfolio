import React from 'react'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'

export default function ProjectCard({
    other,
    media,
    link,
    image,
    title,
    type,
    functionality,
    technologies,
    codelink,
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
                            {other && (
                                <Typography>
                                    <em style={{ opacity: 0.5 }}>{other}</em>
                                </Typography>
                            )}
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
                            <Typography>
                                <span className="type">Code:</span>
                                <a
                                    href={codelink}
                                    target="_blank"
                                    className="card__link"
                                >
                                    <i className="fab fa-github card__icon"></i>
                                    Github link
                                </a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>
        </div>
    )
}
