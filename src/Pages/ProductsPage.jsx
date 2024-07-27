import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext"

import styles from "./ProductsPage.module.css"
import { useEffect, useState } from "react";
import {  filterProducts, searchProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import Sidebar from "../Components/Sidebar";

function ProductsPage() {
    const products = useProducts()
    const [ displayed , setDisplayed ] = useState([])
    const [ search , setSearch ] = useState("")
    const [ query , setQuery ] = useState({})
    const [ searchParams , setSearchParams] = useSearchParams()

    useEffect(()=>{
        setDisplayed(products)
    },[products])

    useEffect(()=>{
      setSearchParams(query)
      let finalProducts = searchProducts(products , query.search)
      finalProducts = filterProducts(finalProducts , query.category)
      setDisplayed(finalProducts)
    },[query])

   

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        {!displayed.length && <Loader />}
        <div className={styles.products}>
            {
                displayed.map((p)=> (<Card key={p.id} data={p}/>))
            }
        </div>
        <Sidebar setQuery={setQuery} query={query} />
    </div>
    </>
  )
}

export default ProductsPage