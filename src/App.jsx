import Products from '../Products';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Cart';
import { useState } from 'react';
function App() {
    let items= [ {
        "title": "Naruto",
        "image": "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
        "price": 24.99
    },
    {
        "title": "Dragon Ball Z",
        "image": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        "price": 29.99
    },
    {
        "title": "One Piece",
        "image": "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/06/One-Piece-106-manga.jpg?resize=1280%2C2032&quality=80&ssl=1",
        "price": 27.99
    },
    {
        "title": "Attack on Titan",
        "image": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        "price": 23.99
    },
    {
        "title": "Clannad",
        "image": "https://cdn.myanimelist.net/images/anime/13/73877.jpg",
        "price": 23.49
    },
    {
        "title": "Made in Abyss",
        "image": "https://m.media-amazon.com/images/M/MV5BYWY3MTliMWYtMmQ1Zi00NDE0LTkzYmUtZDI4MDM1MTgwZTc4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        "price": 28.49
    },
    {
        "title": "Mob Psycho 100",
        "image": "https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        "price": 25.49
    },
    {
        "title": "March Comes in Like a Lion",
        "image": "https://media.senscritique.com/media/000017205093/source_big/March_Comes_in_Like_a_Lion.jpg",
        "price": 21.99
    }
    ]
 const [total,settotal]=useState(0)
 const [item,setitem]=useState([])
  let additem=(product)=>
  {
   setitem([...item,product]);
   settotal(total+product.price)
  }
  let remove=(product)=>{
    let index=item.findIndex(items=>items.name=== product.name)
    if(index != -1)
    {
        item.splice(index,1)
        setitem([...item])
        settotal((total-product.price).toFixed(2))
      }
      if(item.length==0)
        settotal(0)
   
  }


  return <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Anime store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <div className='cont text-center fs-1 fw-bolder  py-5 '>Shop your favorite<div></div></div>
  <div className=' container-fluid d-flex bg-secondary '>
  <div className='col-lg-9 d-flex flex-wrap '>
 {
  items.map((item)=>{
    return<Products item={item} additem={additem}/>
  })
  }
  
</div>
<div className='col -lg-3'><h1>Cart ({item.length})</h1>
<Cart total={total} items={item} remove={remove}/></div>
</div>
  </>
}

export default App
