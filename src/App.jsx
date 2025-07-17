import './App.css'
import CreateCountry from './components/CreateCountry'
import InfoApi from './components/InfoApi'
import TwitterFollowCard from './components/TwitterFollowCard'

const users = [
  {
    name: 'Harby Garcia Grajales',
    userName: 'harbygarcia8',
    isFollowing: false
  }, 
  {
    name: 'Platzi',
    userName: 'Platzi',
    isFollowing: true,
  },
  {
    name: 'Estefania',
    userName: 'MPaulinaG',
    isFollowing: false
  }
]

function App() {
  return (
    <section className='App'>
      {/* { users.map(item => (
        <TwitterFollowCard item={item}/>
      ))
      } */}
      {/* <InfoApi /> */}
      <CreateCountry />

    </section>
    
  )
}

export default App
