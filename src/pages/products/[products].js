



import { useState, useEffect } from 'react';
//import SearchBar from './SearchBar.js';
import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import ShoppingCart from '@/components/ShoppingCart'
import {useRouter} from 'next/router'
import fetchSubCategories from '../api/fetchSubCategories';
import SubMenu from '@/components/subMenu';

export default function Category() {
  
  const router = useRouter()
  const categorieID = parseInt(router.query.category)
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const [subCategories, setsubCategories] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  
  
  

  useEffect(() => {
    const fetchData = async () => {      
      try {
        const response = await fetchSubCategories();
        const subcategories = response.data[categorieID]?.subcategories;
        setSelectedName(response.data[categorieID]?.description);
        if (subcategories) {
          
          setsubCategories('');
          setsubCategories(subcategories);
        } else {
          console.log(`Invalid categorieID: ${categorieID}`);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
      
    fetchData();
  }, [categorieID]);



  function clickSearch() {
    setOpenSearch(!openSearch);
  }
  function clickCart() {
    setOpenCart(!openCart);
    console.log(subCategories);
    
  }




  return (

 
    <div id="root">

      <Navigation clickCart={clickCart} clickSearch={clickSearch} />
      
      
      
      <SearchBar open = {openSearch} setOpen = {setOpenSearch}/>
      
      
      <ShoppingCart open = {openCart} setOpen = {setOpenCart}/>

      <SubMenu subCategorieArray={subCategories} categorieName={selectedName} /> 

      
       

      
    </div>

    




  )
}
