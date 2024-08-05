import { h } from 'preact';
interface ThisProps {
  path: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ path }: ThisProps) => {
  return (
    <div className="h-[650px] w-full">
      <img className="size-full object-cover" src="./static/assets/images/home-hero-desktop.jpg" alt="" />
    </div>
  );
};

export default Home;
