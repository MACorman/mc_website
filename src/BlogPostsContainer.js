import React from 'react'
import BlogPostCard from './BlogPostCard'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


class BlogPostContainer extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@madelinecorman')
        .then((res) => res.json())
        .then(posts => this.setState({posts: posts.items}))
    }

    render() {
        return (
            <>
                <h2>BLOG</h2>
                <hr className='fancy-line'/>
                <br/>
                {
                    this.state.posts.length
                ?
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={10}
                        isIntrinsicHeight={true}
                        infinite={true}
                    >
                        <Slider>
                            {this.state.posts.map(post => <BlogPostCard {...post} />)}
                        </Slider>
                        <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
                            <ButtonBack style={{border: 'none', outline: 'none', backgroundColor: 'white', marginRight: '150px', paddingTop: '4px'}}><FontAwesomeIcon icon={faAngleLeft} color={'black'} size={'3x'}/></ButtonBack>
                            <ButtonNext style={{border: 'none', outline: 'none', backgroundColor: 'white', marginLeft: '150px', paddingTop: '4px'}}><FontAwesomeIcon icon={faAngleRight} color={'black'} size={'3x'}/></ButtonNext>
                        </div>
                    </CarouselProvider>
                :
                    <Loader className="spinner" type="TailSpin" color="grey" height={100} width={100} visible={true}/>
                }
                
            </>
        )   

    }



}

export default BlogPostContainer