import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  return (
    <>
    <div  style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
    <Header />
    <Navbar />

    <div className={`h-[550px] flex justify-start items-center text-white px-32`}
    
     >
      <div className="flex flex-col justify-center gap-8 max-w-lg bg-black/50 p-4 rounded-lg h-full">
        <h6 >KHAWAJA YANNI</h6>
        <h1 className="text-[85px] leading-none">The new era of luxury</h1>
        <p className="text-lg font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas molestiae?</p>
        <button className="px-16 py-3.5 themeColor rounded-[16px] self-start">Book reservation now -›</button>
      </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
