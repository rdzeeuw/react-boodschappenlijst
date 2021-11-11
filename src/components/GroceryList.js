import List from './List'
import InputField from './InputField'

function GroceryList({ groceryItems }) {

    return (
        <div className="grocery-list">
            <InputField />
            <ul>
                <List 
                    name="grocery" 
                    groceryItems={ groceryItems } />
            </ul>
        </div>
    )
}

export default GroceryList