import React from 'react';
import RecipeCard from './RecipeCard';
import {Container, Col, Row} from 'reactstrap';
import NavBar from './NavBar';
import FoodCategories from './FoodCategories';

class SearchRecipe extends React.Component
{

    state = {
        searchString : this.props.match.match.params.id,
        data: [{}],
        gotData: false,
    } 

    async componentDidMount(){
        await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=20&query=${this.state.searchString}`, 
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "1f589ea56emsh3e02498a3481f5ep197f34jsnb9a42090f612"
                }
        })
        .then(async response => {
            console.log(response);
            const res = await response.json();
            console.log(res);
            this.setState({
                data: res.results,
                gotData: true,
            });
            console.log(this.state.data);
        })
        .catch(err => {
            console.log(err);
        });

        
    }

    render(){
        return(
            <div>
                <NavBar />
                <Container>
                <FoodCategories />
                <Row>
                {
                        this.state.gotData && this.state.data.map((child, index) => {
                            // const { data } = child;
                            return (
                                <Col xs="6" md="3" lg="3" key ={child.id}>
                                    <RecipeCard
                                    key = {child.id}
                                    data = {child}
                                    />
                                </Col>
                                    
                            );
                        })
                }
                </Row>
                </Container>
            </div>

        )
    }




}

export default SearchRecipe