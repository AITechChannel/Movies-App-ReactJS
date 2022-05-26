const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: '718ca6dfce46881e7e3f67da8daa3e77',
    originalImage: (imgPath) => `http://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `http://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
