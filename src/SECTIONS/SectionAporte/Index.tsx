import clinica from '../../assets/clinica2.webp'
import aporte from '../../assets/aporteOC.webp'
import Botao from '../../components/button/Index'

export default function SectionAporte(){
    return (
        <section  data-aos="zoom-out" data-aos-duration="1500">
            <div className="w-full max-w-[1450px]  xl:px-[95px] m-auto">
                <div>
                    <h1 className=' md:min-h-[85px] xl:min-h-[90px] text-4xl xl:text-6xl font-bold text-gradient text-center'>
                        Conheça nossos modelos de franquia!
                    </h1>
                    <h2 className=' mt-10 md:min-h-[85px] xl:min-h-[45px] text-2xl text-center font-bold h-auto text-white'>
                        Transforme sua clínica em uma Olhar Certo e aumente o seu faturamento!
                    </h2>
                </div>
                
                <div className='flex flex-col lg:flex-row px-5 mt-14'>
                    <div>
                        <img src={clinica} className='rounded-xl w-[800px] ' alt="" />
                    </div>

                    <div className='flex flex-col justify-center items-center py-10 lg:py-0 gap-10'>
                        <h1 className=' md:min-h-[85px] xl:min-h-[90px] text-5xl  font-bold text-white text-center'>
                            A partir de R$ 690 mil de Investimento
                        </h1>
                        <img src={aporte} className='w-[500px]' alt="" />
                    </div>
                </div>
            </div>

            <div className='max-w-[365px] px-5 mb-10 lg:my-16 m-auto'>
                <Botao>
                    Seja um Franqueado
                </Botao>
            </div>
            
        </section>
    )
}