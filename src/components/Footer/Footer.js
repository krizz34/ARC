import React from 'react'
import { Button } from '../Button/Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the ARC newsletter to get latest news on new vulnerabilities in this Cyber world!
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ARC
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
