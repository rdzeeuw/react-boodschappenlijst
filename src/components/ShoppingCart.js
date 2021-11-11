import List from './List'

function ShoppingCart( {shoppingCartItems}) {
    
    return (
        <div className="shopping-cart">
            <ul>
                <List 
                    name="shopping" 
                    shoppingCartItems={shoppingCartItems} />
            </ul>
        </div>
    )
}

export default ShoppingCart