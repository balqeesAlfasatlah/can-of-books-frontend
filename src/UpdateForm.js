import { Button } from 'bootstrap'
import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.bookTitle}</h2>
                <h2>{this.props.bookDescription}</h2>
                <h2>{this.props.bookStatus}</h2>
                <Button type ='submit'>Submit</Button>

            </div>
        )
    }
}

export default UpdateForm
