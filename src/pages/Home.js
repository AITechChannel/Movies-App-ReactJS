import React from 'react';
import VideoCardList from '~/components/VideoCardList';
import '~/components/HeroSlide';
import HeroSlide from '~/components/HeroSlide';
import { category, movieType, tvType } from '~/api/tmdbApi';

function Home() {
    return (
        <div>
            <HeroSlide />
            <VideoCardList title="Trending Movies" category={category.movie} type={movieType.popular} />
        </div>
    );
}

export default Home;
