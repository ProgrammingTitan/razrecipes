import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const OverlayCard = (props) => {
    const arrayCat = [ 'Breakfast' , 'Lunch', 'Dinner' , 'Dessert' , 'Snacks' ,'Drinks']
  return (
    <div>
        <a href={`/Search/${arrayCat[props.index]}`}>
      <Card inverse>
        <CardImg width="100%" src={props.item.image} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{arrayCat[props.index]}</CardTitle>
        </CardImgOverlay>
      </Card>
      </a>
    </div>
  );
};

export default OverlayCard;