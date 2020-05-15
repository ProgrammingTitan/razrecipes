import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';

const RecipeCard = (props) => {
  const cardStyle = {
    maxHeight: 350,
    minHeight: 350,
    width : "100%"
  }
  const imgStyle = {
    display: "block",
    justifyContent: "center",
    width : "auto",
    margin: "auto",
    maxHeight: 250,
    maxWidth: "100%"
    // minHeight: 200,
}
  const divStyle = {
    // height : 200
  }

  return (
    <div>
      {/* <a style= {{textDecoration: "none"}}href={`/id/${props.data.id}`}> */}
      <LinkContainer to={`/id/${props.data.id}`}>
      <Card  style = {cardStyle}>
        <div style={divStyle}>
          
        <CardImg top style={imgStyle} display="block" src={`https://spoonacular.com/recipeImages/${props.data.image}`} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle><b>{props.data.title}</b></CardTitle>
          <CardText>Ready in {props.data.readyInMinutes} minutes</CardText>
          <CardText>
          <small className="text-muted">Servings: {props.data.servings}</small>
          </CardText>
        </CardBody>
      </Card>
      {/* </a> */}
      </LinkContainer>
    </div>
  );
};

export default RecipeCard;