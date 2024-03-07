import React from 'react'
import TutorImage from '../../../public/assets/images/main_img.png';
import "./PersonalTutorImage.scss";

const PersonalTutorImage = () => {
    return (
        <div className='personalTutorImage'>
            <img src={TutorImage} alt="IMAGE" className='personalTutorImage__img' />
            <h1 className='personalTutorImage__title'>Lorby</h1>
            <p className='personalTutorImage__text'>Твой личный репетитор</p>
        </div>
    )
}

export default PersonalTutorImage
