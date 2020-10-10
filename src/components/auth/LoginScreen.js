import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from './Input';
import { loginWithEmailAndPassword } from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword({ ...values }));
  };

  return (
    <div className="auth__main">
      <div className="auth__box-container animate__animated animate__fadeInDown">
        <span className="auth__title">LOGIN</span>
        <form onSubmit={handleSubmit}>
          <div className="auth__input-group">
            <Input
              text="Email"
              type="email"
              handleInputChange={handleInputChange}
              value={values.email}
            />
            <Input
              text="Password"
              type="password"
              handleInputChange={handleInputChange}
              value={values.password}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
