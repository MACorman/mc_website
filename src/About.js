import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faGem } from '@fortawesome/free-solid-svg-icons'

function About() {
    // put resume in about section - a button that'll open it up in a new tab
    return (
        <div>
            <div className='about-container'>
                <div className='headshot-container'>
                    <img className='headshot' src='./headshot.png'/>
                </div>
                <div className='about-content'>
                    <p>I am a Brooklyn-based full-stack software engineer with an eye for detail and desire to know more. While working primarily in Ruby and JavaScript frameworks, I have delighted in creating applications from ideation and planning through to completion. I am passionate about solving problems - whether they be bugs in the code or the impetus for my next big project. </p>
                    <h3>TECHNOLOGIES</h3>
                    <div className='technologies'>
                        <span className='icon-container'>
                            <div className='icon'>
                                <i className="devicon-ruby-plain"></i>
                            </div>
                            <p className='icon-text'>Ruby</p>
                        </span>
                        <span className='icon-container'>
                            <div className='icon'>
                                <i className="devicon-rails-plain"></i>
                            </div>
                            <p className='icon-text'>Rails</p>  
                        </span>
                        <span className='icon-container'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faJs} size={'2x'} />
                            </div>
                            <p className='icon-text'>JavaScript</p>    
                        </span>
                        <span className='icon-container'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faReact} size={'2x'} />
                            </div>
                            <p className='icon-text'>React</p>   
                        </span>
                        <span className='icon-container'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faHtml5} size={'2x'} />
                            </div>
                            <p className='icon-text'>HTML</p>  
                        </span>
                        <span className='icon-container'>
                            <div className='icon'>
                            <FontAwesomeIcon icon={faCss3} size={'2x'} />
                            </div>
                            <p className='icon-text'>CSS</p>   
                        </span>
                        
                    </div>
                    <br/>
                    <a className='resume' href='./resume.pdf' target="_blank">Resume</a>
                </div>
                
            </div>

        </div>
    )
}

export default About