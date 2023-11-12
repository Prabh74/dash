import { useEffect, useState } from "react";
import generateImg from "../Dashboard/generate";
import "./singleCard.css"

export default function SingleCard() {
	const [input, setInput] = useState("");
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setInput(e.target.value);
	};


	const handleClick = () => {
		setLoading(true)
	};
	
	useEffect(() => {
		if(loading) {
			generateImg(input).then((res) => setImage(URL.createObjectURL(res)));
		}
	}, [loading])
	return (
		<section className="card">
			<div className="card-content">
				<textarea placeholder="Enter prompt to generate an image ..." className="card-input" type="text" onChange={handleChange} value={input} />
				<button className="card-button" onClick={handleClick}>{loading ? "Generating ..." : "Generate"}</button>
			</div>

			<div className="card-img-wrapper">
				{image == null ? 
					<p>{loading ? "Generating an Image ..." : "Generate an image to see ..."}</p>
				: 
					<img src={image} className="card-img" />
				}
			</div>
		</section>
	);
}
