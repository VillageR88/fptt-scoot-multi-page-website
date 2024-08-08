import type { FunctionComponent } from 'preact';
import InnerHeader from '../components/InnerHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Location: FunctionComponent = ({ path }) => {
  return (
    <>
      <InnerHeader path={path} />
    </>
  );
};

export default Location;
