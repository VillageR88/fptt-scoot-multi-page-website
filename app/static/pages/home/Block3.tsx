import imageTelemetry from '../../assets/images/telemetry.jpg';

export default function Block3() {
  return (
    <div className="mr-[-344px] mt-[200px] flex w-full max-w-[1619px] ">
      <div className="min-h-[313px] max-w-[445px]">BLOCK</div>
      <img src={imageTelemetry as string} alt="" />
    </div>
  );
}
