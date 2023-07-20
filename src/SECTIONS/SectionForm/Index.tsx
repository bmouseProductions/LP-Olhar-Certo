import { Formulario } from "../../components/formulario/Index";
import logo from '../../assets/logoColorida.png'
import clinica from '../../assets/imagemClinica.webp'


export default function SectionForm(){
    return (
        <section className="bg-img-gradient" >
            <div className="py-10 md:py-14 xl:py-20 px-5 md:px-[5%] xl:px-[95px] bg-img-dark" data-aos="fade-right" data-aos-duration="1500">
                <div className="max-w-[1400px] flex flex-col lg:flex-row items-center lg:justify-between lg:gap-10 m-auto text-black">
                    <div className="w-full lg:w-auto">
                        <div>
                            <h2 className=" mb-5 text-4xl text-center font-semibold">
                                Seja um franqueado Olhar Certo e fature, em média,
                            </h2>
                            <h1 className="text-6xl lg:text-7xl font-bold text-center text-[#029286] mb-5">2 MILHÕES</h1>
                            <p className= 'mb-5 text-4xl text-center font-semibold'>
                                por ano em um dos setores que mais cresce no mundo.
                            </p>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center xl:justify-around gap-3 ">
                            <div className="w-[150px] h-[140px] flex flex-col items-center justify-center shadow-lg text-white p-2 bg-[#029286] rounded-xl">
                                <h3 className="text-[14px] font-semibold text-center">Faturamento Médio Mensal:</h3>
                                <span className="text-[28px] font-bold text-center">200mil</span>
                            </div>

                            <div className="w-[150px] h-[140px] flex flex-col items-center justify-center shadow-lg text-white p-2 bg-[#029286] rounded-xl">
                                <h3 className="text-[14px] font-semibold text-center">Lucro Médio Mensal:</h3>
                                <span className="text-[28px] font-bold text-center">Entre 20% a 30%</span>
                            </div>

                            <div className="w-[150px] h-[140px] flex flex-col items-center justify-center shadow-lg text-white p-2 bg-[#029286] rounded-xl">
                                <h3 className="text-[14px] font-semibold text-center">Retorno de Investimento:</h3>
                                <span className="text-[28px] font-bold text-center">Em média 24 meses</span>
                            </div>
                        </div>

                        <div>
                            <img className="mt-10 rounded-xl" src={clinica} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:1/2 mt-10 lg:mt-0" id='form'>
                        <div className="max-w-[700px] m-auto py-10 px-5 flex flex-col items-center  bg-white rounded-2xl shadow-2xl">
                            <div className="w-full flex flex-col items-center lg:px-10 gap-5">
                                <img className=" xl:max-w-[400px] " src={logo} alt="logo olhar certo" />
                                <h2 className=" mb-5 text-2xl md:text-3xl text-center font-semibold">
                                    Descubra como uma franquia Olhar Certo pode transformar sua vida como empreendedor!
                                </h2>
                            </div>
                            
                            <Formulario />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}