
import { useState, useEffect } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/ShoppingCart'
import {useRouter} from 'next/router'
import fetchSubCategories from './api/fetchSubCategories';

export default function Categories() {
  
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [subCategories, setsubCategories] = useState([]);
  
  
  const categorieID = parseInt(useRouter().query.id);


  console.log(categorieID);
  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchSubCategories();
      setsubCategories(response.data);
      
      return response.data;
    };
    
    fetchData();
  }, []);



  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
  }

  function test() {
    console.log(subCategories[categorieID].subcategories);
    console.log(categorieID);
  }

  return (

 
    <div id="root">

      <Navigation clickCart={clickCart} clickSearch={clickSearch} />
      
      
      
      <SearchBar open = {openSearch} setOpen = {setOpenSearch}/>
      
      
      <ShoppingCart open = {openCart} setOpen = {setOpenCart}/>


      <button onClick={test} >test</button>

       

      
    </div>

    




  )
}

