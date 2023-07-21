import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-olhar-certo.onrender.com"
})

interface propsFormData {
    nome: string;
    telefone: string;
    email: string;
}

export const enviarEmail = async (formData:propsFormData) => {
    const {nome, telefone, email} = formData

    const formDataToSend = new FormData();
    formDataToSend.append("nome", nome);
    formDataToSend.append("telefone", telefone);
    formDataToSend.append("email", email);


    return await api.post("/send", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

}
