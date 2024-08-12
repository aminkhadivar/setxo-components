import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-center">
        <a href="https://setxo.com/" target="_blank">
          <img src="/SetxoLogo.svg" className="h-20" alt="Setxo Logo" />
        </a>
      </div>
      <h1 className="md:text-5xl text-3xl font-bold">
        Free React Components with Tailwind CSS
      </h1>
      <h2 className="md:text-3xl text-xl font-medium">Optimized for Laravel and Inertia js</h2>
      <div className="flex items-center justify-center">
        <Button as="externalLink" className="px-6" color="purple" size="xl" rounded="full" href="https://setxo.com/">Get Started</Button>
      </div>
    </div>
  )
}

export default App