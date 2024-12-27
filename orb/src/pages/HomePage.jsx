import React from 'react';
import Header from '../components/Header';
// import ChatBot from '../components/ChatBot';
import './HomePage.css';
import ContentComponent from '../components/ContentComponent';

import VideoConferenceComponent from '../components/VideoConferenceComponent';
import ChallengesComponent from '../components/ChallengesComponent';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <br></br>
        <h1>Welcome to EduOrbit!</h1>
        <p>Your learning platform for progress and collaboration.</p>
      </main>
      <ContentComponent/>
     
      <VideoConferenceComponent/>
      {/* <ChatBot /> */}
       {/*Embed the chatbot here*/}
       <ChallengesComponent/>
       <Footer/>
    </div>
  );
};

export default HomePage;