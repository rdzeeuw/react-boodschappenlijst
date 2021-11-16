import '../css/list-item.css'

function ListItem({item, handleClickGroceryItem}) {

    return (
        <li 
            className="list-item"
            key={item.id} 
            value={item.title}
            id={item.id}
            onClick={() => handleClickGroceryItem(item.id)}
            >
                {item.title}</li>
    )
       
}

export default ListItem