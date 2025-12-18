import { imageUrl } from "../functions/imageUrl";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-7 px-32 bg-transparent">
      <div>
        <img src={imageUrl("logo.png")} alt="" />
      </div>
      <ul className="flex gap-7 items-center">
        <li><img src={imageUrl("tiktok.png")} alt="" /></li>
        <li><img src={imageUrl("insta.png")} alt="" /></li>
        <li><img src={imageUrl("x.png")} alt="" /></li>
        <li><img src={imageUrl("snap-chat.png")} alt="" /></li>

        <li><button className="px-16 py-3.5 themeColor rounded-2xl">Log in -----</button></li>

        <li className="flex justify-center items-center gap-2"><span className="inline-block rotate-90 text-3xl">›</span> <img src={imageUrl("flag.png")} alt="" />English</li>
      </ul>
    </div>
  )
}
