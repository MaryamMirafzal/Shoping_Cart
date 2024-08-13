import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa"
import { BsPatchCheck } from "react-icons/bs"

import styles from "./BasketSideBar.module.css"

function BasketSideBar({state, clickHandler}) {
  return (
    <div className={styles.sidebar}>
        <div>
            <TbChecklist />
            <p>Total: </p>
            <span>{state.total}</span>
        </div>
        <div>
            <FaHashtag />
            <p>Quantity: </p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
            <BsPatchCheck />
            <p>Status: </p>
            <span>{!status.checkout && <p>Pending...</p>}</span>
        </div>
        <button onClick={()=> clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  )
}

export default BasketSideBar