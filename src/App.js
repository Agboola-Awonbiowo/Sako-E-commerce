import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Search from './components/Search';
import { Flex, Spacer, Box, Stack } from "@chakra-ui/react";
// import { BiCheckboxChecked } from 'react-icons/bi';
import ProductdetailsScreen from './screens/ProductdetailsScreen';


function App() {  
  return (
    <Router>
      
     <Flex direction="column"  height="100%">
     <Switch>
     <Fragment>
      <Stack flex="1">
        <Box>
          <Header />
        </Box>
        <Spacer />
        <Route path="/checkout" > 
          <CheckoutScreen />
        </Route> 
        <Box>
          <Route path="/Productdetails/:id">
            <ProductdetailsScreen />
            <Spacer />
           <Footer />
          </Route>
          <Route path="/"  exact>
              <Search />
              <HomeScreen />
              <Spacer />
           <Footer />
          </Route>
         
        </Box>
      </Stack>
      </Fragment>
      </Switch>
     </Flex>
     
    </Router>
  );
}


export default App;
