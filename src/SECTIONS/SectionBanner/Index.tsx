import banner from '../../assets/bannerOC.webp'
import logo from '../../assets/logo.svg'
import Botao from '../../components/button/Index'

export default function SectionBanner() {
    return(
        <section className="w-full xl:!max-h-[900px] pt-[40px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#ff7e00]  md:from-30% to-[#00a19a] md:to-70%">
            <div className='flex flex-col lg:flex-row-reverse md:justify-center md:items-center'>
                <img src={banner} alt="banner divulgação new aligner" className='w-auto  md:max-w-full lg:max-w-[550px] xl:max-w-[700px] ' data-aos="fade-left" data-aos-duration="1500"/>
                <div className='w-full mt-5 md:mt-10 px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center' data-aos="fade-right" data-aos-duration="1500">
                    <div className='w-full flex flex-col'>
                        <img src={logo} alt="" />
                        <span className='w-full text-[20px] font-normal text-center mt-4 text-white border-[2px] rounded-xl'>Seja um credenciado New Aligner</span>
                    </div>
                    <h2 className='mt-4 mb-10 text-2xl xl:text-3xl font-semibold text-white text-center  '>Você pode ganhar até 5 vezes mais com o New Aligner.</h2>
                    <Botao>
                        Quero me credenciar
                    </Botao>
                </div>
            </div>
        </section>
    )
}