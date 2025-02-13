import React from 'react';
import "../styling/analytics.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Analytics = () => {
    const { user } = useAuth();
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [wtrRegistrations, setWtrRegistrations] = useState([]);
    const [caRegistrations, setCaRegistrations] = useState([]);
    const [zquizRegistrations, setZquizRegistrations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.isadmin) return;
            
            try {
                // Fetch WTR registrations
                const wtrResponse = await axios.get('https://finwiz-backend.onrender.com/wtr/getwtr');
                setWtrRegistrations(wtrResponse.data);

                // Fetch CA registrations
                const caResponse = await axios.get('https://finwiz-backend.onrender.com/ca/get');
                setCaRegistrations(caResponse.data);

                // Fetch Zquiz registrations
                const zquizResponse = await axios.get('https://finwiz-backend.onrender.com/zquiz/get');
                setZquizRegistrations(zquizResponse.data);

                // Fetch total users
                const usersResponse = await axios.get('https://finwiz-backend.onrender.com/user/nu');
                setNumberOfUsers(usersResponse.data.numberOfUsers);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [user]);

    if (!user?.isadmin) {
        return (
            <div className="not-admin-message">
                <h1>You are not authorized to view this page</h1>
                <p>Please contact administrator for access</p>
            </div>
        );
    }

    return (
        <div className="analytics-page">
            <div className="nu">
                <h1>Total Accounts Registered: {numberOfUsers}</h1>
            </div>
            
            <div className="ca-section">
                <h1>Cricket Capital Auction Analytics</h1>
                <h2 className="registration-count">Total Registrations: {caRegistrations.length}</h2>
                <div className="table-container">
                    <table className="registration-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Team Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {caRegistrations.map((registration, index) => (
                                <tr key={registration._id}>
                                    <td>{index + 1}</td>
                                    <td>{registration.name}</td>
                                    <td>{registration.teamDetails}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="zquiz-section">
                <h1>Zerodha Quiz Analytics</h1>
                <h2 className="registration-count">Total Registrations: {zquizRegistrations.length}</h2>
                <div className="table-container">
                    <table className="registration-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zquizRegistrations.map((registration, index) => (
                                <tr key={registration._id}>
                                    <td>{index + 1}</td>
                                    <td>{registration.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="wtr-section">
                <h1>Warangal Trading Ring Analytics</h1>
                <h2 className="registration-count">Total Registrations: {wtrRegistrations.length}</h2>
                <div className="table-container">
                    <table className="registration-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wtrRegistrations.map((registration, index) => (
                                <tr key={registration._id}>
                                    <td>{index + 1}</td>
                                    <td>{registration.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics; 