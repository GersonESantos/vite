import { useState , userEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './servicos/api'
function App() {
  const [produtos, setProdutos] = useStateIProdutos[]>([]);

  interface IProdutos
  {
 id: number;
 nome: string;
 preco: number;
 endereco: {
     rua: string;
     numero: number;
     bairro: string;
          }
 }

  useEffect(() => {
    
async function getProdutos() {
  const response = await api.get<IProdutos[]>('/produtos') 
  setProdutos(response.data) 
  
  } 
  get.Produtos();
  }, []); 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div key={produtos.id}>
        <h1>{produtos.nome} - {produtos.preco}</h1>
        <p>
          {produtos.endereco.rua}, {produtos.endereco.numero} - {produtos.endereco.bairro}
        </p>
      <h1>{produtos.map} {produtos=> (
        <p>
          {produtos.nome} - {produtos.preco}  

        </p>
        </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
