import { Link } from 'preact-router';
import { scrollToTop } from '../functionsClient';
import Logo from './Logo';

const items = [
  { href: '/about', text: 'About' },
  { href: '/location', text: 'Location' },
  { href: '/careers', text: 'Careers' },
];

export default function NavbarBlock1() {
  return (
    <div className="flex flex-col items-center gap-[41px] text-center md:flex-row md:gap-[58px]">
      <Logo />
      <ul className="navLinks mg:gap-[32px] flex flex-col gap-[16px] font-bold leading-[25px] text-[#939CAA] *:transition hover:*:text-[#FCB72B] md:flex-row">
        {items.map(({ href, text }) => (
          <li key={text}>
            <Link onClick={scrollToTop} href={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
