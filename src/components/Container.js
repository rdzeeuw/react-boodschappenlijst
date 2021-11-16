import React from "react"
import { useState } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"
import '../css/container.css';


function Container() {
    // state of grocery list
    const [ groceryItems, setGroceryItems ] = useState([
        { id: 1, title: "Appels" },
        { id: 2, title: "Melk" },
        { id: 3, title: "Eieren" }
    ])
    // state of shopping cart list    
    const [ shoppingCartItems, setShoppingCartItems ] = useState([])

    //state of inputfield
    const [groceryItem, setGroceryItem] = useState('')
    
    // handling the input field
    const handleChange = (e) => {
        const text = e.target.value
        const id = Math.floor(Math.random() * 1000) +1
        setGroceryItem({id: id, title: text})
    } 

    // when the form is being submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(groceryItem){
            setGroceryItems((groceryItems) => {
                return [...groceryItems, groceryItem]
            })
            setGroceryItem('')  
        } else {
            console.log('empty values')
        }
    }

    const handleClickGroceryItem = (id) => {
        // delete clicked item from grocery list
        // setGroceryItems(groceryItems.filter((item) => item.id !== id))
        
        // set clicked item in shoppingcart list
        const cartItem = groceryItems.filter((item) => item.id === id)
        console.log(cartItem)
        setShoppingCartItems(...shoppingCartItems, cartItem)
    }

    return (
        <div className="container">
            <GroceryList 
                name="grocery" 
                groceryItems={groceryItems} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                handleClickGroceryItem={handleClickGroceryItem}
             />
            <ShoppingCart 
                name="shopping"
                
                shoppingCartItems={ shoppingCartItems }/>
        </div>
    )
    
}

export default Container