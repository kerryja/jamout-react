import React, { Component } from "react";
import "./KerrysPicks.css";

class KerrysPicks extends Component {

	render() {
		return (
			<section>
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/jason-aldean.jpg"} alt="Jason Aldean album cover" />
								<div class="card-body">
									<p class="card-text">Jason Aldean</p>
									<p class="card-text">My Kinda Party</p>
									<p class="card-text">2010</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/luke-bryan.jpg"} alt="Luke Bryan album cover" />
								<div class="card-body">
									<p class="card-text">Luke Bryan</p>
									<p class="card-text">What Makes You Country</p>
									<p class="card-text">2017</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/fgl.jpg"} alt="Florida Georgia Line album cover" />
								<div class="card-body">
									<p class="card-text">Florida Georgia Line</p>
									<p class="card-text">Anything Goes</p>
									<p class="card-text">2014</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/carrie-underwood.jpg"} alt="Carrie Underwood album cover" />
								<div class="card-body">
									<p class="card-text">Carrie Underwood</p>
									<p class="card-text">Some Hearts</p>
									<p class="card-text">2005</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/tyler-farr.jpg"} alt="Tyler Farr album cover" />
								<div class="card-body">
									<p class="card-text">Tyler Farr</p>
									<p class="card-text">Redneck Crazy</p>
									<p class="card-text">2013</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/frankie-ballard.jpg"} alt="Frankie Ballard album cover" />
								<div class="card-body">
									<p class="card-text">Frankie Ballard</p>
									<p class="card-text">Sunshine & Whiskey</p>
									<p class="card-text">2014</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/blake-shelton.jpg"} alt="Blake Shelton album cover" />
								<div class="card-body">
									<p class="card-text">Blake Shelton</p>
									<p class="card-text">Based on a True Story...</p>
									<p class="card-text">2013</p>
								</div>
							</div>
						</div>
						<div class="col-md-3">
							<div class="kerry-albums">
								<img class="card-img-top" src={`${process.env.PUBLIC_URL}` + "/kerry-albums/maren-morris.jpg"} alt="Maren Morris album cover" />
								<div class="card-body">
									<p class="card-text">Maren Morris</p>
									<p class="card-text">Hero</p>
									<p class="card-text">2017</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default KerrysPicks;