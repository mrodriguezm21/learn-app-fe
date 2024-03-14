import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { JoinUs } from './components/JoinUs/JoinUs';
import { Registration } from './components/Registration/Registration';
import { Profile } from './components/Profile/Profile';
import { Blog } from './components/Blog/Blog';
import { AboutUs } from './components/AboutUs/AboutUs';
import { RegistrationSuccess } from './components/Registration/components/RegistrationSuccess/RegistrationSuccess';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useUser } from './hooks/useUser';
import { ROLS } from './constants';
import registrationImgStudent from './assets/registration-student.png';
import registrationImgTrainer from './assets/registration-trainer.png';

function App() {
    useUser();
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join-us" element={<JoinUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route
                    path="/join-us/trainer"
                    element={
                        <Registration
                            rol={ROLS.TRAINER}
                            imgSrc={registrationImgTrainer}
                        />
                    }
                />
                <Route
                    path="/join-us/student"
                    element={
                        <Registration
                            rol={ROLS.STUDENT}
                            imgSrc={registrationImgStudent}
                        />
                    }
                />
                <Route
                    path="registration-success"
                    element={<RegistrationSuccess />}
                />
                <Route
                    path="my-account"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
            <Toaster position="top-right" reverseOrder />
        </>
    );
}

export default App;
