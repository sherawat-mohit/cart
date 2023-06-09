import React from 'react'

const CartItem = (props) => {
    const { title, price, qty} = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className='cart-item'> 
            <div className='left-block'>
                <img style={styles.image} src={product.image}/>
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>
                    {title}
                </div>
                <div style={{ color: "#777" }}>
                    Rs {price}
                </div>
                <div style={{ color: "#777" }}>
                    Qty : {qty}
                </div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img alt="increase" className='action-icons' src="https://www.svgrepo.com/show/512678/plus-circle-1427.svg" onClick={() => onIncreaseQuantity(product)} />
                    <img alt="decrease" className='action-icons' src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" onClick={() => onDecreaseQuantity(product)} />
                    <img alt="delete" className='action-icons' src="https://www.svgrepo.com/show/511178/trash-full.svg" onClick={() => onDeleteProduct(product.id)} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: "auto",
        borderRadius: 10,
        backgroundColor: "#777"
    }
}

export default CartItem;