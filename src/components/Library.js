import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import Card from 'react-bootstrap/Card';
import "./Library.css"

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
						<Card>
							<Card.Img variant="top"
								src={`${process.env.PUBLIC_URL}` + album.albumCover}
								alt={album.title}
							/>
							<Card.Body>
								<div className="content">
									<div className="album-info">{album.title}</div>
									<div className="album-info">{album.artist}</div>
									<div className="album-info">{album.songs.length} songs</div>
								</div>
							</Card.Body>
						</Card>
					</Link>
				))}
			</section>
		);
	}
}

export default Library;
