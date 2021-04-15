import React from 'react'
import Side from '../components/Side';
import { Flex, Box, Badge, HStack, Text, Center, } from '@chakra-ui/react';
import Bag from '../components/Bag';
import Products from '../components/Products'
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts } from '../action/productsAction';
// import data from '../../public/data';

export default function HomeScreen() {



    // const dispatch = useDispatch();
    // const productList = useSelector((state) => state.productList);
    // const { loading, error, products } = productList;

    // console.log(productList);

    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch])

    
    // const [state, setState] = useState(Data);


    
   
    return (
        <>

        <Box d='flex' justifyContent='space-between' w='100%' overflow='hidden'>
            <Flex w='30%' justify='flex-end' d={{
                base:"none",
                md: "none",
                lg: "none",
                xl: "flex"
            }}>
                <Side/>
            </Flex>
            
            <Center  p={10} m={{
                base:'0 auto',
                md:'0 auto',
            }}>
              
                <Box>
                <HStack isInline align='baseline' mb={10}>
              <Text letterSpacing='wide' fontSize='lg'>Electronics</Text>
              <Badge bg='#3182CE' variant='solid' fontSize='lg'>12</Badge>
              </HStack>

            <Box d={{
                base:"block",
                md: "block",
                lg:"flex"
            }} >               
               <Products />
            </Box>
                
                </Box>
            </Center>
            <Box w='30%' d={{
                sm:"none",
                md: "none",
                lg:"none",
                xl: "block"
            }}>
                <Bag />
            </Box>
        </Box>
        
        </>
    )
}
