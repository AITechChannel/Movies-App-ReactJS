import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/layouts/MainLayout';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';

const publicRoutes = [
    { path: '/Movies-App-ReactJS-TuanAnhDoan/', component: Home },
    { path: '/Movies-App-ReactJS-TuanAnhDoan/:category', component: Category },
    { path: '/Movies-App-ReactJS-TuanAnhDoan/:category/search/:keyword', component: Category },
    { path: '/Movies-App-ReactJS-TuanAnhDoan/:category/:id', component: Detail },
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
