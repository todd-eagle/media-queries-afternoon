import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      isMobileMenuOpen: false
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    })
  }


  render(){
    return(
      <>
      <header className="header">
       <div className="nav-bar">
           <div className="nav-container">
                <a href="#" className="logo-link"><img className="logo" src={require('./img/navbar-logo.svg')} alt="" /></a>
                <button className="btn-mobile" onClick={this.toggleMobileMenu}>Menu<span className="nav-menu"></span></button>
                <ul className={`main ${
                this.state.isMobileMenuOpen ? 'main-open' : null
              }`}>
                    <l1 className="main-item"><a href='#' className="main-item__link">Services</a></l1>
                    <l1 className="main-item"><a href='#' className="main-item__link">Portfolio</a></l1>
                    <l1 className="main-item"><a href='#' className="main-item__link">About</a></l1>
                    <l1 className="main-item"><a href='#' className="main-item__link">Team</a></l1>
                    <l1 className="main-item"><a href='#' className="main-item__link">Contact</a></l1>
                </ul>
            </div>  
       </div>
        <div className="heading-bar">
            <h1 className="heading-1">
                <span className="intro">Welcome To Our Studio!</span>
                <span className="sub">It's Nice To Meet You</span>
            </h1>
            <button className="btn">Tell Me More</button>
        </div>
    </header>
    
  </>
      
    )
  }
}
