import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const tagToText = (node) => {
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}

const shortenText = (text) => {
    for(let i=0; i<text.length; i++) {
        if(text.slice(i, i+19) === 'Continue reading on') {
            return i
        }
    }
}

function BlogPostCard(props) {
    return(
        <Slide>
        <div className="blog-slide">
            {props.thumbnail && <a href={props.link} target="_blank"><img src={props.thumbnail} alt={props.title} style={{height: 380, width: 'auto', marginBottom: '2%'}}/></a>}
            <div>
                <a href={props.link} target="_blank">{props.title}</a>
                <p>{tagToText(props.content).slice(0, shortenText(tagToText(props.content)))}</p>
            </div>
        </div>

        </Slide>
    )
}

export default BlogPostCard