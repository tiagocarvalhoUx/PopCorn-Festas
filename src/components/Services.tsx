import React from 'react';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="services-section" id="nossos-servicos">
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">
            Nossos Serviços
          </h2>
          <p className="services-description">
            Atendemos todos os tipos de eventos. Levamos até você toda nossa estrutura 
            proporcionando uma experiência diferenciada em seu evento. 
            Temos diversos tipos de carrinhos de pipoca, adequados para qualquer tipo de evento.
          </p>
        </div>
        
        <div className="video-section">
          <h3 className="video-title">
            CONFIRA NO VÍDEO ABAIXO TODA NOSSA ESTRUTURA
          </h3>
          
          <div className="video-container">
            <video 
              src="./src/assets/videos/Video -Og.mp4" 
              controls 
              className="services-video"
              preload="metadata"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .services-section {
          background: transparent;
          padding: 2rem 1rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-margin-top: 80px; /* Ajuste para compensar o header fixo */
        }
        
        .services-content {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }
        
        .services-header {
          margin-bottom: 3rem;
        }
        
        .services-title {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .services-description {
          color: white;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .video-section {
          margin-top: 3rem;
        }
        
        .video-title {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          letter-spacing: 0.5px;
        }
        
        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        
        .services-video {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
          .services-section {
            padding: 1.5rem 1rem;
            scroll-margin-top: 100px; /* Ajuste maior para mobile */
          }
          
          .services-title {
            font-size: 2rem;
          }
          
          .services-description {
            font-size: 1.1rem;
          }
          
          .video-title {
            font-size: 1.3rem;
          }
          
          .services-video {
            max-width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .services-title {
            font-size: 1.8rem;
          }
          
          .services-description {
            font-size: 1rem;
          }
          
          .video-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;