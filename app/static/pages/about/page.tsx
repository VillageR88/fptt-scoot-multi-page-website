import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';
import Block2 from './Block2';

const About: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <Block1 />
      <Block2 />
    </>
  );
};

export default About;
