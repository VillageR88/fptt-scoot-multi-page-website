import imageTelemetry from '../../assets/images/telemetry.jpg';
import imageNearYou from '../../assets/images/near-you.jpg';
import imagePayments from '../../assets/images/payments.jpg';
import patternLeftDownwardArrow from '../../assets/patterns/left-downward-arrow.svg';
import patternRightArrow from '../../assets/patterns/right-arrow.svg';

const boxItems = [
  {
    liClassExtension: ' xl:ml-[165px]',
    imageSrc: imageTelemetry as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Easy to use riding telemetry',
    description:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    _1stDivClassExtension: '',
    _2ndDivClassExtension: 'md:ml-[410px] md:mr-[350px] xl:mx-0',
    patternClassExtension: 'md:left-[-124px] bottom-0',
  },
  {
    liClassExtension: 'xl:mr-[165px] ',
    imageSrc: imageNearYou as string,
    patternSrc: patternRightArrow as string,
    title: 'Coming to a city near you',
    description:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
    _1stDivClassExtension: '',
    _2ndDivClassExtension: 'md:mr-[410px] md:ml-[350px] xl:mx-0',
    patternClassExtension: 'md:right-[260px]',
  },
  {
    liClassExtension: 'xl:ml-[165px]',
    imageSrc: imagePayments as string,
    patternSrc: patternLeftDownwardArrow as string,
    title: 'Zero hassle payments',
    description:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
    _1stDivClassExtension: '',
    _2ndDivClassExtension: 'md:ml-[410px] md:mr-[350px] xl:mx-0',
    patternClassExtension: 'md:left-[255px] top-[85px]',
  },
];

export default function Block3() {
  return (
    <ul className="mb-[104px] mt-[145px] flex w-fit flex-col items-center gap-[128px] xl:my-[200px] xl:gap-[160px] ">
      {boxItems.map((item, index) => (
        <li
          className={`${index % 2 ? 'flex-col-reverse self-start xl:flex-row-reverse' : 'flex-col-reverse self-end xl:flex-row'} flex max-w-[1275px] items-center gap-[56px] xl:gap-[120px] ${item.liClassExtension}`}
          key={item.title}
        >
          <div className={`flex flex-col items-center gap-[40px] xl:items-start ${item._1stDivClassExtension}`}>
            <section className="flex w-[573px] flex-col items-center gap-[24px] text-center xl:mx-0 xl:w-[445px] xl:gap-[27px] xl:text-left">
              <h2 className="w-[450px] text-[#495567] xl:w-[445px]">{item.title}</h2>
              <p className="text-[#939CAA]">{item.description}</p>
            </section>
            <button className="buttonType1" type="button">
              Learn More
            </button>
          </div>
          <div
            className={`${item._2ndDivClassExtension} ${index % 2 ? 'flex-row-reverse' : 'flex-row'} relative flex gap-[64px]`}
          >
            <img
              width={445}
              height={445}
              className="size-[311px] rounded-full md:size-[445px]"
              src={item.imageSrc}
              alt=""
            />
            <div className="hidden size-[445px] min-w-[445px] rounded-full bg-[#E5ECF4] md:block" />
            <img className={`absolute ${item.patternClassExtension} h-auto min-w-fit`} src={item.patternSrc} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}
