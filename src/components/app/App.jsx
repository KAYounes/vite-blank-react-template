import './App.module.css'

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

function App() {
  return (
    <div>
      Hello, lets go.
    </div>
  )
}

export default App
