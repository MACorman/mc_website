import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameAndDesc from './NameAndDesc';
import About from './About'
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact'
import BlogPostContainer from './BlogPostsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Menu from '@material-ui/core/Menu';

import { MenuItem } from '@material-ui/core';

class App extends React.Component {
  state = {
    display: 'home',
    showMenu: false
  }

  displayedScreen = () => {
    switch(this.state.display) {
      case 'home':
        return <NameAndDesc />
      case 'about':
        return <About />
      case 'projects':
        return <ProjectsContainer />
      case 'blog':
        return <BlogPostContainer />
      case 'contact':
        return <Contact />
      default: 
        return <NameAndDesc />

    }
  }

  render() {
    // adding a throw-away comment 
    return (
      <div className='App'>
        <div className='hamburger-menu-container'>
          {/* <div className='hamburger-container'> */}
          <FontAwesomeIcon className='hamburger' icon={faBars} onClick={() => this.setState({showMenu: true})} size='2x'/>
          {/* </div> */}
          <Menu 
            open={this.state.showMenu}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <FontAwesomeIcon style={{float: 'right', paddingRight: '11%', border: 'none', outline: 'none'}}icon={faTimes} onClick={() => this.setState({showMenu: false})}/>
            <MenuItem onClick={() => this.setState({display: 'home', showMenu: false})} >Home</MenuItem>
            <MenuItem onClick={() => this.setState({display: 'about', showMenu: false})} >About</MenuItem>
            <MenuItem onClick={() => this.setState({display: 'projects', showMenu: false})} >Projects</MenuItem>
            <MenuItem onClick={() => this.setState({display: 'blog', showMenu: false})} >Blog</MenuItem>
            <MenuItem onClick={() => this.setState({display: 'contact', showMenu: false})} >Contact</MenuItem>
          </Menu>
        </div>
        <div className='nav-menu-container'>
          <span className='img-span'>
            <img onClick={() => this.setState({display: 'home'})} src="./mc_favicon.png" />
          </span>
          <span className='nav-span'>
            <span className='nav-span-item' onClick={() => this.setState({display: 'home', showMenu: false})}>Home</span>
            <span className='nav-span-item' onClick={() => this.setState({display: 'about', showMenu: false})}>About</span>
            <span className='nav-span-item' onClick={() => this.setState({display: 'projects', showMenu: false})}>Project</span>
            <span className='nav-span-item' onClick={() => this.setState({display: 'blog', showMenu: false})}>Blog</span>
            <span className='nav-span-item' onClick={() => this.setState({display: 'contact', showMenu: false})}>Contact</span>
          </span>
        </div>
        <div className='app-body-div' onClick={() => this.setState({showMenu: false})}>
        <img className='logo-initials' onClick={() => this.setState({display: 'home'})} src="./mc_favicon.png" />
          {this.displayedScreen()}
        </div>
      </div>
    );
  }
}

export default App;


// public file containing images
// image of me for home
// screen shot of each project
// technologies - display the technology logo