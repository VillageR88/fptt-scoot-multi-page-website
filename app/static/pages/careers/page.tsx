import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';
import Block1 from './Block1';
import Block2 from '../components/ValuesSection';
import Block3 from './Block3';

const Careers: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
      <Block1 />
      <Block2 title="Why join us?" />
      <Block3 />
    </>
  );
};

export default Careers;
