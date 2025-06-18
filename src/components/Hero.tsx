import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div id="bg-home">
        <video playsinline loop autoPlay muted>
          <source src="./public/videos/video-disney.mp4" />
        </video>
      </div>

      <main className="hero-container">
        <div className="hero-text-section">
          <h1 className="hero-title">
            <span className="letter-animate">P</span>
            <span className="letter-animate">O</span>
            <span className="letter-animate">P</span>
            <span className="letter-animate">C</span>
            <span className="letter-animate">O</span>
            <span className="letter-animate">R</span>
            <span className="letter-animate">N</span>
            <br />
            <span className="space"> </span>
            <span className="letter-animate">F</span>
            <span className="letter-animate">E</span>
            <span className="letter-animate">S</span>
            <span className="letter-animate">T</span>
            <span className="letter-animate">A</span>
            <span className="letter-animate">S</span>
            <span className="hero-title-accent"> </span>
          </h1>

          <div className="hero-content">
            <div className="hero-image-container">
              <img
                src="./public/fotos/foto-carrinho-de-pipoca.png"
                alt="carrinho de pipoca"
                className="hero-image"
              />
            </div>

            <div className="hero-description">
              <p className="hero-services">
                🍿 Pipoca • 🍦 Sorvete • 🌭 Hotdog • 🍭 Algodão Doce
              </p>
              <p className="hero-equipment">
                🎪 Aluguel de Máquinas • 🧸 Pelúcias • 🏰 Infláveis • 🫧 Bubble
                House
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=5518991162170&fbclid=PAZXh0bgNhZW0CMTEAAaY0O7hu82GOFDet5PSotsr4zKLGsJ9AuoB-dCI40nYWGex58iUuiFjVFCw_aem_h0LLlP5qhBf-KgBz1f_ROg"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon">💬</span>
              <span className="button-text">Solicite seu Orçamento</span>
              <span className="button-arrow">→</span>
            </a>

            <div className="hero-subtitle-section">
              <h2 className="hero-subtitle">
                ✨ Especialistas em Festas e Eventos Inesquecíveis ✨
              </h2>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          margin-top: 40%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;

          width: 100%;
          background: transparent;

          gap: 2rem;
        }

        .hero-image-container {
          position: relative;
          margin-bottom: 1rem;
          margin-top: -50%;
        }

        .hero-image {
          width: 450px;
          height: auto;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .hero-text-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 100%;
          font-size: 50.2rem;
        }

        .hero-title {
          font-size: 40px;
          text-decoration: underline;
          font-style: italic;
          text-shadow: 2px 2px 5px red;
          line-height: 1.8;
          text-align: center;
          white-space: nowrap;
          background: linear-gradient(
            45deg,
            #ff6b6b,
            #fff,
            #6bcf7f,
            #4d79ff,
            #fff
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowGlow 3s ease-in-out infinite,
            titlePulse 2s ease-in-out infinite alternate;
          filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.6));
          transform-origin: center;
          transition: transform 0.3s ease;
          margin-top: -20%;
        }

        .hero-title:hover {
          transform: scale(1.1) rotate(2deg);
          filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.8));
        }

        @keyframes rainbowGlow {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.6));
          }
          25% {
            background-position: 50% 50%;
            filter: drop-shadow(0 0 15px rgba(255, 217, 61, 0.7));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 10px rgba(107, 207, 127, 0.6));
          }
          75% {
            background-position: 50% 100%;
            filter: drop-shadow(0 0 15px rgba(77, 121, 255, 0.7));
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.6));
          }
        }

        @keyframes titlePulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .hero-title-accent {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8));
          font-size: 0.8em;
        }

        .hero-description {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin: 1.5rem 0;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: -30%;
        }

        .hero-services,
        .hero-equipment {
          font-size: 1.3rem;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
          margin: 0;
          line-height: 1.8;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
          text-decoration: none;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 3px solid transparent;
          text-shadow: none;
          position: relative;
          overflow: hidden;
          min-width: 280px;
        }

        .whatsapp-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s;
        }

        .whatsapp-button:hover::before {
          left: 100%;
        }

        .whatsapp-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
          background: linear-gradient(135deg, #128c7e, #25d366);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .whatsapp-button:active {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .button-icon {
          font-size: 1.4rem;
          animation: bounce 2s infinite;
        }

        .button-text {
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .button-arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .whatsapp-button:hover .button-arrow {
          transform: translateX(5px);
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-3px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        .hero-subtitle-section {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
          margin: 0;
          line-height: 1.6;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1.5rem;
            margin: 1rem;
            gap: 1.5rem;
          }

          .hero-title {
            font-size: 3.5rem;
            letter-spacing: 3px;
          }

          .hero-image {
            width: 220px;
          }

          .hero-services,
          .hero-equipment {
            font-size: 1.1rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .whatsapp-button {
            padding: 1rem 2rem;
            font-size: 1.1rem;
            min-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            margin-top: 130%;
          }
          .hero-image-container {
            margin-top: -150%;
          }
          .hero-description {
            margin-top: -80%;
          }

          .hero-title {
            font-size: 2.8rem;
            letter-spacing: 2px;
          }

          .hero-image {
            width: 180px;
          }

          .hero-services,
          .hero-equipment {
            font-size: 1rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .whatsapp-button {
            padding: 0.9rem 1.8rem;
            font-size: 1rem;
            min-width: 220px;
          }

          .hero-description {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
