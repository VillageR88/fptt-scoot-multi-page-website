import { Link } from 'preact-router';

const items = {
  linkTitle: 'Message Us',
  title: 'Your city not listed?',
  description:
    'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.',
};

export default function Block2() {
  return (
    <div className="flex min-h-[100px] w-full items-center justify-between">
      <section className="flex max-w-[826px] gap-[30px]">
        <h2 className="max-w-[351px] text-[#495567]">{items.title}</h2>
        <p className="max-w-[445px] text-[#939CAA]">{items.description}</p>
      </section>
      <Link className="buttonType1" href="#">
        {items.linkTitle}
      </Link>
    </div>
  );
}
