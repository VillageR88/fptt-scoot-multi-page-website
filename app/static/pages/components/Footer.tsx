export default function Footer() {
  return (
    <footer className="flex w-full flex-col">
      <div className="flex h-[300px] w-full items-center justify-between bg-[#495567]">
        <div className="mx-auto flex h-[96px] w-full max-w-[1100px] items-center justify-between">
          <h2 className="max-w-[415px] text-white">Sign up and Scoot off today</h2>
          <div className="flex gap-[18px]">
            <button type="button" className="buttonStore">
              b1
            </button>
            <button type="button" className="buttonStore">
              b2
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[96px] w-full items-center bg-[#333A44]">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between">
          <div>box1</div>
          <div className="flex gap-[18px]">
            <button type="button" className="buttonSocial">
              b1
            </button>
            <button type="button" className="buttonSocial">
              b2
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
