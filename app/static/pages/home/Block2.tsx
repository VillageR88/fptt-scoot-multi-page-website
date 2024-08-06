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
    <div className="mt-[160px] h-[291px] w-full max-w-[1275px] self-start">
      <div className="flex">
        <div className="flex h-[96px] items-center">
          <div className="h-[15px] w-[165px] bg-[#E5ECF4]" />
        </div>
        <ul className="flex">
          {boxItems.map((item) => (
            <li key={item.title}>
              <div className="flex h-[96px] items-center">
                <img width={96} height={96} src={item.icon} alt="" />
                <div className="line h-[15px] w-[284px] bg-[#E5ECF4]" />
              </div>
              <h2 className="h4 mt-[40px] text-[#495567]">{item.title}</h2>
              <p className="mt-[27px] max-w-[350px] text-[#939CAA]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
