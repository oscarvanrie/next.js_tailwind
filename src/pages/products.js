import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/ShoppingCart'
import Link from 'next/link';
import Products from '@/components/Products';
import fetchProducts from './api/fetchProducts';
//import ShoppingCart from './ShoppingCart';
import Product from '@/components/Product';



export default function Home() {

  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchData = async () => {      
      const response = await fetchProducts();
      setProducts(response.data);
      return response.data;
    };
    
    fetchData();
  }, []);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  


  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
  }


  

  return (

 
    <div id="root">

      <Navigation clickCart={clickCart} clickSearch={clickSearch} />
      
      
      
      <SearchBar open = {openSearch} setOpen = {setOpenSearch}/>
      
      
      <ShoppingCart open = {openCart} setOpen = {setOpenCart}/>


      <Product products={products} />

       

      
    </div>

    




  )
}

