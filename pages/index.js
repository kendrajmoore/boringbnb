import houses from '../houses.js'

export default function Home(){
  return (
    <div>
      <h2>Places to stay</h2>
      <div className='houses'>
        {houses.map((house, index) => {
          return <House key={index} {...house}/>
        })
      }
      </div>
    </div>
  )
}