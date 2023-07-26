import Botao from '../../components/button/Index'

import Colaboradores from '../../assets/icons-beneficios/profissional.png'
import Consulta from '../../assets/icons-beneficios/Consultoria.png'
import Marketing from '../../assets/icons-beneficios/campanha-digital.png'
import Geomarketing from '../../assets/icons-beneficios/geomarketing.png'
import Assessoria from '../../assets/icons-beneficios/assessoria.png'
import Sistema from '../../assets/icons-beneficios/sistema.png'
import Know from '../../assets/icons-beneficios/know.png'
import multidiciplinar from '../../assets/icons-beneficios/clinica.png'



const icons = [
    {
        img: Colaboradores,
        title:"Colaboradores" ,
        text:"São mais de 200 colaboradores capacitados para lhe ajudar em diversos processos.",
        style:"w-[111px] " //syles gerais
    },

    {
        img: Consulta,
        title:"Consulta" ,
        text:"Consultoria inclusa, sem custo e processo de implementação gratuito.",
        style:"w-[111px]" //syles gerais
    },

    {
        img: Marketing,
        title:"Marketing" ,
        text:"Acesso às campanhas publicitárias da rede.",
        style:"w-[111px]" //syles gerais
    },

    {
        img: Geomarketing,
        title:"Geomarketing" ,
        text:"Estudo de mercado e estratégias bem traçadas, sempre com foco no retorno financeiro e das ações de marketing.",
        style:"w-[111px] " //syles gerais
    },

    {
        img: Assessoria,
        title:"Assessoria" ,
        text:"Assessoria de imprensa, jurídica e on-line para dar suporte a você em todas as situações.",
        style:"w-[111px]" //syles gerais
    },

    {
        img: Sistema,
        title:"Sistema de Gestão" ,
        text:"DocBiz, NPS e Business Intelligence.",
        style:"w-[111px]" //syles gerais
    },

    {
        img: Know,
        title:"Know-how" ,
        text:"Experiência e conhecimento de mercado.",
        style:"w-[111px] " //syles gerais
    },

    {
        img: multidiciplinar,
        title:"Clínicas multidisciplinares" ,
        text:"Os mais avançados exames e tratamentos.",
        style:"w-[111px]" //syles gerais
    },
]

interface CardProps{
    title: string,
    img: string,
    text: string,
    style:string
}

function Card( { title, img, text, style }:CardProps ){
    return(
        <div className='w-[300px] h-[280px] p-2 flex flex-col items-center  bg-white rounded shadow-md pt-5'>
            <img src={img} className={style} alt="" />
            <h3 className='font-semibold text-[22px] my-3'>{title}</h3>
            <p className='text-center  '>{text}</p>
        </div>
    )
}

export default function SectionBeneficiosFranqueado(){
    return (
        <section className=" flex flex-col lg:flex-row items-center justify-center box-border text-black bg-img-gradient" >
            <div className='w-full max-w-[1450px] xl:p-[95px] xl:flex xl:justify-around '>
                
                <div className=' px-5 py-12 md:px-[5%] xl:px-0 xl:py-0 '>

                    <div>
                        <h1 className="min-h-[50px]  md:min-h-[50px] xl:min-h-[70px] mb-4 text-4xl xl:text-5xl text-center font-bold text-[#029286] ">
                            Todo o suporte e treinamento que você precisa para se tornar referência no mercado oftalmológico.
                        </h1>

                        <p className='mb-14 text-[18px] text-center'>
                            Os franqueados da Olhar Certo recebem todo o apoio de que precisam. Desde treinamento inicial em todas as áreas do negócio (on-line com as equipes das unidades, reciclagem e capacitação contínua) até consultoria de comunicação da marca (planejamento de campanhas e promoções anual, materiais gráficos e muito mais).
                        </p>
                    </div>
                    
                    <div>
                        <h1 className="min-h-[50px]  md:min-h-[50px] xl:min-h-[70px] mb-10 text-4xl xl:text-5xl text-center font-bold text-[#029286] ">
                        Ao se tornar franqueado da Olhar Certo, você ainda conta com:
                        </h1>

                        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center gap-10'>
                            {icons.map( (icon, index) =>
                                <Card key={index} title={icon.title} img={icon.img} text={icon.text} style={icon.style} />
                            )}
                        </div>

                        <div className='w-full flex justify-center mt-10'>
                            <Botao>
                                Quero ser um franqueado
                            </Botao>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}