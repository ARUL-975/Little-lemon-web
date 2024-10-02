import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecials } from '../redux/actions/specialsActions';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { specials, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchSpecials());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <HeroSection />
      {loading ? <p>Loading specials...</p> : <Specials specials={specials} />}
      {error && <p>Error loading specials: {error}</p>}
      <Footer />
    </div>
  );
};

export default Home;