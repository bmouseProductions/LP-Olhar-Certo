import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-olhar-certo.onrender.com"
})

interface propsFormData {
    nome: string;
    telefone: string;
    email: string;
    estado: string;
    cidade: string;
    capital: string;
    emailMarketing: boolean; 
}



export const enviarEmail = async (formData: propsFormData) => {
    const {nome, telefone, email, estado, cidade, capital, emailMarketing} = formData;

    const dataToSend = {
        nome,
        telefone,
        email,
        estado,
        cidade,
        capital,
        emailMarketing
    }
    try{
        const response = await api.post("/send", dataToSend)
        return response.data
    } catch (error: any) {
        throw new Error("Erro" + error.message)
    }

}
