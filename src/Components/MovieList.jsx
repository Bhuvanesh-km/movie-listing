import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./styles/MovieListStyle.css"

const MovieList = ({searchKeyword,allMovies, language})=>{
    console.log(searchKeyword);
    
    const [movies,setMovies]=useState(null);
    
    useEffect(()=>{
        setMovies(allMovies)
    },[allMovies]);

    //filter movies based on language
    useEffect(()=>{
        if(language && language!=='All'){
            let scope=allMovies;
            if(searchKeyword)scope=movies
            setMovies(filterArray(scope,doFilterBasedOnLang));
        }else{
            setMovies(allMovies);
        }
    },[language]);

    //filter movies
    useEffect(()=>{
        let scope=allMovies;
        if(language)scope=movies;
        if(searchKeyword){
            setMovies(filterArray(allMovies,doSearch));
        }else{
            setMovies(allMovies);
        }
        
    },[searchKeyword]);

    const filterArray=(array,condition)=>{
        return array.filter(item => condition(item));
    }
    const doSearch= movie=>{
        return movie.name.includes(searchKeyword);
    }
    const doFilterBasedOnLang=movie=>{
        return movie.language===language;
    }

    return (
    <div className="movies-list-container">
        {
            movies && movies.map((movie,index)=>{
                return(
                    <MovieCard movie={movie} key={index} />
                )
            })
        }
    </div>
    )
}

export default MovieList;