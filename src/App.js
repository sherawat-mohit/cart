import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products:[
        {  
            id :1,      
            price:14999,
            title:'SmartPhone',
            qty:8,
            image:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
        },
        {
            id :2,
            price:49999,
            title:'Laptop',
            qty:6,
            image:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80'
        },
        {    
            id :3,
            price:4999,
            title:'Watch',
            qty:12,
            image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal = 0;
  products.forEach((product)=>{
    cartTotal = cartTotal + (product.qty*product.price)
  })
  return cartTotal;
}
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
        count={this.getCartCount()}/>
        <Cart
        products= {products}
        onIncreaseQuantity={this.handleIncreaseQuantity} 
        onDecreaseQuantity = {this.handleDecreaseQuantity} 
        onDeleteProduct={this.handleDeleteProduct}/>
        <div>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;