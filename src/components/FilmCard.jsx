import React from 'react'
import { Card, CardImg, Col, CardImgOverlay, CardTitle, CardText, Badge } from "reactstrap"
import { FaTv } from "react-icons/fa6";



function FilmCard(props) {
    return (

        <Col md={3}>

            <Card inverse className='shadow-sm mb-3'>
                <CardImg
                    alt="Card image cap"
                    src={props.films.Poster}
                    style={{
                        height: 270
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                        <FaTv size={20} color="white" /> &nbsp;{props.films.imdbRating}
                        <Badge color="danger shadow-sm ">
                            {props.films.Type}
                        </Badge>
                    </CardTitle>
                    <CardText>
                        {props.films.Title}
                    </CardText>
                    <CardText>
                        <Badge color="dark">
                            <small className="text-light">
                                {props.films.Year}
                            </small>
                        </Badge>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </Col>

    )
}

export default FilmCard