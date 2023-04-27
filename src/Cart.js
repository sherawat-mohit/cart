import React from 'react';
import CartItem  from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
            {  
                id :1,      
                price:14999,
                title:'SmartPhone',
                qty:8,
                img:''
            },
            {
                id :2,
                price:49999,
                title:'Laptop',
                qty:6,
                img:''
            },
            {    
                id :3,
                price:4999,
                title:'Watch',
                qty:12,
                img:''
            }
            ]
        }
    }

    handleIncreaseQuantity = (product)=>{
        console.log("plese increase quantity", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        
        products[index].qty += 1;

        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity = (product)=>{
        console.log("please decrease quantity", product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return 0;
        }
        products[index].qty -= 1;

        this.setState({
            products:products
        })
    }

    handleDeleteProduct = (id) =>{
        console.log("DeleteProduct");
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products : items
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return(
                        <CartItem product={product} key = {product.id} onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQuantity = {this.handleDecreaseQuantity} onDeleteProduct={this.handleDeleteProduct}/>
                    )
                })}
            </div>
        )
    }
}

export default Cart;