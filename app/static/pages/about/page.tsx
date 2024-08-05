import { h } from "preact";

interface ThisProps {
	path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const About = ({ path }: ThisProps) => {
	return (
		<div>
			<h1>About Page</h1>
			<p>This is the about page.</p>
		</div>
	);
};

export default About;
