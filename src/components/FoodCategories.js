import React from 'react';
import OverlayCard from './OverlayCard';
import {Container, Row, Col} from 'reactstrap';


class FoodCategories extends React.Component
{

    state = {
        recipes : [],
        gotData : false
    }

    async componentDidMount(){

        const arrayCat = [ 'breakfast' , 'lunch', 'dinner' , 'dessert' , 'snacks' ,'drinks' ,'']

        arrayCat.map(async (child,index) => {
            await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=${child}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "1f589ea56emsh3e02498a3481f5ep197f34jsnb9a42090f612"
            }
        })
        .then(async response => {
            const res = await response.json();
            this.setState({
                gotData: true,
            });
            console.log(child);
            console.log(res.recipes["0"]);
            this.state.recipes.push(res.recipes["0"]);
        })
        .catch(err => {
            console.log(err);
        });

        })
        

        
            }

    render(){
        return(
            <div>
                <Container >
                    <Row >
                        {console.log(this.state.recipes)}
                {
                        this.state.gotData &&

                        this.state.recipes.map((child,index) =>
                        {
                            return (
                                <Col xs="12" md="2" lg="2" key ={index}>
                                <OverlayCard
                                    item = {child}
                                    index = {index}
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

export default FoodCategories