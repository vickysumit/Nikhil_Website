import React, { useState } from 'react';
import { items } from "../shared/dishes";
import "../css/styles.css";
import pizza from './pizza.jpg';

import {   Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from "reactstrap";

    const Example = (props) => {
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
              <img src={item.src} alt={item.altText} width="300" height="300"  id="imagec" className=""/>
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
      
        return (
          <Carousel 
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators className="" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className="text-primary" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
      }

function Home(props){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className=" col bg-secondary">

                        <Example />

                    </div>
                    
                </div>
                <div className="row">
                  <img src={pizza} alt="pizza" />
                </div>
            </div>
        </div>
    )
}

export default Home;