import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/ShoppingCart'
import Link from 'next/link';
import Products from '@/components/Products';
//import ShoppingCart from './ShoppingCart';

export default function Home() {

  
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

      <Products />
      
       

      
    </div>

    




  )
}

