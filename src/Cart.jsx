import React from 'react'

function Cart({ total, items, remove }) {
    return (
        <><div>{
             <ol class="list-group list-group-numbered ">
                    {
                        items.map((item) => {
                            return<li class="list-group-item d-flex justify-content-between align-items-start mb-3  ">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">{item.title}</div>
                                <h3>{item.price}</h3>
                            </div>
                            <button className='btn btn-primary' onClick={() => remove(item)}>X</button>
                        </li>})
                    }
                </ol>
            
        }</div>
            <h1>Total: ${total}</h1>
        </>
    )
}

export default Cart
