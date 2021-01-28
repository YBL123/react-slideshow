import React, { useState, useEffect } from 'react'

const images = [
  {val: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*'},
  {val: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:*'},
  {val: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1168969757-612x612-1607860476.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*'},
  {val: 'https://www.growerdirect.com/uploads/thumbnails/flower%20varieties.jpg.7de9d680.jpg'},
  {val: 'https://www.proflowers.com/blog/wp-content/uploads/2018/05/20-annual-flowers-hero.jpeg'}
]

const App = () => {

  const [index, setIndex] = useState(0)
  const [playSlide, setPlaySlide] = useState(false)
  const [time, setTime] = useState(2000)

  const prev = () => {
    if (index <= 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const next = () => {
    if (index >= images.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

 //useEffect
  useEffect(() => {
    if (playSlide) {
      setTimeout(() => {
        if (index >= images.length - 1) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      }, time);
    }

  }, [index, playSlide, time])

  const play = () => {
    // setting it to the opposite of whatever it was previously
    setPlaySlide(!playSlide)
  }

  const incTime = () => {
    setTime(time + 1000)
  }

  const decTime = () => {
    if (time >= 2000) {
      setTime(time - 1000)
    }
  }


  return (
    <>
    <div>
      <img src={images[index].val} alt="flowersss" width="500" height="600" onMouseEnter={play} onMouseLeave={play} />
    </div>
    <div>
      <button className="previous-btn" onClick={prev}>Previous</button>
    </div>
    <div>
      <button className="next-btn" onClick={next}> Next</button>
    </div>
    <div>
      <button onClick={decTime}> - </button>
    </div>
    <div>
    <button onClick={play}> {'>'} </button>
    </div>
    <div>
    <button onClick={incTime}> + </button>
    </div>
    </>
  )

}

export default App
