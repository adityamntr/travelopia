import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormText, FormGroup, Input, Label } from 'reactstrap';
import AppNavigation from './AppNavigation';
import background from "./img/tp.png";
import background1 from "./img/slider1.jpg";

class ClientAdd extends Component {

    emptyItem = {
        name: '',
        email: '',
        destination: '',
        travellerCount: '',
        budget : ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

      handleCloseDialog() {
        this.setState({

        });
      }

async handleSubmit(event) {
    alert('Successfully submitted');
    event.preventDefault();
    const {item} = this.state;
    this.setState("")

await fetch('/clients/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
    this.props.history.push('/clients/add');
}

    render() {
        const {item} = this.state;
        const title = <h2 id="add">{'Add Client'}</h2>;

        return <div>
             <div style={{ backgroundImage: `url(${background1})` , height: "830px", "background-position": "center"}}>
            <FormGroup>
            <div class="tp">
            <Button tag={Link} to="/" style={{backgroundImage: `url(${background})`,backgroundSize:"cover", width:"140px", height:"40px"}}></Button>
            </div>
            </FormGroup>
            <div class="form">
            <Container >
                <Form id="mainInput" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                              <Label for="destination">Destination</Label>
                              <Input type="select" name="destination" id="destination" placeholder="Select Destination" onChange={this.handleChange} value={item.destination || ''}>
                                <option>Select One</option>
                                <option>India</option>
                                <option>Africa</option>
                                <option>Europe</option>
                              </Input>
                            </FormGroup>
                    <FormGroup>
                     <Label for="travellerCount">Number of Travellers</Label>
                     <Input type="text" name="travellerCount" id="travellerCount" value={item.travellerCount || ''}
                                      onChange={this.handleChange} autoComplete="count"/>
                     </FormGroup>
                     <FormGroup>
                     <Label for="budget">Budget (USD)</Label>
                     <Input type="text" name="budget" id="budget" value={item.budget || ''}
                                      onChange={this.handleChange} autoComplete="budget"/>
                     </FormGroup>
                     <div class="submit">
                    <FormGroup>
                        <Button color="primary" type="submit" to="/clients/view">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                    </div>
                </Form>
            </Container>
            </div>
            </div>
        </div>
    }
}

export default withRouter(ClientAdd);