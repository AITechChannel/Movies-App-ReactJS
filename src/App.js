import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:category/', component: Category },
    { path: '/:category/search/:keyword', component: Category },
    { path: '/:category/:id', component: Detail },
    { path: '*', component: NotFound },
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
