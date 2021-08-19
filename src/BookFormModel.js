import React from 'react';
import {Button, Form } from 'react-bootstrap';
import React, { Component } from 'react'
import { Modal } from 'bootstrap';

export class BookFormModel extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Modal show={this.props.showModal} onHide={this.props.closeHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your book</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={this.props.addBook}>

                        <Form.Control size="lg" type="text" placeholder="book title" name="addTitle" />
                        <Form.Control size="lg" type="text" placeholder="book description" name="addDescription" />
                        <Form.Control size="lg" type="text" placeholder="book img" name="addImg" />
                        <Form.Control size="lg" type="text" placeholder="book status" name="addStatus" />
                        <input type="submit" value="Submit" />
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>






















        )
    }
}

export default BookFormModel
