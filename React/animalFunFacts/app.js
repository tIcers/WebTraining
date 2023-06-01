import {animals} from './animals'
import {createRoot} from 'react-dom/client' 
import {React} from 'react'


const container = document.getElementById('app')
const root = createRoot(container) 

const title = ''

const background = (
      <img className = 'background' alt='ocean' src='/image/ocean.jpg'/>
)

const images = for (const animal in animals) {
   <img key={animal} className='animal' alt={animal} src ={animals[animal].image} aria-label={animal} role ='button'/> 
  
}
const animalFacts = (
  <div>
  {background}
  <h1>{ title ==='' &&'Click an animal for a fun fact'}</h1>
  </div>
)
root.render(animalFacts)
