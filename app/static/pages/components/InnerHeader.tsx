import backgroundAbout from '../../assets/images/about-hero-desktop.jpg';
import backgroundCareers from '../../assets/images/careers-locations-hero-desktop.jpg';
import patternWhiteCircles from '../../assets/patterns/white-circles.svg';

export default function InnerHeader({ path }: { path?: string }) {
  function processPathToTitle(path: string) {
    switch (path) {
      case '/about':
        return 'About';
      case '/location':
        return 'Locations';
      case '/careers':
        return 'Careers';
    }
  }
  function processPathToSrc(path: string) {
    switch (path) {
      case '/about':
        return backgroundAbout as string;
      case '/location':
        return backgroundCareers as string;
      case '/careers':
        return backgroundCareers as string;
    }
  }
  return (
    <div className="relative flex h-[160px] w-full max-w-[1440px] items-center justify-center md:h-[200px]">
      <img className="absolute h-full object-cover" src={processPathToSrc(path ? path : '')} alt="" />
      <div className="mx-[32px] flex w-full max-w-[1106px] justify-center md:justify-start">
        <h1 className="relative">{processPathToTitle(path ? path : '')}</h1>
        <img className="absolute right-[-31px] hidden md:block" src={patternWhiteCircles as string} alt="" />
      </div>
    </div>
  );
}
