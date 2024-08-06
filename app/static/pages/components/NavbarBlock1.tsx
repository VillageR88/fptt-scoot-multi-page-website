import { Link } from 'preact-router';
import Logo from './Logo';

export default function NavbarBlock1() {
  return (
    <div className="flex items-center gap-[58px]">
      <Logo />
      <ul className="flex gap-[32px] font-bold leading-[25px] text-[#939CAA] *:transition hover:*:text-[#FCB72B]">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/location">Location</Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>
    </div>
  );
}
