import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
	return (
		<main className="home-wrapper">
			<nav className="navbar">
				<p>AI Comic Maker</p>
			</nav>
			<section className="hero">
				<div className="hero-left">
					<h1 className="hero-title">
						Unleash Your Imagination with AI-Powered Comics
					</h1>
					<p className="hero-sub">
						Where Creativity Meets Technology in the World of Comics
					</p>
					<Link to="/dashboard" className="hero-btn">Get Started</Link>
				</div>
				<img className="hero-img" src="/Images/icon.png" alt="" />
			</section>
		</main>
	);
}
