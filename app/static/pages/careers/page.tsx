import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';
import Block2 from '../components/ValuesSection';

const Careers: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <Block1 />
      <Block2 title="Why join us?" />
    </>
  );
};

export default Careers;
