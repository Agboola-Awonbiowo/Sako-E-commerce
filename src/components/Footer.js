import React from 'react'
import { Flex, Box, Stack, Image, Text, Button } from "@chakra-ui/react"
import { ImWhatsapp } from "react-icons/im"


export default function Footer() {
    return (
        <>
           <Stack>
               <Box d='flex' align='center' justifyContent='center' bg="blue.500" height={200}>
                    <Flex align='center'>
                        <Box  mr={{
                            sm:'20',
                            md:'40',
                            lg:'40'
                        }} mt={5}>
                        <Box w='50px' >
                            <Image src='https://d3hbe0kmbam4a5.cloudfront.net/assets/static/media/truck.e16738d2.svg' alt='' />
                            
                        </Box>
                        <Text p={2} color='#fff' fontSize={{
                    sm:"xs",
                    md:"14px",
                    lg:"16px"
                }}>Fast Delivery</Text>
                        </Box>
                        <Box>
                        <Box  boxSize='30px' mb={5} >
                            <Image src='https://d3hbe0kmbam4a5.cloudfront.net/assets/static/media/gold-badge.f83d7aec.svg' alt='' />
                        </Box>
                        <Text  color='#fff' fontSize={{
                    sm:"xs",
                    md:"14px",
                    lg:"16px"
                }}>Buyer Protection</Text>
                        </Box>
                        <Box ml={{
                            sm:'20',
                            md:'40',
                            lg:'40'
                        }}>
                        <Box boxSize='50px' mb={1}>
                            <Image src='https://www.svgrepo.com/show/215280/customer-service-24-hours.svg' alt='' />
                            
                        </Box>
                        <Text  color='#fff'fontSize={{
                    sm:"xs",
                    md:"14px",
                    lg:"16px"
                }}>Custormer Support</Text>
                        </Box>
                     </Flex>
               </Box>
                <Flex justify='center' bg="white" align='center' height={200}>
                    <Box textAlign='center'>
                        <Text pb={3} fontSize={{
                    sm:"xs",
                    md:"16px",
                    lg:"16px"
                }}>STORE DETAILS</Text>
                        <Text pb={3} fontSize={{
                    sm:"xs",
                    md:"16px",
                    lg:"16px"
                }}>Target</Text>
                        <Text pb={3} fontSize={{
                    sm:"xs",
                    md:"16px",
                    lg:"16px"
                }}>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</Text>
                        <Button leftIcon={<ImWhatsapp />} bg='#25D366' color='white' variant="solid" fontSize={{
                    sm:"xs",
                    md:"16px",
                    lg:"16px"
                }}>
                            Chat with us
                        </Button>
                    </Box>
                </Flex>
            </Stack> 
        </>
    )
}
