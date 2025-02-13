import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../styling/caf.css'; // Import CSS file

const Caf = () => {
    const [formData, setFormData] = useState({
        name: '',
        teamDetails: '' // This will contain both team name and players
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setFormData(prev => ({
                ...prev,
                name: decoded.name
            }));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://finwiz-backend.onrender.com/ca/create', formData);
            if (response.status === 201) {
                alert('Registration successful for Cricket Capital Auction!');
                navigate('/events');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Error during registration');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="caf-container">
            <form onSubmit={handleSubmit} className="caf-form">
                <h2>Cricket Capital Auction Registration</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    readOnly
                />
                <textarea
                    name="teamDetails"
                    value={formData.teamDetails}
                    onChange={handleChange}
                    placeholder="Enter your team name and players' names"
                    required
                    rows="4"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Caf;
