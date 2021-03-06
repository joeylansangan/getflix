import React from 'react';
import Banner from '../components/Banner/Banner';
import Nav from '../components/Nav/Nav';
import Row from '../components/Row/Row';
import requests from '../utils/Requests';

import './HomeScreen.css';

function HomeScreen(){
    return(
        <div className="home">
            <Nav/>
            <Banner/> 
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen;