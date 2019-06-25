import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import "./Album.css";

class Album extends Component {
	constructor(props) {
		super(props);

		const album = albumData.find(album => {
			return album.slug === this.props.match.params.slug;
		});
		this.state = {
			album: album,
			currentSong: album.songs[0],
			currentTime: 0,
			duration: album.songs[0].duration,
			isPlaying: false,
			hoveredSong: false,
			volume: 0.6,
		};

		this.audioElement = document.createElement("audio");
		this.audioElement.src = process.env.PUBLIC_URL + album.songs[0].audioSrc;
	}

	componentDidMount() {
		this.eventListeners = {
			timeupdate: e => {
				this.setState({ currentTime: this.audioElement.currentTime });
			},
			durationchange: e => {
				this.setState({ duration: this.audioElement.duration });
			}
		};
		this.audioElement.addEventListener("timeupdate", this.eventListeners.timeupdate);
		this.audioElement.addEventListener("durationchange", this.eventListeners.durationchange);
	}

	componentWillUnmount() {
		this.audioElement.src = null;
		this.audioElement.removeEventListener("timeupdate", this.eventListeners.timeupdate);
		this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
	}


	play() {
		this.audioElement.play();
		this.setState({
			isPlaying: true
		});
	}

	pause() {
		this.audioElement.pause();
		this.setState({
			isPlaying: false
		});
	}

	setSong(song) {
		this.audioElement.src = process.env.PUBLIC_URL + song.audioSrc;
		this.setState({
			currentSong: song
		});
	}

	handleSongClick(song) {
		const isSameSong = this.state.currentSong === song;
		if (this.state.isPlaying && isSameSong) {
			this.pause();
		} else {
			if (!isSameSong) {
				this.setSong(song);
			}
			this.play();
		}
	}

	handlePrevClick() {
		const currentIndex = this.state.album.songs.findIndex(
			song => this.state.currentSong === song
		);
		const newIndex = Math.max(0, currentIndex - 1);
		const newSong = this.state.album.songs[newIndex];
		this.setSong(newSong);
		this.play();
	}

	handleNextClick() {
		const currentIndex = this.state.album.songs.findIndex(
			song => this.state.currentSong === song
		);
		const newIndex = Math.min((this.state.album.songs.length - 1), currentIndex + 1);
		const newSong = this.state.album.songs[newIndex];
		this.setSong(newSong);
		this.play();
	}

	handleTimeChange(e) {
		const newTime = this.audioElement.duration * e.target.value;
		this.audioElement.currentTime = newTime;
		this.setState({ currentTime: newTime });
	}

	onMouseEnter(index) {
		this.setState({
			hoveredSong: index
		});
	}

	handleLeave() {
		this.setState({
			hoveredSong: false
		});
	}

	handleVolumeChange(e) {
		const newVolume = (this.audioElement.volume = e.target.value);
		this.setState({
			volume: newVolume
		})
	}

	formatTime(time) {
		if (time >= 0) {
			let mins = Math.floor(time / 60);
			let secs = Math.floor(time % 60);
			if (secs < 10) {
				let finalSecs = "0" + secs;
				let newTime = `${mins}:${finalSecs}`;
				return newTime;
			} else if (secs >= 10) {
				let newTime = `${mins}:${secs}`;
				return newTime;
			} else
				return `-:--`;
		}
	}

	setIcon(song, index) {
		const isCurrentSong = this.state.currentSong === song;
		const isHoveredSong = this.state.hoveredSong === song;
		if (isCurrentSong && this.state.isPlaying) {
			return <span className="icon ion-md-pause" />;
		} else if (isHoveredSong) {
			return <span className="icon ion-md-play-circle" />;
		} else {
			return index + 1;
		}
	}

	render() {
		return (
			<section className="album">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<img className="album-cover-art"
								src={
									`${process.env.PUBLIC_URL}` + this.state.album.albumCover
								}
								alt={this.state.album.title}
							/>
						</div>
						<div className="col-lg-6">
							<div className="album-details">
								<h1 id="album-title">{this.state.album.title}</h1>
								<h2 className="artist">{this.state.album.artist}</h2>
								<div id="release-info">{this.state.album.releaseInfo}</div>
							</div>
						</div>

					</div>
				</div>
				<table id="song-list" className="table is-hoverable">
					<colgroup>
						<col id="song-number-column" width="40" />
						<col id="song-title-column" />
						<col id="song-duration-column" />
					</colgroup>
					<tbody>
						{this.state.album.songs.map((song, index) => (
							<tr
								className="song"
								key={index}
								onClick={() => this.handleSongClick(song)}
							>
								<td
									onMouseLeave={this.handleLeave.bind(this)}
									onMouseEnter={() => this.onMouseEnter(index)}
								>
									{this.setIcon(song, index)}
								</td>
								<td>{song.title}</td>
								<td>{this.formatTime(song.duration)}</td>
							</tr>

						))}
					</tbody>
				</table>

				<PlayerBar
					isPlaying={this.state.isPlaying}
					currentSong={this.state.currentSong}
					handleSongClick={() => this.handleSongClick(this.state.currentSong)}
					handlePrevClick={() => this.handlePrevClick()}
					handleNextClick={() => this.handleNextClick()}
					currentTime={this.audioElement.currentTime}
					duration={this.audioElement.duration}
					handleTimeChange={(e) => this.handleTimeChange(e)}
					formatTime={(time) => this.formatTime(time)}
					handleVolumeChange={(e) => this.handleVolumeChange(e)}
					volume={this.state.volume}
				/>
			</section>

		);
	}
}

export default Album;
