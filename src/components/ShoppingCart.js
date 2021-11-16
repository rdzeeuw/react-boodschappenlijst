import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import '../css/shopping-cart.css'

import List from './List'

function ShoppingCart( {shoppingCartItems}) {
    
    return (
        <div className="list-section">
            <div className="subtitle">
                < AiOutlineShoppingCart className="icon" />
                <h2>Winkelwagen</h2>
            </div>
            <div>
                <a href="#"><p>Leeg de winkelwagen </p><AiFillDelete className="dlt-icon" /></a>
            </div>

            <ul>
               { shoppingCartItems.length > 0 ?  
               <List name="shopping" items={shoppingCartItems} /> : 
               "Uw winkelwagen is leeg..." }
            </ul>
        </div>
    )
}

export default ShoppingCart