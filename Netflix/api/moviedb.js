import axios from "axios";


const api_Key='d96ad2f6c2f9b86ab7dbd7ff7f779366'
export const image500=path=> path?`https://image.tmdb.org/t/p/w500${path}` : null;
export const image342=path=> path?`https://image.tmdb.org/t/p/w342${path}` : null;
export const image185=path=> path?`https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

//dynamic
const moviedetailEP=id=>`${Base_url}/movie/${id}?api_key=${api_Key}`
const movieCreditEP=id=>`${Base_url}/movie/${id}/credits?api_key=${api_Key}`
const similarMoviesEP=id=>`${Base_url}/movie/${id}/similar?api_key=${api_Key}`
const PersonEP=id=>`${Base_url}/person/${id}?api_key=${api_Key}`
const PersonMoviesEP=id=>`${Base_url}/person/${id}/movie_credits?api_key=${api_Key}`


//endpoint
const Base_url='https://api.themoviedb.org/3';
const trendingMoviesEP=`${Base_url}/trending/movie/day?api_key=${api_Key}`
const upcomingMoviesEP=`${Base_url}/movie/upcoming?api_key=${api_Key}`
const topRatedMoviesEP=`${Base_url}/movie/popular?api_key=${api_Key}`
const searchEp=`${Base_url}/search/movie?api_key=${api_Key}`
const apiCall=async (endpoint,params )=>{
    const options={
        method:'GET',
        url:endpoint,
        params:params? params :{}

    }
    try{
        const response=await axios.request(options);
        return response.data;

    }catch(error){
        console.log(error )
    }
}

export const fetchTrendingMovies =()=>{
    return apiCall(trendingMoviesEP)
}

export const fetchUpcomingMovies =()=>{
    return apiCall(upcomingMoviesEP)
}

export const fetchTopRatedMovies =()=>{
    return apiCall(topRatedMoviesEP)
}
export const fetchCredit =(id)=>{
    return apiCall(movieCreditEP(id))
}
export const fetchSimilarMovies =(id)=>{
    return apiCall(similarMoviesEP(id))
}
export const fetchDetail =(id)=>{
    return apiCall(moviedetailEP(id))
}
export const fetchPerson=(id)=>{
    return apiCall(PersonEP(id))
}
export const fetchPersonMovies=(id)=>{
    return apiCall(PersonMoviesEP(id))
}
export const fetchSearch=params=>{
    return apiCall(searchEp,params)
}