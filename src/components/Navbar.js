import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css";

class Navbar1 extends Component {
	
	render() {
		return (
			<section>
			<Navbar variant="light">
				<Navbar.Brand href="#">
					<img src="jamout.png" width="250px" height="" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
				<Nav className="justify-content-end">
					<Nav.Item>
						<Nav.Link href="#/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#library">Library</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#kerrys-picks">Kerry's Top Picks</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			</section>
		)
	}
};

export default Navbar1;