import React from 'react';
import CartItem  from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
            {        
                price:14999,
                title:'SmartPhone',
                qty:8,
                img:''
            },
            {
                price:49999,
                title:'Laptop',
                qty:6,
                img:''
            },
            {    
                price:4999,
                title:'Watch',
                qty:12,
                img:''
            }
            ]
        }
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return(
                        <CartItem product={product} key = {product.id}/>
                    )
                })}
            </div>
        )
    }
}

export default Cart;