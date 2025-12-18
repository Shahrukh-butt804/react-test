import { imageUrl } from "../functions/imageUrl";

export default function MallSection() {
    return (
        <div className="flex justify-center items-center px-4 md:px-0">
            <div className="flex flex-col gap-5 py-10 justify-center items-center max-w-4xl">
                <h1 className="text-4xl md:text-6xlleading-10 md:leading-18 text-center">Mall Of: Endless Possibilities</h1>
                <p className="text-sm md:text-lg text-center px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eveniet recusandae ea. Vel repellendus iusto eaque porro nemo neque illum voluptate maiores voluptatibus esse dolorum praesentium facere?  Eaque eveniet recusandae ea. Vel repellendus iusto eaque porro nemo neque illum voluptate maiores </p>

                <div className="md:my-10 w-full bg-center bg-no-repeat flex justify-center items-center relative">
                    <img className="" src={imageUrl("mall.png")} alt="play-icon" />
                    <img className="bg-white ps-5 p-4 rounded-full absolute top-[30%] left-[40%] md:top-[42%] md:left-[44%]" src={imageUrl("play.png")} alt="play-icon" />
                </div>

                <div className="bg-white/5 p-8 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center rounded-4xl max-w-4xl">
                    <div className="flex flex-col gap-4">
                        <p>25 SR/GUEST</p>
                        <p className="text-3xl md:text-4xl">Get your general Access Ticket</p>
                        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta suscipit facilis harum adipisci, quae ipsum accusantium quidem rerum laboriosam vero quasi dolorem quisquam eligendi, nemo enim? Alias, autem mollitia!</p>
                    </div>

                    <img className="ps-5 md:p-4 rounded-full self-end md:self-auto" src={imageUrl("arrow.svg")} alt="arrow-right" />

                </div>

            </div>
        </div>
    )
}
