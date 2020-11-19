import React from 'react';
import frame from '../../assets/images/frame2.png';
import './Project.css'

const Project = () => {
  return (
    <section
      style={{ height: '480px' }}
      className='row d-flex align-items-center justify-content-center project-container'
    >
      <div className='col-md-6'>
        <img src={frame} alt='' className='img-fluid w-100 p-5' />
      </div>
      <div className='col-md-6'>
        <h1 className='mb-4'>
        STAY RUNNING & Project
        </h1>
        <p style={{ color: '#000', fontSize: '16px' }} className='mb-4'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.  
         
        </p>

        <button className='btn btn-brand text-white'>Contact us</button>
      </div>
    </section>
  );
};

export default Project;
