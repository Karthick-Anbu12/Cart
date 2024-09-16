import React from 'react'

function Products({item,additem}) {
  
return(
  <div class="card mt-2 text-center m-2" style={{width: "15rem"}}>
  <img src={`${item.image}`} class="card-img-top p-2" alt="Image not found"/>
  <div class="card-body">
    <h5 class="card-title ">{item.title}</h5>
    <p class="card-text ">${item.price}</p>
    <button className='btn btn-primary' onClick={() => {additem(item)}}>Add to Cart</button>
  </div>
</div>
)
}

export default Products
