import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar1 from "./components/Navbar";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import KerrysPicks from "./components/KerrysPicks";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>

					<Navbar1></Navbar1>

				</header>
				<main>
					<Route exact path="/" component={Landing} />
					<Route path="/library" component={Library} />
					<Route path="/album/:slug" component={Album} />
					<Route path="/kerrys-picks" component={KerrysPicks} />
				</main>
			</div>
		);
	}
}

export default App;
