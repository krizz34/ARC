import React from 'react'
import Card from './Card'
import './CardHolder.css'
import image9 from './Card-Images/img-9.jpg';
import image2 from './Card-Images/img-2.jpg';
import image3 from './Card-Images/img-3.jpg';
import image4 from './Card-Images/img-4.jpg';
import image8 from './Card-Images/img-8.jpg';
// import logo from './ARC Logo.png';


function CardHolder() {
  return (
    <div className='cardHolder'>
      <h1>Check out these EPIC destinations !</h1>
      <div className='cardHolder_container'>
        <div className='cardHolder_wrapper'>
            <ul className='cardHolder_items'>
                <Card 
                    src={image9}
                    text="Explore this hidden waterfall DEEP inside The Kodai Jungle"
                    label="Adventure"
                    path="/services"
                />
                <Card 
                    src={image2}
                    text="Cruise thorough enchanting beaches of Lakshwadeep in a Private Yatch"
                    label="Luxury"
                    path="/services"
                />
            </ul>
            <ul className='cardHolder_items'>
                <Card 
                    src={image3}
                    text="Set sail though the unchartered waters near the Nicobars"
                    label="Adventure"
                    path="/services"
                />
                <Card 
                    src={image4}
                    text="Who wouuld have thought to Play Football in the middle of Ocean."
                    label="Sporty"
                    path="/services"
                />
                 <Card 
                    src={image8}
                    text="Camel Cruise the Dunes of The Thar"
                    label="Adventure"
                    path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default CardHolder
