import React, { Component } from 'react'
import { Form ,Button} from 'react-bootstrap';

export class Attestation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data:{
            category:'',
            justification:''
        },
        attestation:{
          category:'',
          justification:''
      },
        showAttestation:false
     };
  }

 formOnChange=(event)=>{

   var current=this.state.data
   current[event.target.name]=event.target.value
   this.setState({data:current})
 }

 onSubmit=(event)=>{
  event.preventDefault()
  this.setState({showAttestation:true})
 }

  render() {
    console.log(this.state.attestation)
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
            <div class="row">
              <div class="col-6">
              <Form onSubmit={this.onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter a category"
                  name="category"
                  onChange={this.formOnChange}
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
                  name="justification"
                  onChange={this.formOnChange}
                />
              </Form.Group>

              <Button type="submit"> Create attestation</Button>

            </Form>

              </div>
              <div class="col-6">
                <div >

                {this.state.showAttestation?this.state.data.category:''}
                <br/>
                 {this.state.showAttestation?this.state.data.justification:''}
                  

                </div>

              </div>

            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Attestation