import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import {getItems, AddToCart} from '../action/itemActions';
import Product from '../components/Product';
import { Box } from '@chakra-ui/react';


const Products = (props) => {

    // const [state, setState] = useState(Data);


    useEffect(()=>{
   props.getItems();

    },[])


// add to cart
const AddToCart=(id)=>{
 props.AddToCart(id);
 
//  setTimeout(()=>{
//    props.bannerClose();
//  },2000)

}

// isInCart={product.isInCart}


    const {items} = props.item;
// console.log(items);

    return (
        
        <Box>
            {items.map(product=>  <Product key={product._id} data={product} AddToCart={()=>AddToCart(product._id)}  />)}
        </Box>
          
    )
}

const mapStateToProps = (state)=>({

item:state.item


})

export default connect(mapStateToProps, {getItems, AddToCart})(Products)
