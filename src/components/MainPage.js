import React from 'react';
import SearchButton from './SearchButton';
import NavBar from './NavBar';
import RandomMeals from './RandomMeals';
import FoodCategories from './FoodCategories';
import {Container} from 'reactstrap';

class MainPage extends React.Component{



    render(){
        return(
        <div>
            
            <NavBar />
            <Container >
            <SearchButton />
            <RandomMeals />
            <FoodCategories />
            {/* <Carousel /> */}
            </Container>
        </div>
        );
    }
}

export default MainPage;