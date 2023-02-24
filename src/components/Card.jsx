import React from 'react'

const Card = (props) => {

  return (
    <div className='card p-5' key={props.product.id} style={{width: "18rem"}} >
        <div className='card-body'>
          <img src={props.product.image} alt="" className='card-img-top' />
          <h5 className='card-title text-truncate text-primary'>{props.product.title}</h5>
          <p className='card-text text-secondary text-truncate'> {props.product.description} </p>
        </div>
        <button className="btn btn-primary">add to cart</button>
        </div>
  )
}

export default Card
