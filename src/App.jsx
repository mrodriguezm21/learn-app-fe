import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
