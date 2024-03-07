import React from 'react';
import './Registration.scss';
import PersonalTutorImage from '../../components/PersonalTutorImage';
import CreateAccount from '../../components/CreateAccount';


const Registration = () => {
    return (
        <div className='registrationPage'>
            <div className="container">
                <div className="registrationPage__wrapper">
                    <PersonalTutorImage />
                    <CreateAccount />
                </div>
            </div>

        </div>
        
    )
}

export default Registration
