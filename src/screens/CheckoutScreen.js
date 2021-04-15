import React from 'react'
import { Flex, Box,  Stack, Text, Button,  FormControl, FormLabel, Input, Checkbox } from '@chakra-ui/react';
import Bag from '../components/Bag';
import {connect} from 'react-redux';



const CheckoutScreen = (props) => {
    const {cart}=props.item;
    return (
        <Stack>

            {
                cart.length > 0 && (
                    <Flex justify='space-between'>
                    <Box w='50%'  d={{
                        base:'none',
                        md:'none',
                        lg:'block'
                    }}>
                    <Box my={8} textAlign='center' m='0 auto' w='50%'>
                         <form>
 
                             <FormControl>
                             <FormLabel>Email address</FormLabel>
                             <Input type='email' placeholder='Enter your email address' />
                             </FormControl>
 
                             <FormControl mt={4}>
                             <FormLabel>Number</FormLabel>
                             <Input type='Number' placeholder='Number' />
                             </FormControl>
 
                             <Stack isInline justifyContent='space-between' mt={4}>
                                 <Box>
                                 <Checkbox>Confirm</Checkbox>
                                 </Box>
                             </Stack>
 
                             <Button  width='full' colorScheme="yellow" mt={4}>Proceed</Button>
                         </form>
                     </Box>
                    </Box>
                    <Box w={{
                        base:'100%',
                        md: '80%',
                        lg: '40%'
                    }} m={{
                       sm:'0 auto'  
                    }} >
                    <Bag />
                    <Box textAlign='center' m='0 auto' w='80%' d={{
                        lg:'none'
                    }}>
                         <form>
                             <FormControl>
                             <FormLabel>Email address</FormLabel>
                             <Input type='email' placeholder='Enter your email address' />
                             </FormControl>
 
                             <FormControl mt={4}>
                             <FormLabel>Number</FormLabel>
                             <Input type='Number' placeholder='Enter your password' />
                             </FormControl>
 
                             <Stack isInline justifyContent='space-between' mt={4}>
                                 <Box>
                                 <Checkbox>Confirm</Checkbox>
                                 </Box>
                             </Stack>
 
                             <Button  width='full' colorScheme="yellow" mt={4}>Proceed</Button>
                         </form>
                     </Box>
                    </Box>
                </Flex>
                )
            }


             {
                 cart.length === 0 && (
                    <Flex justify='center' height='400px' align='center'>
                    <Box textAlign='center'>
                        <Text pb={3} fontSize='20px' fontWeight='bold'>It's empty here</Text>
                        <Text pb={3}>Start shopping to add items to your bag</Text>
                        <Button colorScheme="yellow" color='blue'>Back to homepage</Button>
                    </Box>
                </Flex>
                 ) 
             } 
               

        </Stack>
    )
}
const mapStateToProps=(state)=>({
    item:state.item
})

export default connect(mapStateToProps)(CheckoutScreen)