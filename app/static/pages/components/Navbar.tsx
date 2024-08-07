import ButtonGetScootin from './ButtonGetScootin';
import NavbarBlock1 from './NavbarBlock1';

export default function Navbar() {
  return (
    <nav className="flex h-[96px] w-full justify-center px-[40px]">
      <div className="flex w-full max-w-[1106px] items-center justify-between">
        <NavbarBlock1 />
        <ButtonGetScootin />
      </div>
    </nav>
  );
}
