import imageTelemetry from '../../assets/images/telemetry.jpg';
import imageNearYou from '../../assets/images/near-you.jpg';
import imagePayments from '../../assets/images/payments.jpg';
import patternLeftDownwardArrow from '../../assets/patterns/left-downward-arrow.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';

const boxItems = [
  {
    imageSrc: imageTelemetry as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Easy to use riding telemetry',
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    _1stDivClassExtension: '',
    _2ndDivClassExtension: '',
    patternClassExtension: 'right-[344px] bottom-0',
  },
  {
    imageSrc: imageNearYou as string,
    patternSrc: patternRightArrow as string,
    title: 'Coming to a city near you',
    description:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
    _1stDivClassExtension: '',
    _2ndDivClassExtension: '',
    patternClassExtension: 'right-[260px]',
  },
  {
    imageSrc: imagePayments as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Zero hassle payments',
    description:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
    _1stDivClassExtension: '',
    _2ndDivClassExtension: '',
    patternClassExtension: 'right-0 top-[85px]',
  },
];

export default function Block3() {
  return (
    <ul className=" my-[200px] flex w-[2168px] flex-col gap-[160px]">
      {boxItems.map((item, index) => (
        <li
          className={`${index % 2 ? 'flex-row-reverse self-start' : 'flex-row self-end'} flex items-center gap-[220px]`}
          key={item.title}
        >
          <div className={`flex flex-col gap-[40px] ${item._1stDivClassExtension}`}>
            <section className="flex max-w-[445px] flex-col gap-[27px]">
              <h2 className="text-[#495567]">{item.title}</h2>
              <p className="text-[#939CAA]">{item.description}</p>
            </section>
            <button className="buttonType1" type="button">
              Learn More
            </button>
          </div>
          <div
            className={`${item._2ndDivClassExtension} ${index % 2 ? 'flex-row-reverse' : 'flex-row'} relative flex gap-[64px]`}
          >
            <img width={445} height={445} className="size-[445px] rounded-full" src={item.imageSrc} alt="" />
            <div className="size-[445px] min-w-[445px] rounded-full bg-[#E5ECF4]" />
            <img className={`absolute ${item.patternClassExtension}`} src={item.patternSrc} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}
