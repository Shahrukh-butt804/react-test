import { imageUrl } from "../functions/imageUrl";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-7 px-4 md:px-5 lg:px-32 bg-transparent">
      <div>
        <img src={imageUrl("logo.png")} alt="Logo" />
      </div>


      <ul className="gap-7 items-center hidden md:flex">
        <li><img src={imageUrl("tiktok.png")} alt="TikTok" /></li>
        <li><img src={imageUrl("insta.png")} alt="Instagram" /></li>
        <li><img src={imageUrl("x.png")} alt="X" /></li>
        <li><img src={imageUrl("snap-chat.png")} alt="Snapchat" /></li>

        <li><button className="px-16 py-3.5 themeColor rounded-2xl">Log in</button></li>

        <li className="flex justify-center items-center gap-2"><span className="inline-block rotate-90 text-3xl">›</span> <img src={imageUrl("flag.png")} alt="Flag" />English</li>
      </ul>

      <img className="md:hidden" src={imageUrl("ham-burger.png")} alt="Hamburger menu" />

    </div>
  )
}
