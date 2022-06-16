import React, { useEffect } from 'react';
import VideoSlider from '~/components/VideoSlider';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>
            <HeroSlide />
            <VideoSlider
                methodName="getMoviesList"
                more
                title="Trending Movies"
                category={category.movie}
                type={movieType.popular}
            />
            <VideoSlider
                methodName="getMoviesList"
                more
                title="Top rated Movies"
                category={category.movie}
                type={movieType.top_rated}
            />
            <VideoSlider methodName="getTvList" title="Trending TV" more category={category.tv} type={tvType.popular} />
            <VideoSlider
                methodName="getTvList"
                title="Top rated TV"
                more
                category={category.tv}
                type={tvType.top_rated}
            />
        </div>
    );
}

export default Home;
