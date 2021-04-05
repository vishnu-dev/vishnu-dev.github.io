import React from 'react';
import './Home.scss';
import { PALETTE } from '../../constants/Palette';
import Hero from '../Hero/Hero';

const Home = () => (
  <section className="Home" id="home" style={{backgroundColor: PALETTE.background, color: PALETTE.secondary}}>
    <Hero></Hero>
  </section>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
