import { AiOutlineUnorderedList } from "react-icons/ai";
import List from './List'
import Form from './Form'
import '../css/grocery-list.css';

function GroceryList({ groceryItems, handleChange, handleSubmit, handleClickGroceryItem}) {

    

    return (
        <div className="list-section">
            <div className="subtitle">
                <AiOutlineUnorderedList className="icon"/>
                <h2>Boodschappenlijst</h2>
            </div>
                <Form 
                    className="input-field"
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
            <ul>
                { groceryItems.length > 0 ? <List 
                    name="grocery" 
                    items={ groceryItems } 
                    handleClickGroceryItem={handleClickGroceryItem}
                    /> : "Er staan nog geen boodschappen op het lijstje" }
            </ul>
        </div>
    )
}

export default GroceryList