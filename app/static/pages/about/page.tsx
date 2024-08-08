import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';

const About: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <Block1 />
    </>
  );
};

export default About;
