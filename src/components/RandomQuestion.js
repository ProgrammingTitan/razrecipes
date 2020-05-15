import React from 'react';


class RandomQuestion extends React.Component
{

    async componentDidMount(){
        await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "1f589ea56emsh3e02498a3481f5ep197f34jsnb9a42090f612"
            }
        })
        .then(async response => {
            console.log(response);
            const res = await response.json();
            console.log("here");
            console.log(res);
            console.log(res.answer);
        })
        .catch(err => {
            console.log(err);
        });

        
            }

    render(){
        return(
            <div>
                <p>hi</p>
            </div>

        )
    }




}

export default RandomQuestion