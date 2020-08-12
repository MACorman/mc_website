import React from 'react'
import projects from './ProjectData'
import ProjectCard from './ProjectCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class ProjectsContainer extends React.Component {
    
    render() {
        return (
            <>
                <h2>PROJECTS</h2>
                <hr className='fancy-line'/>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    isIntrinsicHeight={true}
                    infinite={true}
                >
                    <Slider>
                        {projects.map(p => <ProjectCard {...p} />)}
                    </Slider>
                    <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', paddingTop: '2%'}}>
                        <ButtonBack style={{border: 'none', outline: 'none', backgroundColor: 'white', marginRight: '150px'}}><FontAwesomeIcon icon={faAngleLeft} color={'black'} size={'3x'}/></ButtonBack>
                        <ButtonNext style={{border: 'none', outline: 'none', backgroundColor: 'white', marginLeft: '150px'}}><FontAwesomeIcon icon={faAngleRight} color={'black'} size={'3x'}/></ButtonNext>
                    </div>
                </CarouselProvider>
            </>
        )
    }
}

export default ProjectsContainer