import { shortenName } from "../helper/helper"
import { MdDeleteOutline } from "react-icons/md"

import styles from "./Basket.module.css"

function BasketCart({data , clickHandler}) {
    const { image , title , quantity} = data
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{shortenName(title)}</p>
        <div className={styles.actions}>
            {quantity == 1 && 
            <button onClick={()=> clickHandler("REMOVE_ITEM", data)}>
                <MdDeleteOutline />
            </button> }
            {quantity > 1 && 
            <button onClick={()=>clickHandler("DECREASE", data)}>-</button>}
            <span>{quantity}</span>
            <button onClick={()=>clickHandler("INCREASE", data)}>+</button>
            
        </div>
    </div>
  )
}

export default BasketCart