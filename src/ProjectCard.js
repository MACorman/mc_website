import React from 'react'
import YouTube from 'react-youtube'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ProjectCard extends React.Component {

    render() {
        return (
            <Slide>
                {/* <div className='project-slide'> */}
                    <h3 className='project-title'>{this.props.name}</h3>
                    <div className='project-graphic'>
                        {this.props.demo ? <YouTube className='youtube-embed' videoId={this.props.demo} opts={{height: '300', width: '500'}}/> : <img src={this.props.image} style={{height: '280px', width: 'auto'}}/>}
                    </div>
                    <div className='project-desc'>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='project_code_links'>
                        <a href={this.props.frontend} target="_blank">Frontend</a>
                        <span> | </span>
                        <a href={this.props.backend} target="_blank">Backend</a>
                        {this.props.url && <div><a href={this.props.url} target="_blank">Live</a></div>}
                    </div>
                {/* </div> */}
            </Slide>
        )
    }
}

export default ProjectCard