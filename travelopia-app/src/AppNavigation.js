import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar>
            <NavbarBrand tag={Link} to="/">

            </NavbarBrand>

        </Navbar>;
    }
}