
import ListItem from "./ListItem"

function List(props) {
   
    const groceryList = props.groceryItems.map(item => {
        return <ListItem key={item.id} item={item} />
    })

    const shoppingCart = props.shoppingCartItems.map(item => {
        return <ListItem key={item.id} item={item} />
    })



    return (
        <div>
            { props.name === "grocery" ? <ul> { groceryList } </ul> : { shoppingCart } }
        </div>
    )
}


export default List