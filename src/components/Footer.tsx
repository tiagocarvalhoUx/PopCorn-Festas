import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
          href="https://www.instagram.com/theoriginalpopcorn/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram fa-2x"></i>
        </a>

        <a 
          href="https://api.whatsapp.com/send?phone=5518991162170&fbclid=PAZXh0bgNhZW0CMTEAAaY0O7hu82GOFDet5PSotsr4zKLGsJ9AuoB-dCI40nYWGex58iUuiFjVFCw_aem_h0LLlP5qhBf-KgBz1f_ROg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fab fab fab fa-whatsapp fa-2x"></i>
        </a>
        
        <a 
          href="https://www.youtube.com/@PopcornFestas-d4y/shorts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fab fab fab fab fa-youtube fa-2x"></i>
        </a>
      </div>

      <div>
        <img 
          className="logo"
          src="./public/fotos/Popcorn Festas logo.png" 
          alt="logo-the-original"
        />
      </div>

      <h10>Copyright 2024 | PopCorn FESTAS - Todos direitos reservados.</h10>
    </footer>
  );
};

export default Footer;

