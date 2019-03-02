import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import "bulma/css/bulma.css";
import { Navbar } from "react-bulma-components/full";
import { Menu } from "react-bulma-components/full";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar style={{ "background-color": "transparent" }}>
            <Navbar.Brand>
              <Navbar.Item>
                Bl
                <span>
                  <i className="fas fa-headphones fa-sm" />
                </span>
                c Jams
              </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container className="is-large" position="end">
                <Navbar.Item href="/">
                  <span>
                    <i class="fas fa-home" />
                  </span>
                  Home
                </Navbar.Item>
                <Navbar.Item href="/library">
                  <span>
                    <i class="fas fa-music" />
                  </span>
                  Library
                </Navbar.Item>
                <Navbar.Item href="#">
                  <span>
                    <i class="fas fa-search" />
                  </span>
                  Search
                  <input type="text" placeholder="Search.." />
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </header>

        <div className="app-menu">
          <Menu>
            <Menu.List id="menu-list">
              <Menu.List.Item>My Account</Menu.List.Item>
              <Menu.List.Item>Recommendations</Menu.List.Item>
              <Menu.List.Item>Albums</Menu.List.Item>
              <Menu.List.Item>Artists</Menu.List.Item>
              <Menu.List.Item>Playlists</Menu.List.Item>
            </Menu.List>
          </Menu>
        </div>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
