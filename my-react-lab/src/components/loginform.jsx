import React, { useState } from 'react';
import '../styles/loginform.css'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');

    const clearFields = () => {
        setEmail('');
        setPassword('');
        setFullName('');
        setAge('');
    };

    return (
        <div>
            <hr className='line'/>
            <h1 className='form'>Login Form</h1>
            <div className='inputdiv'>
                
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <br />

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-field"
                />
                <br />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input-field"
                />
            </div>

            <div className="output">
                <h3 className='email'>Email: {email}</h3>
                <h3 className='pass'>Password: {password}</h3>
                <h3 className='fn'>Full Name: {fullName}</h3>
                <h3 className='age'>Age: {age}</h3>
            </div>

            <button onClick={clearFields} className="clearbutton">Clear</button>
            <hr className='line'/>
        </div>
    );
}

export default LoginForm;
