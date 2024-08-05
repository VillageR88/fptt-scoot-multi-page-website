/** @jsxImportSource preact */
import ButtonGetScootin from '../components/ButtonGetScootin';

const box1Items = {
  title: 'Scooter sharing made simple',
  description:
    'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
};

export default function Block1() {
  return (
    <div className="relative flex h-[650px] w-screen max-w-[1440px] items-center justify-between">
      <img
        className="absolute top-0 size-full object-cover"
        src="./static/assets/images/home-hero-desktop.jpg"
        alt=""
      />
      <div className="relative flex w-full max-w-[665px] flex-col items-center gap-[40px]">
        <h1 className="max-w-[500px] self-end">{box1Items.title}</h1>
        <div className="flex items-center gap-[57px]">
          <img className="h-fit w-[203px]" src="./static/assets/patterns/line.svg" alt="" />
          <p className="max-w-[405px] text-white">{box1Items.description}</p>
        </div>
        <ButtonGetScootin />
      </div>
      <div className="relative mb-[157px] mr-[-48px] flex w-full max-w-[783px] items-end gap-[100px] self-end">
        <img className="h-[137px] w-[446px]" src="./static/assets/patterns/right-arrow.svg" alt="" />
        <img className="h-[63px] w-[234px]" src="./static/assets/patterns/white-circles.svg" alt="" />
      </div>
    </div>
  );
}
