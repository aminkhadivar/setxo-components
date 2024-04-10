import './App.css'
import { Button } from 'setxo-component'
// import Button from './components/Button/Button'
import 'setxo-component/dist/style.css'
import { Accordion } from './components'

function App() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-center">
        <a href="https://setxo.com/" target="_blank">
          <img src="/SetxoLogo.svg" className="h-20" alt="setxo logo" />
        </a>
      </div>
      <h1 className="md:text-5xl text-3xl font-bold">
        React Components with Tailwind CSS
      </h1>
      <h2 className="md:text-3xl text-xl font-medium">Optimized for Laravel and React and Inertia JS</h2>
      <div className="flex items-center justify-center">
        <Button as="externalLink" className="px-6" color="purple" size="xl" rounded="full" href="https://setxo.com/">Get Started</Button>
      </div>
      <Accordion multiple>
        <Accordion.Item
          title="Accordion Item 1"
          id="accordion-multiple-item-one"
        >
          <p className="mt-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
          </p>
        </Accordion.Item>

        <Accordion.Item
          title="Accordion Item 2"
          id="accordion-multiple-item-two"
        >
          <p className="mt-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
          </p>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion Item 3"
          id="accordion-multiple-item-one"
        >
          <p className="mt-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
          </p>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default App