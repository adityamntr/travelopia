import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormText, FormGroup, Input, Label } from 'reactstrap';
import AppNavigation from './AppNavigation';

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

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

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
        const title = <h2>{'Add Client'}</h2>;

        return <div>
            <AppNavigation/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
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
                               <FormText color="muted">
                                          Select A Destination From Dropdown
                                          </FormText>
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
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/clients/view">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(ClientAdd);