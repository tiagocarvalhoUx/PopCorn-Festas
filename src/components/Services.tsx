import React, { useState, useRef, useEffect } from "react";

const services = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const videos = [
    {
      src: "../videos/video-og.mp4",
      title: "Nossa Estrutura Completa",
      muted: false,
    },
    {
      src: "../videos/Crianças-inflavel.mp4",
      title: "Crianças Brincando",
      muted: true,
    },
    {
      src: "../videos/Fazendo-Algodaodoce.mp4",
      title: "A magia do Algodão Doce",
      muted: true,
    },
    {
      src: "../videos/maquina-sorvete.mp4",
      title: "Saboroso Sorvete",
      muted: true,
    },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index) => {
    setCurrentVideo(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Função para lidar com o fim do vídeo
  const handleVideoEnd = () => {
    if (isAutoPlay) {
      nextVideo();
    }
  };

  // Effect para pausar/reproduzir vídeo quando autoplay é ativado/desativado
  useEffect(() => {
    if (videoRef.current) {
      if (isAutoPlay) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isAutoPlay, currentVideo]);

  // Reset do estado de playing quando troca de vídeo
  useEffect(() => {
    setIsPlaying(false);
  }, [currentVideo]);

  return (
    <section className="services-section" id="nossos-servicos">
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-description">
            Atendemos todos os tipos de eventos. Levamos até você toda nossa
            estrutura proporcionando uma experiência diferenciada em seu evento.
            Temos diversos tipos de carrinhos de pipoca, adequados para qualquer
            tipo de evento.
          </p>
        </div>

        <div className="video-section">
          <h3 className="video-title">
            CONFIRA NO VÍDEO ABAIXO TODA NOSSA ESTRUTURA
          </h3>

          <div className="carousel-container">
            <div className="video-container">
              <button className="carousel-btn prev-btn" onClick={prevVideo}>
                ‹
              </button>

              <video
                ref={videoRef}
                key={currentVideo}
                src={videos[currentVideo].src}
                controls
                className="services-video"
                preload="metadata"
                muted={videos[currentVideo].muted}
                onEnded={handleVideoEnd}
                onPlay={handlePlay}
                onPause={handlePause}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>

              {!isPlaying && (
                <button className="video-play-btn" onClick={togglePlayPause}>
                  <span className="play-icon">▶</span>
                </button>
              )}

              <button className="carousel-btn next-btn" onClick={nextVideo}>
                ›
              </button>

              <div className="video-info">
                <h4 className="video-current-title">
                  {videos[currentVideo].title}
                </h4>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentVideo ? "active" : ""
                }`}
                onClick={() => goToVideo(index)}
              />
            ))}
          </div>

          <div className="carousel-counter">
            {currentVideo + 1} / {videos.length}
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
          scroll-margin-top: 80px;
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

        .carousel-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 220px;
        }

        .services-video {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease;
        }

        .video-info {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        }

        .video-current-title {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          z-index: 10;
          opacity: 0.8;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          border-color: rgba(255, 255, 255, 0.6);
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .prev-btn {
          left: 15px;
        }

        .next-btn {
          right: 15px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          border-color: white;
        }

        .indicator:hover {
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        .video-play-btn {
          position: absolute;
          top: 8%;
          left: 85%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          border: 3px solid rgba(255, 255, 255, 0.9);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          z-index: 15;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .video-play-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          border-color: white;
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.6);
        }

        .video-play-btn:active {
          transform: translate(-50%, -50%) scale(0.95);
        }

        .play-icon {
          font-size: 0.9rem;
          margin-left: 4px; /* Pequeno ajuste para centralizar visualmente o ícone */
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .carousel-counter {
          color: white;
          font-size: 1.5rem;
          opacity: 0.8;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .services-section {
            padding: 1.5rem 1rem;
            scroll-margin-top: 100px;
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

          .carousel-container {
            margin-bottom: 1.5rem;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .prev-btn {
            left: 10px;
          }

          .next-btn {
            right: 10px;
          }

          .video-current-title {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 1.8rem;
          }

          .services-description {
            font-size: 1rem;
          }
          .video-container {
            width: 100%;
            max-width: 400vh;
          }

          .video-title {
            font-size: 1.2rem;
          }

          .carousel-container {
            margin-bottom: 1.5rem;
          }

          .carousel-btn {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .prev-btn {
            left: 8px;
          }

          .next-btn {
            right: 8px;
          }

          .video-play-btn {
            width: 60px;
            height: 60px;
          }

          .play-icon {
            font-size: 1.5rem;
            margin-left: 3px;
          }
        }
      `}</style>
    </section>
  );
};

export default services;