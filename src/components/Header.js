import React from 'react'
import { Text, Flex, Box, Stack, HStack, Image, Divider, Circle, Heading, Badge, IconButton, useDisclosure} from "@chakra-ui/react"
import {Link} from 'react-router-dom';
import { Icon } from "@chakra-ui/react"
import { RiShoppingBagFill } from "react-icons/ri"
import { BiUser } from "react-icons/bi"
import { BiShoppingBag } from "react-icons/bi"
import {connect} from 'react-redux';
import { FaBars } from "react-icons/fa";
import Side from './Side';




const Header = (props) => {
    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()

    return (
        <>
            
        <HStack bg="blue.500" p={3.5} >
        <Box>
        <IconButton display={{
                base:'block',
                xl:'none'
            }} onClick={onOpen}  as={FaBars} bg='blue.500'/>
        </Box>
            <Stack w='78%' m='auto' color='white'>
            <Link to='/'> <Box  align='baseline' ml={20}>Store made with s<Icon as={RiShoppingBagFill} fontSize='14px' color="#fff" />ko</Box></Link>
                
            </Stack>
        </HStack>
        

        <Flex height='118px' justify='space-between' align='center' bg="#fff">
            <Box w={{
                base:'60%',
                md:'60%',
                lg:'35%'
            }} m={{
                base:'3%',
                md:'5%',
                lg:'auto'
            }} >

              <Stack isInline>
              <Circle bg='#EDF2F7' d='flex' height='70px'  w='70px' >
                    <Image w='35px'  color='' src="https://cdn.onlinewebfonts.com/svg/img_443525.png" alt="" />
                </Circle>
               <Box>
               <Heading px={3} fontSize={{
                   base:"sm",
                   md:"22px"
               }} pb={2} >
                    Target
                </Heading>
                
                <Text px={4} fontSize={{
                    base:"10px",
                    md:"14px",
                    lg:"16px"
                }}>
                    Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
                </Text>
               </Box>
              </Stack>
              
            </Box>
            
            <Flex justify='space-around' w='20%' m='auto'>
               
            <Link to='/checkout'><HStack>
                <Icon as={BiShoppingBag} fontSize='20px' color="#333" />
                
                <Badge position='relative' right={2} bottom={1} mb={2} bg='red' rounded='full' >{props.item.cart.length}</Badge>
                
                <Text position='relative' right={2} fontSize={{
                    base:"xs",
                    md:"14px",
                    lg:"16px"
                }}>Bag</Text>
                </HStack></Link>
                   
                <Stack isInline>
                   <Icon as={BiUser} fontSize={{base:'16px'}} color="#333" />
                <Box fontSize={{
                    base:"xs",
                    md:"14px",
                    lg:"16px"
                }}>Account</Box>
                </Stack>
            </Flex>
        </Flex>

          <Divider orientation="horizontal" />

          <Flex d={{
                  base:'none',
                  xl:'none'
              }} >
              <Side isDrawerOpen={isOpen} closeDrawer={onClose} />
            </Flex>
          
        </>
    )
}

const mapStateToProps=(state)=>({
    item:state.item
})

export default connect(mapStateToProps)(Header)

// const mapStateToProps=(state)=>({
//     item:state.item
// })

// {cartItems.length > 0 && (
//     <Badge colorScheme="green">{cartItems.length}0</Badge>
//  )}