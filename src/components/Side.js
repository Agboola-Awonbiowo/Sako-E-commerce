import React from 'react'
import { Flex, Box, Checkbox, Stack, Text, Divider, DrawerBody, DrawerContent, DrawerOverlay, Drawer, DrawerCloseButton,} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Side({isDrawerOpen, closeDrawer}) {
   
    return (
        <> 
          
            <Flex mt={5} d={{
                sm:'none',
                md:'none',
                lg:'none',
                xl:'flex'
            }}>
                <Flex direction='column'>
                    <Stack d='flex' direction='row' mb={2} w='100%' color='blue.500' bgGradient="linear(to-r, blue.100, blue.300)" >
                        <Text>Electronic (12)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Face Mask (3)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Fresh Food (8)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Grocery (6)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Home (24)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Kids (9)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>
                    <Box color='blue.500'>
                        View All Categories <ChevronRightIcon />
                    </Box>
                </Flex>
                
            </Flex>
            <Box><Divider orientation="vertical" /></Box>


            <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={closeDrawer}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
           

            <DrawerBody>
               <Flex justify='center' mt='10%'>
               <Flex direction='column'>
                    <Stack d='flex' direction='row' mb={2} w='100%' color='blue.500' bgGradient="linear(to-r, blue.100, blue.300)" >
                        <Text>Electronic (12)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Face Mask (3)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Fresh Food (8)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Grocery (6)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Home (24)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>

                    <Stack d='flex' direction='row' pb={2} w='100%'>
                        <Text>Kids (9)</Text>
                        <Checkbox size="lg" colorScheme="blue" />
                    </Stack>
                    <Box color='blue.500'>
                        View All Categories <ChevronRightIcon />
                    </Box>
                </Flex>
               </Flex>
            </DrawerBody>

            
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </>
    )
}
