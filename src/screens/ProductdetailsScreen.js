import React, { useEffect }  from 'react';
import {  Box, Image,  Stack, Text, Button, ButtonGroup,  IconButton} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useParams} from 'react-router-dom';

import {connect} from 'react-redux';
import {getItems, AddToCart, increaseItem, decreaseItem} from '../action/itemActions';


const ProductdetailsScreen = (props) => {

    useEffect(()=>{
        props.getItems();
    }, []); 
  
  const {id}=useParams();
  
  let detailsProduct = props.item.items.find(item=>item._id===parseInt(id));
    
    return (
        <>
         
              <Stack  mb={10}>
                
                        <Box w='80%'  d={{
                            sm:'block',
                            md:'flex'
                        }} m='0 auto' overflow='hidden' h='100%'>
                    <Carousel autoPlay showArrows={false} heigh='300px' showThumbs={false} interval={5000} transitionTime={2000} width='400px' >
                    
                            <Box p={10} ml={10}>
                            <Image src={detailsProduct.image1} alt='product' />
                            </Box>

                            <Box  p={10} ml={10}>
                            <Image src={detailsProduct.image1[1]} alt='product' />
                            </Box>
                            
                    </Carousel>

                            <Box w={{
                                sm:'100%',
                                md:'600px'
                            }} p={10} mt={{
                                xs:'0',
                                sm:'0',
                                md:'30'
                            }} textAlign={{
                                sm:'center'
                            }}>
                                <Box mb={5} >
                                    <Text>
                                   {detailsProduct.title}
                                    </Text>
                                </Box>                        
                                 
                                <Box>
                                    <Text mb={5}>
                                    {detailsProduct.details}
                                    </Text>
                                </Box>

                                <Box mb={5}>
                                     <Text>
                                         UGX {detailsProduct.price * detailsProduct.count}
                                     </Text>
                                 </Box>   

                                 <Stack isInline align='baseline' d={{
                                     sm:'flex'
                                 }} mb={10} justify={{
                                     sm:'center'
                                 }}>
                                    <IconButton onClick={()=>{
                        props.decreaseItem(detailsProduct._id);
                    }} icon={<MinusIcon />}    />
                                    <Box as="span"  fontSize="20px" fontWeight='bold' >
                                    {detailsProduct.count}
                                    </Box>
                                    <IconButton onClick={()=>{
                        props.increaseItem(detailsProduct._id);
                    }} icon={<AddIcon />} />
                                </Stack>

                                <Box>
                                    <ButtonGroup spacing="6">
                                        <Button  onClick={()=>props.AddToCart(detailsProduct._id)} variant="outline" colorScheme="blue">Add to Bag</Button>
                                        <Button colorScheme="yellow" color='blue' >Buy Now</Button>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                            
                        </Box>
                        
                     
                            <Box textAlign={{
                                sm:'center',
                                md:'center',
                                lg:'start'                            
                                }} pl={{
                                    xl:'14%'
                                }}>
                            <Text  fontWeight='bold'>Related Product</Text>
                            </Box>
                             <br />
                            
                        <Stack direction={["column", "row"]} spacing="73px" pl={2} pb={10}  overflow='hidden' d={{
                            sm:'flex',
                            md:'flex',
                            lg:'flex'
                        }} direction={{
                        sm:'column',
                        md:'column',
                        lg:'row',
                }} align={{sm:'center'}} justify={{
                            lg:'center'
                        }} >
                            <Box w="150px" h="150px" >
                                <Image src='https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg' alt='' /> 
                                <Box>IMac 2021 core </Box>
                                <Box>
                                    <Text isTruncated>
                                        intel corei9 processor 16gb ram and 512 ssd storage
                                    </Text>
                                </Box>
                            </Box>
                            <Box w="150px" h="150px">
                            <Image src='https://m.media-amazon.com/images/I/61arNOqL1kL._AC_UL320_.jpg' alt='' /> 
                            <Box>chair</Box>
                              <Box>
                                <Text isTruncated>Thoughtfully and precisely crafted, with a classic, stylish design. Available in a variety of colors.</Text>
                                </Box>
                            </Box>
                            {/* <Box w="150px" h="150px">
                               <Image src='https://m.media-amazon.com/images/I/81TsUGvYeoL._AC_UY218_.jpg' alt='' />
                               <Box>Wireless Keyboard and Mouse Combo</Box>
                               <Box>
                                   <Text isTruncated>
                                   LeadsaiL Compact Quiet Full Size <br/> Wireless Keyboard and Mouse Set 2.4G Ultra-Thin 
                                   </Text>
                               </Box>
                            </Box> */}

                            <Box w="150px" h="150px">
                                <Image src='https://m.media-amazon.com/images/I/61TyjqnmRdL._AC_UL320_.jpg' alt='' />
                                <Box>
                                Overbed
                                </Box>
                                <Box>
                                    <Text isTruncated>
                                    Vaunn Medical Adjustable Overbed Bedside Table With Wheels (Hospital and Home Use
                                    </Text>
                                </Box>
                            </Box>

                            <Box w="150px" h="150px" >
                                <Image src='https://m.media-amazon.com/images/I/71u4U5Idm2L._AC_UL320_.jpg' alt='' />
                                <Box>Sneekers</Box>
                                <Box>
                                    <Text isTruncated>
                                    STQ Walking Shoe
                                    </Text>
                                </Box>
                            </Box>

                            <Box w="150px" h="150px" >
                               <Image src='https://m.media-amazon.com/images/I/A1c0oQTtp1L._AC_UL320_.jpg' alt='' />
                               <Box>Regular-fit</Box>
                               <Box>
                                   <Text isTruncated>
                                   Amazon Essentials Men's Regular-fit Cotton Pique Polo Shirt
                                   </Text>
                               </Box>
                            </Box>
                      </Stack>
                  
                
                  
              </Stack>
              
        </>
    )
}

const mapStateToProps=(state)=>({
    item:state.item
  })

export default connect(mapStateToProps,{getItems,AddToCart,increaseItem, decreaseItem}) (ProductdetailsScreen);