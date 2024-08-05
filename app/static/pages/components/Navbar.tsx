import { h } from 'preact';
import { Link } from 'preact-router/match';

export default function Navbar() {
  return (
    <nav className="flex h-[96px] w-full justify-center">
      <div className="flex w-full max-w-[1106px] items-center justify-between">
        <div className="flex items-center gap-[58px]">
          <img src="./static/assets/logo.svg" alt="logo" />
          <ul className="flex gap-[32px] font-bold leading-[25px] text-[#939CAA] *:transition hover:*:text-[#FCB72B]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button
          className="h-[53px] w-[180px] border-2 border-[#FCB72B] bg-[#FCB72B] text-[15px] leading-[25px] text-[#FFFFFF] transition hover:bg-white hover:text-[#FCB72B]"
          type="button"
        >
          Get Scootin
        </button>
      </div>
    </nav>
  );
}
