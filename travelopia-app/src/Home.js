import React, { Component } from 'react';
import './App.css';
import AppNavigation from './AppNavigation';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavigation/>
                <Container fluid>
                    <Button color="success" tag={Link} to="/clients/view">View Client</Button>
                    <Button color="success" tag={Link} to="/clients/add">Add Client</Button>
                </Container>
            </div>
        );
    }
}

export default Home;