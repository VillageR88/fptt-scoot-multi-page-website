import ButtonGetScootin from './ButtonGetScootin';
import NavbarBlock1 from './NavbarBlock1';

export default function Navbar() {
  return (
    <nav className="flex h-[96px] w-full items-center justify-center overflow-x-clip px-[32px] md:px-[40px]">
      <input id="mobileMenu" type="checkbox" title="mobile menu" />
      <div className="flex w-full max-w-[1106px] items-center justify-center md:justify-between">
        <NavbarBlock1 />
        <ButtonGetScootin />
      </div>
    </nav>
  );
}
