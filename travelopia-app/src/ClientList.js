import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavigation from './AppNavigation';
import { Link } from 'react-router-dom';

class ClientList extends Component {

    constructor(props) {
        super(props);
        this.state = {clients: []};
    }

    componentDidMount() {
        fetch('/clients/view')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    render() {
        const {clients} = this.state;

        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.destination}</td>
                <td>{client.travellerCount}</td>
                <td>{client.budget}</td>
            </tr>
        });

        return (
            <div>
                <AppNavigation/>
                <Container fluid>
                    <h3>Clients</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="40%">Destination</th>
                            <th width="40%">Traveller Count</th>
                            <th width="40%">Budget</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClientList;