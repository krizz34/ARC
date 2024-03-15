import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <>
        <li className='cardItem'>
            <Link className='cardItem_link' to={props.path}>
                <figure className='cardItem_pic-wrap' content-category={props.label}>
                    <img src={props.src} className='cardItem_image'></img>
                </figure>
                <div className='cardItem_info'>
                    <h5 className='cardItem_text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default Card
