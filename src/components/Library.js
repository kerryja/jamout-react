import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import { Card } from "react-bulma-components/full";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library-carousel">
        {this.state.albums.map((album, index) => (
          <Link to={`/album/${album.slug}`} key={index}>
            <Card backgroundColor="#ffffff10">
              <Card.Image
                src={album.albumCover}
                alt={album.title}
                style={{ width: 480 }}
              />
              <Card.Content>
                <div className="album-info">{album.title}</div>
                <div className="album-info">{album.artist}</div>
                <div className="album-info">{album.songs.length} songs</div>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </section>
    );
  }
}

export default Library;
