import '../styling/events.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Events = () => {
    const { user } = useAuth();
    const[zquiz,setZquiz] = useState(false);
    const[wtrs,setWtr] = useState(false);
    const[ca,setCa] = useState(false);

    useEffect(() => {
        if (user) {
            checkRegistrationStatus(user.name);
        }
    }, [user]);

    useEffect(() => {
        const handleFocus = () => {
            if (user) {
                checkRegistrationStatus(user.name);
            }
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, [user]);

    // Function to check registration status
    const checkRegistrationStatus = async (username) => {
        try {
            const zquizResponse = await axios.get(`https://finwiz-backend.onrender.com/zquiz/check/${username}`);
            setZquiz(zquizResponse.data.isRegistered);

            const wtrResponse = await axios.get(`https://finwiz-backend.onrender.com/wtr/check/${username}`);
            setWtr(wtrResponse.data.isRegistered);

            const caResponse = await axios.get(`https://finwiz-backend.onrender.com/ca/check/${username}`);
            setCa(caResponse.data.isRegistered);
        } catch (error) {
            console.error('Error checking registration status:', error);
        }
    };

    const zerodha = async() => {
        try {
            const response = await axios.post('https://finwiz-backend.onrender.com/zquiz/create', {
                name: user.name,
            });
            setZquiz(true);
            alert("Registered successfully for zerodha quiz");
        } catch (error) {
            console.log(error);
        }
    }

    const wtr = async() => {
        try {
            const response = await axios.post('https://finwiz-backend.onrender.com/wtr/createwtr', {
                name: user.name,
            });
            setWtr(true);
            alert("Registered successfully for Warangal Trading Ring");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className="events">
            {user ? (
                <div className="events-container">
                    <div className="ca">
                        <h1>Cricket Capital Auction</h1>
                        <p>Date: 2025-02-17</p>
                        <p>Location: Location 1</p>
                        <p>Description: Description 1</p>
                        {!ca ? (
                            <NavLink to="/caf" className="register-button">Register</NavLink>
                        ) : (
                            <button className="already-registered">Already Registered</button>
                        )}
                    </div>
                    <div className="wtr">
                        <h1>Warangal Trading Ring</h1>
                        <p>Date: 2025-02-19</p>
                        <p>Location: Location 2</p>
                        <p>Description: Description 2</p>
                        {!wtrs ? <button onClick={wtr}>Register</button> : <button>Already Registered</button>}
                    </div>
                    <div className="zquiz">
                        <h1>Zerodha Finance Quiz</h1>
                        <p>Date: 2025-02-22</p>
                        <p>Location: Location 3</p>
                        <p>Description: Description 3</p>
                        {!zquiz ? <button onClick={zerodha}>Register</button> : <button>Already Registered</button>}
                    </div>
                </div>
            ) : (
                <h1  className= 'login-text' style={{ textAlign: 'center', marginTop: '2rem' }}>Please login to see the events</h1>
            )}
        </div>
        </>
    )
}

export default Events
/*
const firebaseConfig = {
  apiKey: "AIzaSyBTpejRim7Z-RsJfxDVsBA_C0Mk3zZfbDU",
  authDomain: "finwiz-c5772.firebaseapp.com",
  projectId: "finwiz-c5772",
  storageBucket: "finwiz-c5772.firebasestorage.app",
  messagingSenderId: "617998237261",
  appId: "1:617998237261:web:614872af69eefa7637a604",
  measurementId: "G-J74EKPH58G"
};*/