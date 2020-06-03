import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import './styles.css';

const Success = () => {
  return (
    <div id='success-page'>
      <div className='success-message'>
        <FiCheckCircle size={100} color='#34cb79' />
        <h1>Cadastro concluído!</h1>
      </div>
      <p className='success-info'>
        Seu ponto de coleta já está visível no nosso aplicativo!
      </p>
      <div className='stores'>
        <a href='https://github.com/vitorpedeo/Ecoleta'>
          <FaGooglePlay size={70} className='store-icon' />
        </a>

        <a href='https://github.com/vitorpedeo/Ecoleta'>
          <FaAppStore size={70} className='store-icon' />
        </a>
      </div>
    </div>
  );
};

export default Success;
