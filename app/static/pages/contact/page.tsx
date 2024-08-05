import { h } from 'preact';

interface ThisProps {
  path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Contact = ({ path }: ThisProps) => {
  return (
    <div>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
