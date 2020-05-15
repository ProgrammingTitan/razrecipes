import React from 'react';
import Car from './Carousel';


class RandomQuestion extends React.Component
{

    state = {
        recipes : [{}],
        gotData : false
    }

    async componentDidMount(){
        await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5", {
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
            console.log(res.recipes);

            this.setState({
                recipes: res.recipes,
                gotData: true,
            });
        })
        .catch(err => {
            console.log(err);
        });

        
            }

    render(){
        return(
            <div>
                {
                        this.state.gotData &&
                         <Car 
                            items = {this.state.recipes} 
                            
                        /> 
                         
                }
            </div>

        )
    }




}

export default RandomQuestion