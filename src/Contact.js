import React, { Children } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faMedium, faGithub } from "@fortawesome/free-brands-svg-icons"
// import Mailto from 'react-mailto'


// function Mailto({ email, subject, body, ...props }) {
//     return (
//       <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
//     );
//   }


function Contact() {
    
    return (
        <div className='contact-container'>
            <h2 className='contact-title'>CONTACT</h2>
            {/* <Mailto email="madelinecorman@gmail.com" subject="" body="">
                Send me an email!
            </Mailto> */}
            <p>Interested in getting in touch?</p>
            <div className='mail-to-div'>
                <a className='mail-to' href="mailto:madelinecorman@gmail.com">Send me an email!</a>
            </div>
            <br/>
            <p>Or connect with me on social media:</p>
            <span className="social-icons">
                <a href="https://www.linkedin.com/in/madeline-corman/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size={'2x'} color={'black'}/></a>
            </span>
            <span className="social-icons">
                <a href="https://twitter.com/MadelineCorman" target="_blank"><FontAwesomeIcon icon={faTwitter} size={'2x'} color={'black'}/></a>  
            </span>
            <span className="social-icons">
                <a href="https://medium.com/@madelinecorman" target="_blank"><FontAwesomeIcon icon={faMedium} size={'2x'} color={'black'}/></a>   
            </span>
            <span className="social-icons">
                <a href="https://github.com/MACorman" target="_blank"><FontAwesomeIcon icon={faGithub} size={'2x'} color={'black'}/></a>   
            </span>
            
            
            

        </div>
    )
}

export default Contact