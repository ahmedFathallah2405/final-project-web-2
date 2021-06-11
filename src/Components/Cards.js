import React from 'react'
import './Cards.css';
import CardItems from './CardItems';

const Cards = () => {
    return (
        <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItems
                src='images/beautiful_waterfall.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services'
              />
              <CardItems
                src='images/beautiful_island.jpg'
                text='Travel through the Islands of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItems
                src='images/beautiful_cave.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services'
              />
              <CardItems
                src='images/beautiful_mountains.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/products'
              />
              <CardItems
                src='images/desert.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards
