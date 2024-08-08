import { Link } from 'preact-router';
import { navLinks } from '../_const';
import ButtonGetScootin from './ButtonGetScootin';

export default function MobileMenuList({ handleOpen }: { handleOpen: () => void }) {
  return (
    <div id="mobileMenuList" className="absolute left-0 top-[64px] z-[1] size-full bg-black/50 pb-[64px]">
      <div className="flex max-w-[256px] flex-col justify-between bg-[#333A44] px-[32px] pb-[24px] pt-[64px]">
        <ul className="flex flex-col gap-[24px]">
          {navLinks.map(({ href, text }) => (
            <li key={text}>
              <Link className="text-[18px] font-bold leading-[25px] text-[#E5ECF4]" onClick={handleOpen} href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonGetScootin />
      </div>
    </div>
  );
}
