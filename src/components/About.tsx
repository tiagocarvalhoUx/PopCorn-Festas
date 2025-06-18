import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Seção principal com imagem e texto de introdução */}
        <section className="hero-section">
          <div className="intro-text">
            <h2 className="main-title">PopCorn Festas</h2>

            <div className="hero-content">
              <div className="image-container">
                <img
                  src="./public/assets/fotos/foto-circus.png"
                  alt="carrinho com máquinas de bichinho"
                  className="hero-image"
                />
              </div>
              <h4 className="subtitle">
                Atuamos em festas, hotéis, escolas, clubes e eventos
                corporativos atendendo o público infantil, teen e adulto.
              </h4>
            </div>
          </div>
        </section>

        {/* Seção de informações da empresa */}
        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <h5 className="card-title">
                <i className="fa-solid fa-users"></i>
                <span className="about">NOSSA EQUIPE</span>
              </h5>
              <p className="card-description">
                Contamos com uma equipe especializada e capacitada para atender
                todos os tipos de eventos, assim tornando seu evento mais
                divertido e inesquecível.
              </p>
            </div>

            <div className="info-card">
              <h5 className="card-title">
                <i className="fa-solid fa-building"></i>
                <span className="about">ESTRUTURA</span>
              </h5>
              <p className="card-description">
                Conte com serviço 5 estrelas, equipe mega atualizada que
                trabalha feliz em todos os eventos, seja para recreação
                infantil, recreação teen ou recreação adulto.
              </p>
            </div>

            <div className="info-card">
              <h5 className="card-title">
                <i className="fa-solid fa-heart"></i>
                <span className="about">DEDICAÇÃO</span>
              </h5>
              <p className="card-description">
                Amamos o que fazemos, nos dedicamos e somos comprometidos com
                todos os nossos clientes. Para recreação infantil, teen ou
                adulto, chame a PopCorn Festas.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-container {
          margin-left: 200px;
          background: transparent;
          padding: 2rem 1rem;
          min-height: 100vh;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-section {
          margin-bottom: 4rem;
        }

        .hero-content {
          max-width: 800px;

          margin-right: 50px;
          width: 100%;
          background: transparent;

          gap: 2rem;
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-container {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          margin-top: 80px;
        }

        .hero-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.05);
        }

        .intro-text {
          flex: 1;
          min-width: 300px;
          text-align: center;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #d34040;
          margin-top: -5%;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .info-section {
          background: transparent;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.2);
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about {
          color: #d94140;
          font-weight: 600;
          margin-right: 200px;
        }

        .card-title i {
          font-size: 1.3rem;
          color: #ff6b6b;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .card-description {
          line-height: 1.7;
          color: #fefbff;
          margin: 0;
          font-size: 1rem;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .about-container {
            padding: 1rem 0.5rem;
          }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
            padding: 1.5rem;
            margin: auto;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .info-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 1rem;
            margin: auto;
          }
          .about-container {
            margin: auto;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 1rem;
            padding: 0.8rem;
          }

          .info-card {
            padding: 1.2rem;
          }

          .card-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
