import React, { useEffect } from 'react'
import { Flex, Box, HStack, Stack, Image,  Text, Divider,  Spacer, IconButton, Tag, Icon} from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../action/CartAction';
import { MinusIcon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {connect} from 'react-redux';
import {deleteItem, increaseItem, decreaseItem, getTotals, clearCart} from '../action/itemActions'

const Bag = (props) => {

    const {cart}=props.item;

    // const cart = useSelector((state) => state.cart);
    //   const { itemsCart } = cart;

    useEffect(()=>{
        props.getTotals();
    },[])
   
    return (
        <>
        
           <Box p={10} borderLeft={{
               sm:'none',
               md: 'none',
               lg:'2px solid #E2E8F0'
           }} h={{
               lg:'100%'
           }}>
           
           <Flex mb={10} justify='space-between'>
               <Box>
               <HStack  isInline >
              <Text letterSpacing='wide' fontSize='lg' fontWeight='extrabold'>Bag</Text>
              <Tag bg='#3182CE' variant='solid' fontSize='lg'>{props.item.cart.length}</Tag>
              </HStack>
               </Box>
                <Box cursor='pointer'>
                    <Text onClick={()=>{
                        props.clearCart(cart);
                        props.getTotals();
                    }} borderBottom='1px #000 solid'>Clear Bag</Text>
                </Box>
           </Flex>
           <Stack>
               {cart.map(cart => (
                 <Box key={cart._id} >
                       <Box d='flex' mb={5}>
                        <Flex>
                            <Box w='50px' pr={2}>
                                <Image src={cart.image1} alt={cart.title} />
                            </Box>
                            <Box>
                            <Box fontSize="xs" pb={1}>{cart.title}</Box>
                            <Box fontSize="xs">UGX {cart.price * cart.count}</Box>
                            </Box>
                       </Flex>
                       <Spacer />
                       
                       <Flex align='flex-end' direction='column' ml={5}>
                           <Box>
                           <Icon onClick={()=>{
                        props.deleteItem(cart._id);
                        props.getTotals();
                    }} as={DeleteIcon} mb={3} cursor='pointer' />
                           </Box>
                           <Stack isInline>
                                <IconButton onClick={()=>{
                        props.decreaseItem(cart._id);
                        props.getTotals();
                    }}  icon={<MinusIcon boxSize={2}/> }  size="xs" />
                                <Box as="span"  fontSize="15px" fontWeight='bold' >
                                {cart.count}
                                </Box>
                                <IconButton onClick={()=>{
                        props.increaseItem(cart._id);
                        props.getTotals();
                    }} icon={<AddIcon boxSize={2}/>} size="xs"/>
                            </Stack>
                       </Flex>
                       </Box>
                      
                 </Box>
                 
               ))}
           </Stack>

           {
               cart.length < 0 && (
                <Box>
                <Box mb={5}><Divider orientation="horizontal" /></Box>
          <Flex justify='space-between' mb={3}>
              <Box>
                  Subtotal
              </Box>
              <Box>
               UGX {props.item.total}
              </Box>
          </Flex>

          <Flex justify='space-between' borderBottom='1px dashed #E2E8F0' pb={3}>
              <Box>
                  Delivery
              </Box>
              <Box>
              {props.item.total>=90?<Text color='#48BB78'>free</Text>:`+${props.item.shipping}`} 
              </Box>
          </Flex>

          <Flex justify='space-between' mb={3} mt={3}>
              <Box>
                  Total
              </Box>
              <Box>
                UGX {props.item.total>=90?props.item.total:props.item.total + props.item.shipping}
              </Box>
          </Flex>
          <Box color='#CBD5E0' borderBottom='1px dashed #E2E8F0' pb={3} mb={3}>Inclusive of all taxes</Box>
          <Box color='#48BB78' fontSize='sm' fontWeight='bold'>Your about to save UGX 27.400 on this order</Box>
                </Box>
               )
           }
           
           </Box>
           
        </>
    )
}

const mapStateToProps=(state)=>({
    item:state.item
   
})
   
   
export default connect(mapStateToProps,{deleteItem, increaseItem, decreaseItem, getTotals, clearCart})(Bag);