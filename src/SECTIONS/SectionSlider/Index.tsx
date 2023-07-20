import SliderComponent from "../../components/swiper/Index";

import imagemPremiacao  from '../../assets/premiosOC.webp'

import image1 from '../../assets/slides/OlharCerto1.webp'
import image2 from '../../assets/slides/OlharCerto2.webp'
import image3 from '../../assets/slides/OlharCerto3.webp'
import image4 from '../../assets/slides/OlharCerto4.webp'



export default function SectionSlide(){

    const slideContent = [
        <img src={image1} className="rounded" alt="imagem de consultorio da franquia Olhar Certo" />,
        <img src={image2} className="rounded" alt="imagem de consultorio da franquia Olhar Certo" />,
        <img src={image3} className="rounded" alt="imagem de consultorio da franquia Olhar Certo" />,
        <img src={image4} className="rounded" alt="imagem de consultorio da franquia Olhar Certo" />
    ];
        
    const slideCount = slideContent.length;

    return (
        <section className="w-full pt-5 pb-10 md:pb-14 md:pt-7 xl:pb-20 px-5 md:px-[5%] xl:px-[95px] box-border">
            <div className="flex flex-col items-center mb-7" data-aos="fade-down" data-aos-duration='1500'>
                <h1 className=" md:min-h-[85px] xl:min-h-[90px] text-4xl xl:text-6xl font-bold text-gradient text-center">Seja bem-vindo à Olhar Certo</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-[90%] lg:w-[40%] m-auto flex align-center justify-center" data-aos="flip-up" data-aos-duration='1500'>
                    <SliderComponent
                        slideContent= {slideContent}
                        slideCount= {slideCount}
                    />
                </div>

                <div>
                    <h2 className="md:min-h-[85px] xl:min-h-[90px] text-4xl  font-bold text-gradient text-center">
                        A rede de franquias que já nasceu com 28 anos de sucesso
                    </h2>
                    <div className="flex flex-col gap-8 mt-8 px-0 md:px-10">
                        <p className="text-xl text-center">
                            A Olhar Certo é a primeira rede de clínicas oftalmológicas criada para democratizar a saúde ocular.
                        </p>
                        
                        <p className="text-xl text-center">
                            A Olhar Certo foi criada, com o propósito de colocar os mais avançados exames e tratamentos oftalmológicos ao alcance de todos e gerar oportunidades de negócio a médicos e investidores que desejam abrir a própria clínica.
                        </p>
                        
                        <p className="text-xl text-center">
                            Aqui você encontra profissionais altamente qualificados, tratamentos oculares com tecnologia de ponta, consultas e exames para o melhor da saúde ocular do povo brasileiro.
                        </p>
                        
                        <p className="text-xl text-center">
                            Já são 30 unidades bem estruturadas presentes em 3 estados brasileiros.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-20 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <h2 className="md:min-h-[85px] xl:min-h-[90px] text-4xl  font-bold text-gradient text-center">
                        A Olhar Certo faz parte do maior ecossistema de saúde, beleza e bem-estar da América Latina.
                    </h2>

                    <div className="flex flex-col gap-8 mt-8 px-0 md:px-10">
                        <p className="text-xl text-center">
                            A SaluS é uma holding focada na entrega baseada em excelência. Resultado disso é uma estante cheia de prêmios que reconhecem e afirmam toda a nossa competência, como o <strong>Sebrae FGV</strong>, <strong>Insper</strong> e mais recentemente, a <strong>Harvard Business School e Stanford Universtity</strong>.
                        </p>
                        
                        <p className="text-xl text-center">
                            Em 28 anos de experiência, reunimos as melhores oportunidades e de know-how de marcas que já se tornaram referências no mercado, resultando no melhor suporte para crescermos juntos.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img src={imagemPremiacao} alt="imagem das premiações recebidas" />
                </div>
            </div>
        </section>
    )
}