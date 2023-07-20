

export default function SectionVideo() {
    return (
        <section className="w-full mt-5 py-10 md:py-14 xl:py-20 px-5 md:px-[5%] flex flex-col lg:flex-row lg:gap-4 xl:gap-16 items-center " data-aos="fade-up" data-aos-duration="1500">
            <div className="w-full lg:w-1/2 flex justify-center 2xl:justify-end box-border" >
                <div className="lg:max-w-[600px] ">
                    <h1 className=" md:min-h-[85px] xl:min-h-[90px] text-4xl xl:text-6xl font-bold text-gradient mb-4">
                        Um segmento tão lucrativo que cada vez mais atrai novos olhares
                    </h1>

                    <div className="flex flex-col gap-2 text-[18px] ">
                        <p>
                            No Brasil, cerca de 1,2 milhão de pessoas estão cegas, sendo que 60% a 80% podem ser casos tratáveis e reversíveis. A Olhar Certo pode ser a solução para essas pessoas.
                        </p>
                        <p>
                            75% da população brasileira não tem convênio de saúde. É o que diz a ANS, que aponta uma queda de 3,4 milhões de vidas nos últimos 5 anos - de 51 milhões para 47 milhões de usuários de plano de saúde.
                        </p>
                        <p>
                            No Franchising, o mercado da saúde em 2020 faturou quase R$ 8 milhões. Esses são dados da ABF (Associação Brasileira de Franchising), que apontou uma variação na queda de apenas 3,1%, ou seja, o setor que menos foi afetado pela crise.

                        </p>
                        <p>
                            Todos esses dados indicam que investir em empresas desse setor pode ser a oportunidade certa para investidores que buscam renda e diversificação - sem abrir mão de segurança e de alta rentabilidade.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center mt-8">
                <h1 className="max-w-[570px] text-3xl xl:text-4xl font-bold mb-8 text-center">
                    Enxergar bem é viver bem!
                </h1>
                <div className="w-full lg:min-h-350px] flex justify-center items-center video " data-aos="flip-right" data-aos-duration="1500" data-aos-delay="100">
                    <iframe className="w-full lg:w-[100%] h-[190px] md:h-[350px] lg:h-[235px] xl:h-[300px] rounded-lg" src="https://www.youtube.com/embed/bbasWMVxVEo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
        </section>
    )
}