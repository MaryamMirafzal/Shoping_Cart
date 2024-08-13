import BasketCart from "../Components/BasketCart"
import BasketSideBar from "../Components/BasketSideBar"
import { useCart } from "../Context/CartContext"

import styles from "./CheckoutPage.module.css"

function CheckoutPage() {

  const [ state , dispatch ] = useCart()
  const clickHandler = (type , payload ) => dispatch({type , payload})
  if(!state.itemsCounter){
    return(
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
      {
       state.selectedItems.map(product => <BasketCart  key={product.id} data={product} clickHandler={clickHandler}/>)
      }

      </div>
    </div>
  )
}

export default CheckoutPage