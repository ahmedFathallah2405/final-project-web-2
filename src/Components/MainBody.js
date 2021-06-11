import React from 'react'
import '../App.css'
import Button from './Button'
import './MainBody.css'


const MainBody = () => {
    return (
        <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>TRAVELLING IS HAPPINESS </h1>
      <p>join us, you won't regret it!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LET'S START
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          HAVE A LOOK <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    );
};

export default MainBody
