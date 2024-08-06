import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import IconInstagram from './IconInstagram';
import NavbarBlock1 from './NavbarBlock1';

const socialIcons = [
  { component: <IconFacebook />, key: 'facebook' },
  { component: <IconTwitter />, key: 'twitter' },
  { component: <IconInstagram />, key: 'instagram' },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="flex h-[300px] w-full items-center justify-between bg-[#495567]">
        <div className="mx-auto flex h-[96px] w-full max-w-[1100px] items-center justify-between">
          <h2 className="max-w-[415px] text-white">Sign up and Scoot off today</h2>
          <ul className="flex gap-[18px]">
            {[1, 2].map((item) => (
              <li key={item}>
                <button type="button" className="buttonStore">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex h-[96px] w-full items-center bg-[#333A44]">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between">
          <NavbarBlock1 />
          <ul className="flex w-fit items-center gap-[18px]">
            {socialIcons.map(({ component, key }) => (
              <li className="transition" key={key}>
                {component}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
