import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'swiper/swiper.min.css';
import Catalog from '~/pages/Catalog';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:category', component: Catalog },
    { path: '/:category/search/:keyword', component: Catalog },
    { path: '/:category/:id', component: Detail },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((e, i) => {
                    const Page = e.component;
                    return (
                        <Route
                            key={i}
                            path={e.path}
                            element={
                                <MainLayout>
                                    <Page />
                                </MainLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;