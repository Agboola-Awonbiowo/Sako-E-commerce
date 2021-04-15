import React from 'react';
import {  Button, Flex, Box, Stack,  Image, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../action/CartAction';



export default function Product(props) {
   
  const {data, AddToCart} = props;

    return (
        <>
          
              <Flex justify='space-between' w={{
                sm:'100%',
                md: '100%',
                lg: '600px'
              }} pb={5}>
              <Flex justify='space-between' >
                 <Stack key={data.title} borderRadius="lg" mr={10}  p={5}>
                     <Box w='100px'>
                        <Box >
                        <Link to={`/Productdetails/${data._id}`}><Image src={data.image1}  alt='' /></Link>
                        </Box>
                     </Box>
                 </Stack>
                     
                 <Flex justify='center' direction='column'>
                      <Spacer />
                      <Box pb={3}>{data.title}</Box>
                       
                     <Box>UGX {data.price}</Box>
                     <Spacer />
                 </Flex>
               </Flex>
                  
              <Flex align='flex-end' mb={5}>
              <Button onClick={AddToCart} size="sm"  variant="outline" colorScheme="blue" leftIcon={<AddIcon />} >
                    Add
               </Button>
              </Flex>
             </Flex>      
          
        </>
    )
}
