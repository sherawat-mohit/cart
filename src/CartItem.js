import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:14999,
            title:'SmartPhone',
            qty:1,
            img:''
        }
    }
    increaseQuantity = () =>{
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });
    }

    decreaseQuantity=()=>{
        const {qty} = this.state;
        if(qty ===0){
            return 0;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    }
    render(){
        const{price,title,qty} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>
                        {title}
                    </div>
                    <div style={{color:"#777"}}>
                        Rs {price}
                    </div>
                    <div style={{color:"#777"}}>
                        Qty : {qty}
                    </div>
                    <div className='cart-item-actions'>
                        {/* buttons */}
                        <img alt="increase" className='action-icons' src="https://www.svgrepo.com/show/512678/plus-circle-1427.svg" onClick={this.increaseQuantity}/>
                        <img alt="decrease" className='action-icons' src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" onClick={this.decreaseQuantity}/>
                        <img alt="delete" className='action-icons' src="https://www.svgrepo.com/show/511178/trash-full.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:10,
        backgroundColor:"#777"
    }
} 

export default CartItem;