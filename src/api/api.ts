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
    const { nome, telefone, email, estado, cidade, capital, emailMarketing } = formData

    const formDataToSend = new FormData();
    formDataToSend.append("nome", nome);
    formDataToSend.append("telefone", telefone);
    formDataToSend.append("email", email);
    formDataToSend.append("estado", estado);
    formDataToSend.append("cidade", cidade);
    formDataToSend.append("capital", capital);
    formDataToSend.append("emailMarketing", String(emailMarketing)); // Converta para string antes de adicionar ao FormData

    return await api.post("/send", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}
