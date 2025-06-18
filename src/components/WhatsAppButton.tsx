import React from 'react';

interface WhatsAppButtonProps {}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=5518991162170&fbclid=PAZXh0bgNhZW0CMTEAAaY0O7hu82GOFDet5PSotsr4zKLGsJ9AuoB-dCI40nYWGex58iUuiFjVFCw_aem_h0LLlP5qhBf-KgBz1f_ROg"
      className="btn-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./public/assets/fotos/Galeria/whatssapp.svg" alt="botao whatsapp" />
    </a>
  );
};

export default WhatsAppButton;

