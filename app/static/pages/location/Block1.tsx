import imageWorldMapDesktop from '../../assets/images/world-map-desktop.png';
import patternTriangle from '../../assets/patterns/triangle.svg';
import { Link } from 'preact-router';

export default function Block1() {
  return (
    <div className="relative h-[543px] w-full">
      <Link
        className="flex h-[88px] w-[189px] flex-col items-center"
        href="https://www.google.com/maps/place/New+York,+NY,+USA"
      >
        <div className="pinBox relative z-[1] flex h-[72px] w-full items-center justify-center bg-[#FCB72B] font-mono text-[24px] font-bold leading-[28px] tracking-[-1.07px] text-[#495567]">
          New York
        </div>
        <img className="relative z-[1]" src={patternTriangle as string} alt="" />
      </Link>
      <img className="absolute top-0" src={imageWorldMapDesktop as string} alt="world map" />
    </div>
  );
}
