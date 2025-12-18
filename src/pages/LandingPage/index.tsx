import BookTicket from "../../components/BookTicket";
import CardSection from "../../components/cardSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MallSection from "../../components/MallSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <MallSection />
      <BookTicket />
      <CardSection />

      <Footer />
    </>
  )
}
