import { h } from 'preact';
import ButtonGetScootin from '../components/ButtonGetScootin';
interface ThisProps {
  path: string;
}
const box1Items = {
  title: 'Scooter sharing made simple',
  description:
    'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ path }: ThisProps) => {
  return (
    <div className="relative flex h-[650px] w-screen max-w-[1440px] items-center justify-between">
      <img
        className="absolute top-0 size-full object-cover"
        src="./static/assets/images/home-hero-desktop.jpg"
        alt=""
      />
      <div className="relative w-full max-w-[665px]">
        <h1>{box1Items.title}</h1>
        <div className="flex">
          <p className="text-white">{box1Items.description}</p>
        </div>
        <ButtonGetScootin />
      </div>
      <div className="relative">2ndBOX</div>
    </div>
  );
};

export default Home;
