import React from 'react'
function Card(props) {
    
  return (
    <main className='card'>
    <h1 className='head'>WELCOME TO WEATHER APP</h1>

    
<div className='card-body'>
<header>
    <h1>{props.city} {props.search}</h1>


 </header>
 <div className='sub-block'>
    <div>
        <img className='img' src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" width={200} height={200} />
    </div>

 {/* for temperature*/}
 <div>
<h2>28<sup>o</sup>C</h2>
<p> Feels like 26 {'\xB0'}C  </p>
<h3>Overcast clouds</h3>
<div className='sub'>
<span>Max temp: 28  {'\xB0'}C </span>
<span>Min temp: 28  {'\xB0'}C </span>
</div>

<p>  Humidity : 70       </p>
</div>
 </div>
</div>

</main>
  )
}

export default Card