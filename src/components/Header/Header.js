import React from 'react'
import MeImg from '../../assets/Rectangle 5.svg'
import '../Header/Header.css'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <section id='intro'>
          <div className="introContent">
              <span className="hello">Hello!</span>
              <span className="introMe">I'm <span className="introName">Emilson Jaymes, </span><br /> A Web Developer
                  <span className='dot'> .</span></span>
              <Link><button className="contactBtn1">Contact Me</button></Link>
          </div>
          <img src={MeImg} alt="" className="bg" />
          
    </section>
  )
}

export default Header
