import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Progress
} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';


const imgStyle = {
    display: "flex",
    justifyContent: "center"
}
const Car = (props) => {
  const items = props.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        
        <div style = {imgStyle}>
        <LinkContainer to={`/id/${item.id}`}>
        <img src={item.image} alt={item.title} />
        </LinkContainer>
        </div>
        <CarouselCaption captionText={item.dishTypes["0"]} captionHeader={item.title} />
        
        <Progress 
          bar animated color="success" value={item.spoonacularScore}>Spoonacular Score {item.spoonacularScore}
        </Progress>
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Car;
