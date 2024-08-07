import iconLocate from '../../assets/icons/locate.svg';
import iconScooter from '../../assets/icons/scooter.svg';
import iconRide from '../../assets/icons/ride.svg';

const boxItems = [
  {
    icon: iconLocate as string,
    title: 'Locate with app',
    description:
      'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ',
  },

  {
    icon: iconScooter as string,
    title: 'Pick your scooter',
    description:
      'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
  },

  {
    icon: iconRide as string,
    title: 'Enjoy the ride',
    description:
      'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
  },
];

export default function Block2() {
  return (
    <div className="flex h-fit w-full max-w-[573px] flex-col xl:mt-[160px] xl:h-[291px] xl:max-w-[1440px] xl:flex-row">
      <div className="relative flex w-[96px] justify-center xl:h-[96px] xl:w-fit xl:items-center">
        <div className="h-[118px] w-[15px] bg-[#E5ECF4] from-transparent via-[#E5ECF4] to-[#E5ECF4] xl:absolute xl:right-[-165px] xl:h-[15px] xl:w-screen xl:max-w-[500px] xl:bg-transparent xl:bg-gradient-to-r" />
      </div>
      <ul className="flex w-full max-w-[1110px] flex-col items-center xl:ml-[165px] xl:flex-row">
        {boxItems.map((item) => (
          <li className="flex w-full justify-between xl:flex-col" key={item.title}>
            <div className="flex flex-col items-center xl:h-[96px] xl:flex-row">
              <img width={96} height={96} src={item.icon} alt="" />
              <div className="line h-[74px] w-[15px] bg-[#E5ECF4] xl:h-[15px] xl:w-[284px]" />
            </div>
            <section className="flex flex-col gap-[27px]">
              <h2 className="h4 text-[#495567] xl:mt-[40px]">{item.title}</h2>
              <p className="max-w-[398px] text-[#939CAA] xl:max-w-[350px]">{item.description}</p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
