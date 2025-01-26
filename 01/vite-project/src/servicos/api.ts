import axios from "axios";


// Criando uma instância do axios
const api = axios.create({
  baseURL: "http://localhost:3000",
}); 
export default api;