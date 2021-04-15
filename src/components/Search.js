import React from 'react'
import { Box,  Center, Input, InputGroup, InputRightElement, IconButton} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
export default function Search() {
    return (
        <>
          <Center>
           <Box position='absolute' top={{
             sm:'9%',
             lg:'9%',
             xl:'8.3%'
           }} w='40%' zIndex={1}>
           <InputGroup>
                <Input type="search" placeholder="Search for Products..." bg='#CBD5E0' />
                <InputRightElement
                pointerEvents="none"
                children={<IconButton
                    colorScheme="yellow"
                    icon={<SearchIcon color='blue' />}
                  />}
                />
            </InputGroup>
           </Box>
          </Center>  
        </>
    )
}
