import { MagnifyingGlass } from "react-loader-spinner";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext"

import styles from "./ProductsPage.module.css"
import { useState } from "react";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
    const products = useProducts()
    console.log(products);
    const [ search , setSearch ] = useState("")
    const searchHandler = ()=>{
        console.log('searching');
    }
    const categoryHandler = (event)=>{
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase()
      if ( tagName !== "LI") return;
      console.log(category);
    }
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={searchHandler}><MagnifyingGlass
        width="30px" height="30px" /></button>
      </div>

      <div className={styles.container}>
        {!products.length && <Loader />}
        <div className={styles.products}>
            {
                products.map((p)=> (<Card key={p.id} data={p}/>))
            }
        </div>
        <div>
            <div>
                <FaListUl /><p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electroincs</li>
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