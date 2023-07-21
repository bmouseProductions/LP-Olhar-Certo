import { FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


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

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  estado: string;
  cidade: string;
  capital: string;
  emailMarketing: boolean;
}

export const Formulario = () => {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    capital: "",
    emailMarketing: false,
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true)
      await enviarEmail(formData);
      console.log("Dados", formData)
    } catch (error) {
      console.error("Something is wrong", error);
    } finally{
      setIsSending(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-auto flex flex-col">
      <label className="font-bold" htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
         name="nome"
         onChange={handleChange}
         value={formData.nome}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
         name="email"
         value={formData.email}
        onChange={handleChange}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
         name="telefone"
         value={formData.telefone}
        onChange={handleChange}
        required
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      <label className="font-bold" htmlFor="estado">Estado:</label>
      <select 
         name="estado"
         value={formData.estado}
         onChange={handleSelectChange}
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
         value={formData.cidade}
        onChange={handleChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      />

      
      <select
         name="capital"
        id="capital"
        value={formData.capital}
        onChange={handleSelectChange}
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        {
          capitais.map( (capital) => <option key={capital.capital}>{capital.capital}</option>)
        }
        
      </select>

      <div className="flex gap-3 mb-2">
        <input 
          className="w-4" 
          type="checkbox"  
           name="emailMarketing" 
          id="emailMarketing" 
          // value={formData.emailMarketing}
          checked={formData.emailMarketing}
          onChange={handleChange}
        />
        <label htmlFor="emailMarketing">Aceito receber ofertas, novidades, conteúdos informativos e publicitários.</label>
      </div>

      <div className="flex gap-3 mb-5 w-[100%] ">
        <input className="w-4" type="checkbox"  required name="termos politica de privacidade" id="privacidade" />
        <label htmlFor="privacidade">Aceito a <a className="text-blue-600 underline" href="https://olharcerto.com.br/politica-de-privacidade/" target="_blank">política de privacidade</a>.</label>
      </div>
      
    

      <Button
        type="submit"
        variant="contained"
        id="styleButton"
        endIcon={<SendIcon />}
        className="max-w-[600px]"
        disabled={isSending}
      >
        Eu quero me credenciar
      </Button>
      
    </form>
  );
};
