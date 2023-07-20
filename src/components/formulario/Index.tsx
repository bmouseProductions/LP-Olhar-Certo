import { FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


interface FormData {
  nome: string;
  telefone: string;
  email: string;
}


const estados = [
  {estado: "Estado"},
  {estado: "Acre"},
  {estado: "Alagoas"},
  {estado: "Amapá"},
  {estado: "Amazonas"},
  {estado: "Bahia"},
  {estado: "Ceará"},
  {estado: "Espírito Santo"},
  {estado: "Goiás"},
  {estado: "Maranhão"},
  {estado: "Mato Grosso"},
  {estado: "Mato Grosso do Sul"},
  {estado: "Minas Gerais"},
  {estado: "Pará"},
  {estado: "Paraíba"},
  {estado: "Pernambuco"},
  {estado: "Piauí"},
  {estado: "Rio de Janeiro"},
  {estado: "Rio Grande do Norte"},
  {estado: "Rio Grande do Sul"},
  {estado: "Rondônia"},
  {estado: "Roraima"},
  {estado: "Santa Catarina"},
  {estado: "São Paulo"},
  {estado: "Sergipe"},
  {estado: "Tocantins"},
  {estado: "Distrito Federal"},
]

const capitais = [
  {capital: 'Capital Disponível para Investimento'},
  {capital: 'Entre R$200 mil e R$300 mil'},
  {capital: 'Entre R$300 mil e R$400 mil'},
  {capital: 'Acima de R$500 mil'},
]

export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
  });



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="w-full sm:w-auto flex flex-col">
      <label className="font-bold" htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        onChange={handleChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="estado">Estado:</label>
      <select 
        name=""
        id="estado"
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        {
          estados.map( (estado) => <option key={estado.estado}>{estado.estado}</option>)
        }
        
      </select>

      <label className="font-bold" htmlFor="cidade">Cidade:</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        onChange={handleChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      
      <select
        name=""
        id=""
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        {
          capitais.map( (capital) => <option key={capital.capital}>{capital.capital}</option>)
        }
        
      </select>

      <div className="flex gap-3 mb-2">
        <input className="w-4" type="checkbox" checked name="" id="" />
        <p>Aceito receber ofertas, novidades, conteúdos informativos e publicitários.</p>
      </div>

      <div className="flex gap-3 mb-5 w-[100%] ">
        <input className="w-4" type="checkbox" checked required name="termos politica de privacidade" id="" />
        <p>Aceito a <a className="text-blue-600 underline" href="https://olharcerto.com.br/politica-de-privacidade/" target="_blank">política de privacidade</a>.</p>
      </div>
      
    

      <Button
        type="submit"
        variant="contained"
        id="styleButton"
        endIcon={<SendIcon />}
        className="max-w-[600px]"
      >
        Eu quero me credenciar
      </Button>
      
    </form>
  );
};
