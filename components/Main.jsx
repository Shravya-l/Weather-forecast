import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { setFunction } from './icons';
import { TbCloudSearch } from "react-icons/tb";
function Main() {

  const [city, setCity]=useState(null);
  const [search, setSearch]=useState("Mumbai");
  const [icon, setIcon] = useState(null);
  console.log(search);
  useEffect(() =>{
    async function getData(){
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b2796e9f55b5638afcfdd83b84311a4f`;

    try{
      let response = await axios.get(api);
      setCity(response.data);
      if(response?.data?.weather){
        setIcon(response?.data.weather[0].icon)
      }
    }catch(error){
      alert(error.response.data.message);
    }
  }
  getData()
},[search]);
console.log(city);
  return (

    <main className='card'><br />
    <div>
    <div className='search-bar'>          
    <TbCloudSearch size={60} color='black' />
      <input type="search" placeholder='Search City'
        onClick={(e) => setSearch(e.target.value)}  className='search'/>
    </div>
    <button className='btn'>Submit</button>
    </div>
      <div className='card-body'>
        <header>
        <h1>{search}</h1>
        </header>
        <div className='sub-block'>
        <div>
          <img className='image' src={setFunction(icon)} alt="" width={200} height={200}/>
        </div>


        {/*For temperatures*/}
        <div>
          <h2>{city?.main?.temp + "\xB0"} C</h2>
          <p>Feels like {city?.main?.feels_like + "\xB0"} C</p>
          <h3>{city?.weather[0].main}</h3>
          <div className='sub'>
            <span>Max temp : {city?.main?.temp_max + "\xB0"} C </span>
            <span>Min temp : {city?.main?.temp_min + "\xB0"} C</span>
          </div>
          <p>Humidity : {city?.main?.humidity}g kg<sup>-1</sup></p>
          <p>Pressure : {city?.main?.pressure} Pa</p>
        </div>
      </div>
      </div>
    </main>
  );
}

export default Main