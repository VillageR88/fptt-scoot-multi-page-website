import { Link } from 'preact-router';
import Logo from './Logo';

const items = [
  { href: '/about', text: 'About' },
  { href: '/location', text: 'Location' },
  { href: '/careers', text: 'Careers' },
];

export default function NavbarBlock1() {
  return (
    <div className="flex items-center gap-[58px]">
      <Logo />
      <ul className="flex gap-[32px] font-bold leading-[25px] text-[#939CAA] *:transition hover:*:text-[#FCB72B]">
        {items.map(({ href, text }) => (
          <li key={text}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
