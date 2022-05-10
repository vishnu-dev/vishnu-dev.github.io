import React from 'react';
import './Home.scss';
import {PALETTE} from '../../constants/Palette';
import Hero from '../Hero/Hero';

const Home = () => (
    <section className="Home" id="home" style={{color: PALETTE.secondary}}>
        <Hero/>
    </section>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
