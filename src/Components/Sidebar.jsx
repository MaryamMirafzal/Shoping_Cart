import { createQueryObject } from "../helper/helper"
import { FaListUl } from "react-icons/fa";

import styles from "./Sidebar.module.css"

function Sidebar({setQuery , query}) {
    const categoryHandler = (event)=>{
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase()
      if ( tagName !== "LI") return;
      setQuery((query)=>(createQueryObject(query , { category })))
    }
  return (
    <div className={styles.sidebar}>
        <div>
          <FaListUl /><p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
            <li>All</li>
            <li className={query.category =="electronics" ? styles.selected : null}>Electronics</li>
            <li className={query.category =="jewelery" ? styles.selected : null}>Jewelery</li>
            <li className={query.category =="men's clothing" ? styles.selected : null}>Men's Clothing</li>
            <li className={query.category =="women's clothing" ? styles.selected : null}>Women's Clothing</li>
        </ul>
    </div>
  )
}

export default Sidebar