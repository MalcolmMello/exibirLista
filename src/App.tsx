function App() {
  let list = [
    'malcolm',
    'joão',
    'baonieky'
  ];

  return (
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App