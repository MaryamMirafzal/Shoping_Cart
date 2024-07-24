import Card from "../Components/Card";
import { useProducts } from "../Context/ProductContext"

import styles from "./ProductsPage.module.css"

function ProductsPage() {
    const products = useProducts()
  return (
    <div className={styles.container}>
        {!products.length && <p>Loading...</p>}
        <div className={styles.products}>
            {
                products.map((p)=> (<Card key={p.id} data={p}/>))
            }
        </div>
        <div>SideBare</div>
    </div>
  )
}

export default ProductsPage