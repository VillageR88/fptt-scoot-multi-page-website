import { h } from "preact";
import { Link } from "preact-router/match";

export default function Navbar() {
	return (
		<nav className="h-[96px] justify-center flex w-full">
			<div className="flex items-center max-w-[1106px] w-full justify-between">
				<div className="flex items-center gap-[58px]">
					<img src="./static/assets/logo.svg" alt="logo" />
					<ul className="flex gap-[32px] leading-[25px] font-bold text-[#939CAA] *:transition hover:*:text-[#FCB72B]">
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
					className="w-[180px] h-[53px] bg-[#FCB72B] border-2 border-[#FCB72B] hover:text-[#FCB72B] transition hover:bg-white text-[#FFFFFF] text-[15px] leading-[25px]"
					type="button"
				>
					Get Scootin
				</button>
			</div>
		</nav>
	);
}
