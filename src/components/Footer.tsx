import { imageUrl } from "../functions/imageUrl";

export default function Footer() {
  return (
    <div className="px-4 md:px-32 border-t border-white">

      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-0 py-10 md:py-16 ">
        <div className="flex-1/2">
          <img className="md:hidden my-7" src={imageUrl("logo.png")} alt="" />
          <h1 className="text-5xl md:text-7xl ">Join us for an <br /> unforgettable experience</h1>
        </div>

        <div className="flex-1/2 flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4 md:gap-2">
            <p className="text-xl tracking-widest">Download the Groves App</p>
            <div className="flex justify-center items-center gap-2">
              <img src={imageUrl("app-store.png")} alt="App Store" />
              <img src={imageUrl("play-store.png")} alt="Play Store" />
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-start items  md:items-center flex-wrap gap-5 md:gap-52 lg:gap-64 ">
        <div className="flex flex-col gap-3">
          <p className="text-xl">Location</p>
          <p>Al-Hizam park <br /> Al-semairi , yanbu Al bahr 46455 <br /> Riyadh saudia Arabia</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Woking Hours</p>
            <p>sun until Thurs : 4:00PM <br /> Fri & Sat : 2:30PM</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">Gate Close at:</p>
            <p>sat until wed : 12:00AM <br /> Thurs & Fri  : 12:30AM</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xl">Guest Service Call</p>
          <p>cc@thegroves-sa.com</p>
          <p>+966556631309</p>
        </div>
      </div>


      <div className="flex justify-start md:justify-between items-center py-7 bg-transparent">
        <div>
          <img className="hidden md:inline" src={imageUrl("logo.png")} alt="Logo" />
        </div>
        <ul className="flex gap-7 items-center">
          <li><img src={imageUrl("tiktok.png")} alt="TikTok" /></li>
          <li><img src={imageUrl("insta.png")} alt="Instagram" /></li>
          <li><img src={imageUrl("x.png")} alt="X" /></li>
          <li><img src={imageUrl("snap-chat.png")} alt="Snapchat" /></li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 md:py-16 gap-5 md:gap-0">

        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 items-start text-lg">
          <li>Terms & Conditions</li>
          <li>Privacy policy</li>
          <li>&copy;2023 The Groves Entertainment</li>
        </ul>

        <div className="flex items-center gap-4">
          <img src={imageUrl("visa.png")} alt="App Store" />
          <img src={imageUrl("master-card.png")} alt="Play Store" />
          <img src={imageUrl("american-express.png")} alt="Play Store" />
        </div>


      </div>

    </div>
  )
}
