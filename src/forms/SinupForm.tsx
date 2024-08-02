import React, { useState } from 'react';
import { Input, Select, Checkbox, Button, Label } from '../components';
import './SignupForm.css';

interface SignupFormProps {
    onSubmit: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        agreeToTerms: false,
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        agreeToTerms: '',
    });

    const roles = [
        { value: '', label: 'Select a role' },
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
    ];

    const validateForm = () => {
        const errors = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: '',
            agreeToTerms: '',
        };

        if (!formData.username) errors.username = 'Username is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.password) errors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            errors.confirmPassword = 'Passwords do not match';
        if (!formData.role) errors.role = 'Role is required';
        if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms';

        setFormErrors(errors);

        return Object.values(errors).every((error) => error === '');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, role: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit();
        }
    };

    return (
        <div className="signup-form-main">
            <h1>Signup</h1>
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <Label htmlFor="username" text="Username" />
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={formErrors.username ? 'error' : ''}
                    />
                    {formErrors.username && <p className="error-message">{formErrors.username}</p>}
                </div>
                <div className="form-group">
                    <Label htmlFor="email" text="Email" />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                    <Label htmlFor="password" text="Password" />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={formErrors.password ? 'error' : ''}
                    />
                    {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                </div>
                <div className="form-group">
                    <Label htmlFor="confirmPassword" text="Confirm Password" />
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={formErrors.confirmPassword ? 'error' : ''}
                    />
                    {formErrors.confirmPassword && (
                        <p className="error-message">{formErrors.confirmPassword}</p>
                    )}
                </div>
                <div className="form-group">
                    <Label htmlFor="role" text="Role" />
                    <Select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleSelectChange}
                        options={roles}
                        className={formErrors.role ? 'error' : ''}
                    />
                    {formErrors.role && <p className="error-message">{formErrors.role}</p>}
                </div>
                <div className="form-group">
                    <Checkbox
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        label="I agree to the terms and conditions"
                        className={formErrors.agreeToTerms ? 'error' : ''}
                    />
                    {formErrors.agreeToTerms && (
                        <p className="error-message">{formErrors.agreeToTerms}</p>
                    )}
                </div>
                <div className="form-group button">
                    <Button size='large' type="submit">Signup</Button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
