import React, { useState } from 'react';
import { Input, Button, Label, Checkbox, Modal } from '../components';
import './LoginForm.css';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });

    const [isModalOpen, setModalOpen] = useState(false);

    const validateForm = () => {
        const errors = {
            username: '',
            password: '',
        };

        if (!formData.username) errors.username = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setModalOpen(true);
            if (formData.rememberMe) {
                // Implement "Remember Me" functionality
                localStorage.setItem('username', formData.username);
            }
        }
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                    <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        label="Remember Me"
                    />
                </div>
                <div className="form-group button">
                    <Button size='large' type="submit">Login</Button>
                </div>
            </form>

            <Modal show={isModalOpen} onClose={() => setModalOpen(false)} title="Login Successful">
                <p>Welcome back!</p>
            </Modal>
        </div>
    );
};

export default LoginForm;
