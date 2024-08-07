import ButtonGetScootin from '../components/ButtonGetScootin';
import patternLine from '../../assets/patterns/line.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';
import patternWhiteCircles from '../../assets/patterns/white-circles.svg';

const boxItems = {
  title: 'Scooter sharing made simple',
  description:
    'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
};

export default function Block1() {
  return (
    <div className="relative flex min-h-[650px] w-full max-w-[1440px] flex-col items-center justify-start gap-[40px] pt-[137px] md:min-h-[700px] xl:min-h-[650px] xl:flex-row xl:justify-between xl:pt-0">
      <picture className="absolute right-0 top-0 size-full">
        {/* <source media="(max-width: 480px)" srcSet="./static/assets/images/home-hero-mobile.jpg" /> */}
        {/* <source media="(max-width: 540px)" srcSet="./static/assets/images/home-hero-tablet.jpg" /> */}
        <img
          className="size-full object-cover object-[-470px_100%]  md:object-[100%_100%]"
          src="./static/assets/images/home-hero-desktop.jpg"
          alt=""
        />
      </picture>
      <div className="relative flex w-full max-w-[665px] flex-col items-center gap-[40px] text-center xl:text-left">
        <h1 className="max-w-[500px] xl:self-end">{boxItems.title}</h1>
        <div className="flex items-center gap-[57px]">
          <img className="hidden h-fit w-[203px] xl:block" src={patternLine as string} alt="" />
          <p className="max-w-[405px] text-white">{boxItems.description}</p>
        </div>
        <ButtonGetScootin />
      </div>
      <div className="relative flex w-full items-end justify-center  gap-[245px] xl:mb-[calc(157px+8px)] xl:mr-[-48px] xl:max-w-[783px] xl:gap-[100px] xl:self-end">
        <img className="h-[137px] w-[446px]" src={patternRightArrow as string} alt="" />
        <img className="h-[63px] w-[234px]" src={patternWhiteCircles as string} alt="" />
      </div>
    </div>
  );
}
