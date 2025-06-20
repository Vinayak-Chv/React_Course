import propTypes from "prop-types"

function List(props) {

// By Order
// fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical Order
// fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Order
// fruits.sort((a, b) => a.calories - b.calories)  // Ordered by Calories
// fruits.sort((a, b) => b.calories - a.calories)   //Reverse Order by Calories

// Filter
// const lowCal = fruits.filter(fruit => fruit.calories < 100)
// const highCal = fruits.filter(fruit => fruit.calories > 100)

    const itemList = props.items
    const category = props.category

    const listItems = itemList.map(item => <li key={item.id}>
                                {item.name}: 
                                &nbsp;<b>{item.calories}</b></li>)

    return(<>
            <h3 className="category">{category}</h3>
            <ol className="list">{listItems}</ol>
            </>)
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({  id: propTypes.number, 
                                                name: propTypes.string,
                                                calories: propTypes.number
    }))
}

export default List