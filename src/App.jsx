import Nav from './components/Nav'
import Card from './components/Card'
import data from './Data'
import './App.css'

function App() {
  const cardData = data.map(item => {
    return(
      <Card 
        key={item.id}
        location={item.location}
        date={item.date}
        site={item.site}
        description={item.description}
        img={item.img}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      {cardData}
    </div>
  )
}

export default App
