import React, { useState, useEffect } from 'react';

interface HeaderProps {}

const header: React.FC<headerProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Previne scroll quando menu está aberto
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: 0;
        }

        header {
          width: 100%;
          max-width: 1800px;
          padding: 10px 2%;
          position: fixed;
          top: 0;
          left: 0;
          transition: all 0.5s ease;
          z-index: 1000;
          background: ${isScrolled ? 'rgba(254, 251, 255, 0.95)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* Logo */
        .header-logo {
          width: 120px;
          height: auto;
          z-index: 1001;
        }

        .header-logo img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Menu Desktop */
        .header-links {
          display: flex;
          gap: 40px;
          margin:auto;
          list-style: none;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "poppins", sans-serif;
        }

        .header-links a {
          color: ${isScrolled ? '#d34040' : '#ffffff'};
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }

        .header-links a:hover {
          color: #d34040;
          transform: translateY(-2px);
        }

        .header-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #d34040;
          transition: width 0.3s ease;
        }

        .header-links a:hover::after {
          width: 100%;
        }

        /* Ícones Sociais Desktop */
        .header-icons {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .header-icons a {
          color: ${isScrolled ? '#d34040' : '#ffffff'};
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .header-icons a:hover {
          color: #d34040;
          transform: translateY(-3px) scale(1.1);
        }

        /* Menu Hambúrguer */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
          position: relative;
          flex-direction: column;
          gap: 4px;
        }

        .hamburger-line {
          width: 25px;
          height: 3px;
          background-color: ${isScrolled ? '#d34040' : '#ffffff'};
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .menu-toggle.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background-color: #ffffff;
        }

        .menu-toggle.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background-color: #ffffff;
        }

        /* Menu Mobile */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: ${isMenuOpen ? '0' : '-100%'};
          width: 300px;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          transition: right 0.3s ease;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding: 80px 30px 30px;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 50px;
        }

        .mobile-menu-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-menu-links a:hover {
          color: #d34040;
          padding-left: 10px;
        }

        .mobile-social-icons {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-top: auto;
        }

        .mobile-social-icons a {
          color: #ffffff;
          font-size: 28px;
          transition: all 0.3s ease;
        }

        .mobile-social-icons a:hover {
          color: #d34040;
          transform: scale(1.2);
        }

        /* Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: ${isMenuOpen ? '1' : '0'};
          visibility: ${isMenuOpen ? 'visible' : 'hidden'};
          transition: all 0.3s ease;
        }

        /* Media Queries */
        @media screen and (max-width: 768px) {
          .header-links,
          .header-icons {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .header-logo {
            width: 100px;
          }

          header {
            padding: 15px 4%;
          }
        }

        @media screen and (max-width: 480px) {
          .header-logo {
            width: 80px;
            margin-left: 120px;
          }

          .mobile-menu {
            width: 280px;
          }
        }
      `}</style>

      <header>
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <img 
              src="./public/fotos/popcorn festas logo.png" 
              alt="PopCorn Festas Logo"
            />
          </div>

          {/* Menu Desktop */}
          <nav className="header-links">
            <a href="#">Home</a>
            <a href="#Galeria">Fotos</a>
            <a href="#nossos-servicos">Serviços</a>
            <a href="https://api.whatsapp.com/send?phone=5518991162170" 
               target="_blank" 
               rel="noopener noreferrer">
              Contatos
            </a>
          </nav>

          {/* Ícones Sociais Desktop */}
          <div className="header-icons">
            <a href="https://www.instagram.com/theoriginalpopcorn/" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5518991162170" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.youtube.com/@PopcornFestas-d4y/shorts" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Menu Hambúrguer */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div className="menu-overlay" onClick={closeMenu}></div>

      {/* Menu Mobile */}
      <div className="mobile-menu">
        <nav className="mobile-menu-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#Galeria" onClick={closeMenu}>Fotos</a>
          <a href="#nossos-servicos" onClick={closeMenu}>Serviços</a>
          <a href="https://api.whatsapp.com/send?phone=5518991162170" 
             target="_blank" 
             rel="noopener noreferrer"
             onClick={closeMenu}>
            Contatos
          </a>
        </nav>

        <div className="mobile-social-icons">
          <a href="https://www.instagram.com/theoriginalpopcorn/" 
             target="_blank" 
             rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5518991162170" 
             target="_blank" 
             rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.youtube.com/@PopcornFestas-d4y/shorts" 
             target="_blank" 
             rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap" 
        rel="stylesheet"
      />
    </>
  );
};

export default header;