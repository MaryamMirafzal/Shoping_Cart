import { Link } from "react-router-dom"
import { PiShoppingCartSimpleBold } from "react-icons/pi"

import { useCart } from "../Context/CartContext"

import styles from "./Layout.module.css"

function Layout({children}) {
    const [state] = useCart()
  return (
    <div>
        <header className={styles.header}>
            <Link to="./products">BotoShop</Link>
            <Link to="./checkout">
             <div>
               <PiShoppingCartSimpleBold />
               {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
             </div>
            </Link>
        </header>
        {children}
        <footer className={styles.header}></footer>
    </div>
  )
}

export default Layout