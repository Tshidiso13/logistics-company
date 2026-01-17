import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Preview from "../components/Preview"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Preview />
        <WhyChooseUs />
        <CTA />
        <Footer />
    </div>
  )
}

export default Home