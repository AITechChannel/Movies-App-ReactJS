import React from 'react';
import VideoSlider from '~/components/VideoSlider';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';

function Home() {
    return (
        <div>
            <HeroSlide />
            <VideoSlider
                methodName="getMoviesList"
                title="Trending Movies"
                category={category.movie}
                type={movieType.popular}
            />
            <VideoSlider
                methodName="getMoviesList"
                title="Top rated Movies"
                category={category.movie}
                type={movieType.top_rated}
            />
            <VideoSlider methodName="getTvList" title="Trending TV" category={category.tv} type={tvType.popular} />
            <VideoSlider methodName="getTvList" title="Top rated TV" category={category.tv} type={tvType.top_rated} />
        </div>
    );
}

export default Home;
