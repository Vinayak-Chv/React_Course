// This is to change update the value on time. Form elements are must to get and show the user input data
// It Trigger if every value changes

import React, {use, useState} from "react"

function MyComponent() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option>---Select an option---</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Mode: {payment}</p>

            <label>
                Pick up
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}></input>
            </label><br />
            <label>
                Delivery
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent