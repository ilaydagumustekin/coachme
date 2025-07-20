// pages/BMIPage.jsx
import React from 'react';
import BMIForm from '../component/BMIForm';

const BMIPage = () => {
  return (
    <div>
      <h1>BMI Hesaplama Sayfası</h1>
      <BMIForm />  {/* BMI formunu burada çağırıyoruz */}
    </div>
  );
};

export default BMIPage;
