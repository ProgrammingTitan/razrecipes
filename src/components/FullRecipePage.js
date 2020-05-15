import React, {Checkbox} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge} from 'reactstrap';
import NavBar from './NavBar';
import { AiOutlineLike } from 'react-icons/ai';
import { GiHealthIncrease } from 'react-icons/gi';
import { FaPencilAlt } from 'react-icons/fa';
import StarRatingComponent from 'react-star-rating-component';
import AdSense from 'react-adsense';



class FullRecipePage extends React.Component{

    state = {
        searchString : this.props.match.match.params.id,
        ingredients: [{}],
        gotData: false,
        recipe: {},
        recipeSummary: ''
    } 

    

    async componentDidMount(){
        await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.state.searchString}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "1f589ea56emsh3e02498a3481f5ep197f34jsnb9a42090f612"
            }
        })
        .then(async response => {
            console.log(response);
            const sum = await response.json();
            console.log(sum);
            this.setState({
                recipe : sum,
                gotData: true,
                recipeSummary: sum.summary
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
      }
    
      handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
      }
    
    
      createCheckboxes = () => (
        this.state.ingredients.map((child,index) =>
        {
            return (<Checkbox
                label={child.label}
                handleCheckboxChange={this.toggleCheckbox}
                key={child.label}
            />)
        })
      )

    render(){

        const imgStyles = {
            maxWidth : "100%"
        }

        return (
            <div>
            <NavBar />
            <Container>
            <Row>
                <Col >
        <Container fluid>
        <h2 className="display-3">{this.state.recipe.title}</h2>
        <div>
        {this.state.recipe.vegetarian && <Badge >Vegetarian</Badge> }
        {this.state.recipe.vegan &&<Badge >Vegan</Badge>  } 
        {this.state.recipe.glutenFree &&<Badge >Gluten Free</Badge> }
        {this.state.recipe.veryHealty &&<Badge >Very Healthy</Badge> }
        {this.state.recipe.cheap &&<Badge >Cheap</Badge> }
        {this.state.recipe.veryPopular &&<Badge >Popular</Badge> }
        <p><AiOutlineLike />{this.state.recipe.aggregateLikes} <GiHealthIncrease />{this.state.recipe.healthScore} <FaPencilAlt /> {this.state.recipe.creditsText}</p>
        <StarRatingComponent 
                    name="rate2" 
                    editing={false}
                    //renderStarIcon={() => <span></span>}
                    starCount={5}
                    value={this.state.recipe.spoonacularScore /20 }
                    />
        </div>
        <div>
        {/* {this.state.recipeSummary} */}
        </div>
        <Row>
                <Col xs="6">
                    <img src={this.state.recipe.image} alt={this.state.recipe.title} style={imgStyles}/>
                </Col>
                <Col xs="6">
                    <div>
                        <h4>Ready in: {this.state.recipe.readyInMinutes} minutes</h4>
                        <h4>Serves: {this.state.recipe.servings}</h4>
                    </div>
                    
                </Col>
            
            </Row>
        </Container>
                </Col>
            </Row>
            <Row xs="2">
                
                <Col>

            {/* <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form> */}

            { this.state.gotData && this.state.recipe.extendedIngredients.map((child,index) =>
        {
            return (
                
                <div>
                <label>
                <input type="checkbox"
                />
                {child.name} ( {child.amount} {child.amount.unit} )
               </label>
               </div>)
        })}
            </Col>
            <Col>
            <AdSense.Google
  client='ca-pub-7292810486004926'
  slot='7806394673'
/>
                </Col>
            </Row>
            

            <Row>
                <Col>
                <ListGroup >
                { this.state.gotData && this.state.recipe.analyzedInstructions["0"].steps.map((child,index) =>
        {
            return (
                
               <ListGroupItem  tag="button" action>
                {index + 1}. {child.step} 
                </ListGroupItem>
            )
        })}
                </ListGroup>
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
}

export default FullRecipePage;