import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import NavigationBar from "../Components/NavigationBar";
import MovieApiService from "../api/MovieService";
import ChooseLanguage from "../Components/ChooseLanguage";

const HomePage=()=>{

    const [searchKeyword,setSearchKeyWord]=useState(null); 
    const [selectedLanguage,setSelectedLanguage]=useState(null);
    const [allMovies,setAllmovies]=useState(null);

    useEffect(()=>{
        MovieApiService.fetchMovies().then((resp)=>{
            if(resp && resp.length>0){
                setAllmovies(resp);
            }
        })
    },[])

    return (
        <div>
            
            <NavigationBar onUserSearch={setSearchKeyWord} onLanguageChange={setSelectedLanguage}></NavigationBar>
            <MovieList searchKeyword={searchKeyword} allMovies={allMovies} language={selectedLanguage}></MovieList>
        </div>
    )
}

export default HomePage;