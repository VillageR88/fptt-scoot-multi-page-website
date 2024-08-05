import { h } from 'preact';

interface ThisProps {
  path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const About = ({ path }: ThisProps) => {
  return (
    <div>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
