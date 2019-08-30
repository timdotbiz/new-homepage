import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout';

const profilePicUrlWithoutExt = "https://res.cloudinary.com/dzwa7qhj1/image/upload/c_scale,e_grayscale,w_180/v1523146834/fullsizeoutput_e44";

export default (props) => (
  <Layout location={props.location}>
    <div className="home-page">
      <picture className="profile-pic-container">
        <source srcSet={`${profilePicUrlWithoutExt}.webp`} type="image/webp"/>
        <source srcSet={`${profilePicUrlWithoutExt}.png`} type="image/png"/>
        <img className="profile-pic" src={`${profilePicUrlWithoutExt}.png`} alt="Selfie of Tim Ellison"/>
      </picture>
      <p>
        Heya 👋 I'm a front-end web developer at <a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Netflix</a>. I help build tools for the studio side of Netflix, empowering film creators around the world.
      </p>
      <p>
        When I'm not building web applications and sites I like to <Link to="/faves">make lists of my favorite things</Link>.
      </p>
    </div>
  </Layout>
);
