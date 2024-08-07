import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Col } from 'antd'


function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((allBeers) => {
            console.log(allBeers.data)
            setBeers(allBeers.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Col className='beer-catalogue'>
            {beers && beers.map((oneBeer) => {

                return (
                    <Link key={oneBeer._id} to={`/beers/${oneBeer._id}`}>
                        <Card className='beer-div'>
                            <div>
                                <img src={oneBeer.image_url} alt={oneBeer.name} height='105'/>
                            </div>
                            <div>
                                <h2>{oneBeer.name}</h2>
                                <h4>{oneBeer.tagline}</h4>
                                <h6>Created by: {oneBeer.contributed_by}</h6>
                            </div>
                        </Card>
                    </Link>
                )
            })}
        </Col>
    )
}

export default AllBeersPage;
