
import SectionBanner from "./SECTIONS/SectionBanner/Index"
import SectionVideo from "./SECTIONS/SectionVideo/Index"
import SectionSlide from "./SECTIONS/SectionSlider/Index"
import SectionBeneficiosFranqueado from "./SECTIONS/SectionBeneficiosFranqueado/Index"
import SectionTecnologia from "./SECTIONS/SectionTecnologia/Index"
import SectionMira from './SECTIONS/SectionMira/Index'
import SectionAporte from "./SECTIONS/SectionAporte/Index"
import SectionForm from "./SECTIONS/SectionForm/Index"
import Whatsapp from "./components/buttonWhatsapp/Index"
import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <main className="w-full bg-[#00a19a] text-white">
        <SectionBanner />
        <SectionVideo />
        <SectionSlide />
        <SectionBeneficiosFranqueado />
        <SectionTecnologia />
        <SectionMira />
        <SectionAporte />
        <SectionForm />
        <Whatsapp />
        <BackTop />
      </main>

      <Footer />

    </>
  )
}

export default App
