import { useState, useEffect } from "react"

export default function Cart() {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // Increase quantity
    function increase(product) {
        product.quantity += 1
        setCart([...cart]) // Create new array so React re-renders
    }

    // Decrease quantity
    function decrease(product) {
        if (product.quantity > 1) {
            product.quantity -= 1
            setCart([...cart])
        }
    }

    // Remove product
    function remove(id) {
        const updated = cart.filter(product => product.id !== id)
        setCart(updated)
    }

    // Calculate subtotal
    const subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0)

    

    return (
        <section className="cart-page">
            <div className="checkout-steps__background"></div>

            <div className="checkout-steps">
                <div className="step active">
                    <img src="/images/icons/cart.png" />
                </div>
                <div className="step">
                    <img src="/images/icons/card.png" />
                </div>
                <div className="step">
                    <img src="/images/icons/receipt.png" />
                </div>
            </div>

            <h1>Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(product => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} />
                        <div className="cart-info">
                            <h4>{product.name}</h4>
                        </div>
                        <div className="cart-quantity">
                            <button onClick={() => decrease(product)}>−</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => increase(product)}>+</button>
                        </div>
                        <p className="cart-price">£ {product.price}</p>
                        <button className="cart-remove" onClick={() => remove(product.id)}>×</button>
                    </div>
                ))
            )}

            <div className="cart-summary">
                <p>Sub total <strong>£{subtotal}</strong></p>
                <button className="checkout-btn">Go to payment</button>
            </div>
        </section>
    )
}
