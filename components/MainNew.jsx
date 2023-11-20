import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Card from './Card';
function Main() {

  const [city, setCity]=useState(null);
  const [search, setSearch]=useState("Mumbai");

  console.log(search);
  useEffect(() =>{
    async function getData(){
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b2796e9f55b5638afcfdd83b84311a4f`;

    try{
      let response = await axios.get(api);
      setCity(response.data)
    }catch(error){
      console.log(error.response.data.message);
    }
  }
  getData()
},[search]);
console.log(city);
  return (
    <div>
        <input type="search" placeholder='Search City'
        onChange={(e) => setSearch(e.target.value)} className='search-bar'/>
        {
          
        }
        <Card search={search} city={city} />
    </div>
  )
}

export default Main