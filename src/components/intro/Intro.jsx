import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

function Intro() {

  //OLD STYLE: componentDidMount()
  //NEW STYLE: useEffect()

  //OLD STYLE: document.querySelector()
  //NEW STYLE: useRef()
  
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'ML Engineer', 'Computer Vision', 'Data Science', 'Signal Processing', 'Control', 'Data Structures and Algorithms', 'Football Player', 'Full-time Sleeper'],
  });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
      <div className="imgContainer">
        <img src='assets/man2.jpg' alt='Man' />
      </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ermias Jima</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  )
}

export default Intro