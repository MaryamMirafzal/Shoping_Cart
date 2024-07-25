import { MagnifyingGlass } from "react-loader-spinner";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext"

import styles from "./ProductsPage.module.css"
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { filterProducts, searchProducts } from "../helper/helper";

function ProductsPage() {
    const products = useProducts()
    const [ displayed , setDisplayed ] = useState([])
    const [ search , setSearch ] = useState("")
    const [ query , setQuery ] = useState({})

    useEffect(()=>{
        setDisplayed(products)
    },[products])

    useEffect(()=>{
      console.log(query);
      let finalProducts = searchProducts(products , query.search)
      finalProducts = filterProducts(finalProducts , query.category)
      setDisplayed(finalProducts)
    },[query])

    
 

    const searchHandler = ()=>{
        setQuery((query)=>({...query, search}))
    }

    const categoryHandler = (event)=>{
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase()
      if ( tagName !== "LI") return;
      setQuery((query)=>({...query , category}))
    }

  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={searchHandler}><MagnifyingGlass
        width="30px" height="30px" /></button>
      </div>

      <div className={styles.container}>
        {!displayed.length && <Loader />}
        <div className={styles.products}>
            {
                displayed.map((p)=> (<Card key={p.id} data={p}/>))
            }
        </div>
        <div>
            <div>
                <FaListUl /><p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ProductsPage