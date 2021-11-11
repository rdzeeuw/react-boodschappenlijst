
function ListItem(props) {
    console.log(props)
    return (
        <li 
            className="list-item"
            key={props.item.id} 
            value={props.item.title}>
                {props.item.title}</li>
    )
       
}

export default ListItem