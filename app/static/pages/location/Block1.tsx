import imageWorldMapDesktop from '../../assets/images/world-map-desktop.png';
import patternTriangle from '../../assets/patterns/triangle.svg';
import { Link } from 'preact-router';

const items = {
  'New York': {
    title: 'New York',
    link: 'https://www.google.com/maps/place/New+York,+NY,+USA',
    mapPosition: 'top-[74px] left-[144px]',
  },
  London: {
    title: 'London',
    link: 'https://www.google.com/maps/place/London,+UK',
    mapPosition: 'top-[18px] left-[392px]',
  },
  Jakarta: {
    title: 'Jakarta',
    link: 'https://www.google.com/maps/place/Jakarta,+Indonesia',
    mapPosition: 'top-[250px] left-[777px]',
  },
  Yokohama: {
    title: 'Yokohama',
    link: 'https://www.google.com/maps/place/Yokohama,+Kanagawa,+Japan',
    mapPosition: 'top-[80px] left-[856px]',
  },
};

const PinBox = ({ title, link, mapPosition }: { title: string; link: string; mapPosition: string }) => {
  return (
    <Link className={`${mapPosition} absolute flex h-[88px] w-[189px] flex-col items-center`} href={link}>
      <div className="relative z-[1] flex h-[72px] w-full items-center justify-center bg-[#FCB72B] font-mono text-[24px] font-bold leading-[28px] tracking-[-1.07px] text-[#495567]">
        {title}
      </div>
      <img className="relative z-[1]" src={patternTriangle as string} alt="" />
    </Link>
  );
};

export default function Block1() {
  return (
    <div className="relative h-[543px] w-full">
      <PinBox
        title={items['New York'].title}
        link={items['New York'].link}
        mapPosition={items['New York'].mapPosition}
      />
      <PinBox title={items.London.title} link={items.London.link} mapPosition={items.London.mapPosition} />
      <PinBox title={items.Jakarta.title} link={items.Jakarta.link} mapPosition={items.Jakarta.mapPosition} />
      <PinBox title={items.Yokohama.title} link={items.Yokohama.link} mapPosition={items.Yokohama.mapPosition} />
      <img className="absolute top-0" src={imageWorldMapDesktop as string} alt="world map" />
    </div>
  );
}
