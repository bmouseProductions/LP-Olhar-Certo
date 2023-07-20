import mira from '../../assets/mira.jpg'

export default function SectionMira(){
    return (
        <section className="w-full pt-5 pb-10 md:pb-14 md:pt-7 xl:pb-20 px-5 md:px-[5%] xl:px-[95px] box-border">
            <h1 className='min-h-[50px] md:min-h-[50px] xl:min-h-[70px] mb-7 lg:mb-16 text-4xl xl:text-6xl text-center font-bold text-gradient '>
                Um grande diferencial que vai fazer sua clínica se destacar da concorrência:
            </h1>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='mt-0 lg:mt-5'>
                    <h2 className=' md:min-h-[85px] xl:min-h-[90px] text-3xl lg:text-5xl  font-bold text-white text-center'>
                        Parceria com o Hospital Oftalmológico Mira.
                    </h2>

                    <p className='text-[18px] mt-5 lg:mt-10 text-center'>
                        Com um dos mais modernos centros oftalmológicos do Brasil, o Mira conta com equipamentos de última geração para oferecer aos pacientes o que há de melhor para você.
                    </p>
                </div>

                <div className='w-full'>
                    <img className='rounded-full' src={mira} alt="" />
                </div>
            </div>
        </section>
    )
}