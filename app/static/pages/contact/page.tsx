import { h } from "preact";

interface ThisProps {
	path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Contact = ({ path }: ThisProps) => {
	return (
		<div>
			<h1>Contact Page</h1>
			<p>This is the about page.</p>
		</div>
	);
};

export default Contact;
