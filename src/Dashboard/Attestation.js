import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class Attestation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data:{
            category:'',
            justification:''

        }
     };
  }

  render() {
    return (
      <div>
        <div class="card border-dark">
          <div class="card-header text-primary">
            <b>Attestation</b>
          </div>
          <div class="card-body">
            Welcome to the attestation section, please complete the form below
            to download your attestation.
          </div>
        </div>
        <br />

        <div class="card border-dark">
          <div class="card-body ">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter a category"
                  name="category"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Justification</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please provide justification."
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Attestation