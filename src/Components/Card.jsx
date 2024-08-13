import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { Link } from "react-router-dom";
import { productQuantity, shortenName} from "../helper/helper"

import styles from "./Card.module.css"
import { useCart } from "../Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({data}) {
    // eslint-disable-next-line react/prop-types
    const { id , image , title , price } = data;

    const [state , dispatch] = useCart()
    const quantity = productQuantity(state, id)
    console.log(quantity);
    const clickHandler = (type)=>{
      dispatch({type, payload:data })
    }
  return (
    <div className={styles.card}>
        <img src={image} alt={title} style={{width:"150px"}} />
        <h3>{shortenName(title)}</h3>
        <p>$ {price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails /></Link>
            <div>
              {
                quantity >1 && <button onClick={()=> clickHandler("DECREASE")}>-</button>
              }
              {
                quantity == 1 && <button onClick={()=> clickHandler("REMOVE_ITEM")}><MdDeleteOutline /></button>
              }
              {!!quantity && <span>{quantity}</span>}
              {
                quantity == 0 ?
                <button onClick={()=> clickHandler("Add_ITEM")}><TbShoppingBagCheck /></button>:
                <button onClick={()=> clickHandler("INCREASE")}>+</button>
              }
            
            </div>
        </div>
    </div>
  )
}

export default Card