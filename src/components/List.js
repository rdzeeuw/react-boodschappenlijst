import ListItem from "./ListItem"
import '../css/list.css'

function List({items, handleClickGroceryItem}) {

    const listItems = items.map(item => {
        return <ListItem 
                    key={item.id} 
                    item={item} 
                    handleClickGroceryItem={handleClickGroceryItem}
                    />
    })

    return (
        <div>
           <ul> { listItems } </ul>
        </div>
    )
}


export default List