import { Pessoa } from './components/Pessoa'

function App() {
  let list = [
    {name: 'malcolm', age: 17},
    {name: 'pedro', age: 17},
    {name: 'bonieky', age: 17},
    {name: 'jose', age: 17}
  ];

  return (
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item}/>
        ))}
      </ul>
    </div>
  )
}

export default App