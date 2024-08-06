import imageTelemetry from '../../assets/images/telemetry.jpg';
import imageNearYou from '../../assets/images/near-you.jpg';
import imagePayments from '../../assets/images/payments.jpg';

const boxItems = [
  {
    src: imageTelemetry as string,
    title: 'Easy to use riding telemetry',
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
  {
    src: imageNearYou as string,
    title: 'Coming to a city near you',
    description:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
  },
  {
    src: imagePayments as string,
    title: 'Zero hassle payments',
    description:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
  },
];

export default function Block3() {
  return (
    <ul className="mr-[-344px] mt-[200px] flex w-full max-w-[1619px] flex-col ">
      {boxItems.map((item) => (
        <li className="flex gap-[220px]" key={item.title}>
          <section className="flex flex-col gap-[27px]">
            <h2 className="h4 mt-[40px] text-[#495567]">{item.title}</h2>
            <p className="max-w-[350px] text-[#939CAA]">{item.description}</p>
          </section>
          <img className="size-[445px] rounded-full" src={item.src} alt="" />
        </li>
      ))}
    </ul>
  );
}
