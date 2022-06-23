import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'swiper/css';
import VideoDetail from '~/components/VideoDetail';
import VideoSlider from '~/components/VideoSlider';

function Detail() {
    const { category, id } = useParams();
    console.log(id);
    const location = useLocation();

    const handleError = (name) => {
        console.log('loi', name);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div>
            <VideoDetail category={category} id={id} onError={(name) => handleError(name)} />
            <VideoSlider title="Similar" category={category} id={id} methodName="getSimilar" />
        </div>
    );
}

export default Detail;
