import React from 'react';
// import { Tooltip } from 'react-tooltip';
// import { motion } from 'framer-motion';
// import { Card, CardContent, Button } from '@mui/material';
import '../App.css';
import FAQSection from '../Components/FAQSection';
import NewsletterSection from '../Components/Newslettersection';
import Footer from '../Components/Footer';
import Roadmap from '../Components/Roadmap';
import ContractAddress from '../Components/ContractAddress';
import Wealth from '../Components/Wealth';
import Front from '../Components/Front';
import Navigation from '../Components/Navigation';  
import CoinFeature from '../Components/CoinFeature';
import TradingViewChart from '../Components/TradingViewChart';
import HowToBuy from '../Components/HowToBuy';

const HomePage = () => {

  return (
    <div className="bg-[#F5F5DC] min-h-screen w-full">

    <Navigation />

    <Front />

    <Wealth />

    <TradingViewChart />

    <ContractAddress />

    <CoinFeature />

    <Roadmap />

    <HowToBuy />

    <FAQSection />

    <NewsletterSection />

    <Footer />

    </div>
  );
};

export default HomePage;