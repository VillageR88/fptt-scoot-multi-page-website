import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';

const About: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
    </>
  );
};

export default About;
