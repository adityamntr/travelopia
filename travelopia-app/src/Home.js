import React, { Component } from 'react';
import './App.css';
import AppNavigation from './AppNavigation';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import background from "./img/slider2.jpg";

class Home extends Component {
    render() {
        return (
            <div>
            <div style={{ backgroundImage: `url(${background})` , height: "830px", "background-position": "center"}}>
                <AppNavigation/>
                 <div class="banner-content text-center">
                  <h4 class="text-white mb-20 text-uppercase">Discover the Colorful World</h4>
                  <h1 class="text-uppercase text-white">with Travelopia</h1>
                  <Container fluid>
                              <div class="btn-group">
                              <div class="btn-1">
                               <Button tag={Link} to="/clients/view">View Client</Button>
                               </div>
                               <div class="btn-2">
                               <Button tag={Link} to="/clients/add">Add Client</Button>
                               </div>
                                </div>
                                </Container>
                   </div>
                </div>
            </div>
        );
    }
}

export default Home;