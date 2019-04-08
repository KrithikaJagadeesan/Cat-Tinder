import React, { Component } from 'react';
import {
  Col, ListGroup, ListGroupItem, Row
} from 'react-bootstrap'

class Cats extends Component {

destroyKat(id){
    this.props.deleteKitty(id)
}

    render() {
        return (
            <Row>
               	<Col xs={12}>
                    <ListGroup>
                        {this.props.cats.map((cat, index) =>{
                          return (
                            <ListGroupItem key={index}>
                                <h4>
                                    <span className='cat-name'>
                                    {cat.name}
                                    </span>
                                    - <small className='cat-age'>{cat.age} years old</small>
                                </h4>

                                <span className='cat-enjoys'>
                                {cat.enjoys}
                                </span>
                                <button onClick= {this.destroyKat.bind(this, cat.id)} type="button">Hsssss!</button>
                            </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default Cats;
