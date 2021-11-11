import React from "react"
import { useState } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"


function Container() {
    const [ groceryItems, setGroceryItems ] = useState([
        { id: 1, title: "Appels" },
        { id: 2, title: "Melk" },
        { id: 3, title: "Eieren" },
        { id: 4, title: "test" }
    ])
            
    const [ shoppingCartItems, setShoppingCartItems ] = useState([
        { id: 1, title: "Appels" },
        { id: 2, title: "Melk" }
    ])

    
    return (
        <div>
            <GroceryList name="grocery" groceryItems={ groceryItems } />
            <ShoppingCart name="shopping" shoppingCartItems={ shoppingCartItems }/>
        </div>
    )
    
}

export default Container