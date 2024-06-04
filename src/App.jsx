import './App.css'
import Title from './Title'
import Paragraph from './Paragraph'

function App() {


  return (
    <div className='bigDiv'>
      <div className='card1'>
        <h1>Mattis elit dignissim nibh sit. Donec arcu sed
          elit scelerisque</h1>
        <Paragraph />
        <p>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur
vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi
volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
      </div>
      <div className="card">
        <Title />
        <ul>
          <li>
            <p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</p>
          </li>
          <li>
            <p>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat
                dui. A bibendum viverra eu cras.</p>
          </li>
          <li>
            <p>Mauris morbi sed dignissim a in nec aliquam fringilla et.</p>
          </li>
          <li>
            <p>Consectetur feugiat quis hac enim nullam in enim.</p>
          </li>
        </ul>
      </div>
      <div className='card'>
        <Title />
        <Paragraph />
      </div>
    </div>
  )
}

export default App
