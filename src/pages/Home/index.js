import React from 'react';
import VideoSlider from '~/components/VideoSlider';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';

function Home() {
    return (
        <div>
            <HeroSlide />
            <VideoSlider title="Trending Movies" category={category.movie} type={movieType.popular} />
            <VideoSlider title="Top rated Movies" category={category.movie} type={movieType.top_rated} />
        </div>
    );
}

export default Home;
