import React, { useState } from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        studentId: '',
        nationalId: '',
        programOfStudy: '',
        yearOfStudy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            {/* Add other input fields similarly */}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
