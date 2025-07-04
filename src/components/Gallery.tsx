import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const GalleryItem = {
  src: "string",
  alt: "string",
  caption: "string",
};

const gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryItems = [
  
    // Galeria Popcorn
    {
      src: "/Galeria-Popcorn/mesa-hockey.png",
      alt: "Mesa Hockey",
      caption: "Mesa Hockey",
    },
    {
      src: "/Galeria-Popcorn/bolha-inflavel.png",
      alt: "Bubble House",
      caption: "Bubble House",
    },
    {
      src: "/Galeria-Popcorn/carrinho-algodao-doce.png",
      alt: "Carrinho Algodão Doce",
      caption: "Carrinho Algodão Doce",
    },
    {
      src: "/Galeria-Popcorn/carrinho-crepe.png",
      alt: "Carrinho Crepe",
      caption: "Carrinho Crepe",
    },
    {
      src: "/Galeria-Popcorn/carrinho-hotdog.png",
      alt: "Carrinho Hotdog",
      caption: "Carrinho Hotdog",
    },
    {
      src: "/Galeria-Popcorn/carrinho-pipoca-pelucia.png",
      alt: "Carrinho Pipoca Pelúcia",
      caption: "Carrinhos Móveis",
    },
    {
      src: "/Galeria-Popcorn/crepe.png",
      alt: "Carrinho Crepe",
      caption: "Carrinho Crepe",
     
    },
    {
      src: "/Galeria-Popcorn/embalagem-pipoca.png",
      alt: "Embalagem Personalizada",
      caption: "Embalagem Personalizada",
     
    },
    {
      src: "/Galeria-Popcorn/ilha-algodao-doce.png",
      alt: "Ilha Algodão Doce",
      caption: "Ilha Algodão Doce",
    },
    {
      src: "/Galeria-Popcorn/ilha-sorvete-algodao-doce.png",
      alt: "Ilha Sorvete Algodão Doce",
      caption: "Ilha Sorvete",
    },
    {
      src: "/Galeria-Popcorn/maquina-de-bichinho-led.png",
      alt: "Máquina Bichinho",
      caption: "Máquina Bichinho",
    },
    {
      src: "/Galeria-Popcorn/maquina-sorvete.png",
      alt: "Máquina Sorvete",
      caption: "Máquina Sorvete",
    },
    {
      src: "/Galeria-Popcorn/palhaçoalto.png",
      alt: "Tema Circus",
      caption: "Tema Circus",
     
    },
    {
      src: "/Galeria-Popcorn/patata.png",
      alt: "Festas Temáticas",
      caption: "Festas Temáticas",
    },
    {
      src: "/Galeria-Popcorn/temperos-pipoca.png",
      alt: "Variedades de Temperos",
      caption: "Variedades Temperos",
    },
    {
      src: "/Galeria-Popcorn/touro-mecanico.png",
      alt: "Touro Mecânico",
      caption: "Touro Mecânico",
    },
    {
      src: "/Galeria-Popcorn/escorregador-inflavel.png",
      alt: "Escorregador Inflável",
      caption: "Escorregador Inflável",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 16px",
      background:
        "linear-gradient(135deg, rgba(15, 23, 42, 0.2), rgba(0, 0, 0, 0), rgba(30, 41, 59, 0.2))",
    },
    header: {
      textAlign: "center",
      marginBottom: "64px",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "white",
      margintop: "-80px",
      marginBottom: "24px",
      textShadow:
        "0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    subtitle: {
      fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
      color: "rgba(255, 255, 255, 0.9)",
      fontWeight: "300",
      letterSpacing: "0.05em",
      maxWidth: "512px",
      margin: "0 auto",
      textShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    divider: {
      width: "128px",
      height: "4px",
      background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
      margin: "32px auto 0",
      borderRadius: "9999px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    carouselContainer: {
      position: "relative",
      maxWidth: "1152px",
      width: "80%",
    },
    carousel: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "24px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "320px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all 0.7s ease-out",
      filter: "brightness(0.9) contrast(1.1) saturate(1.2)",
      transform: "scale(1)",
    },
    imageHover: {
      transform: "scale(1.05)",
    },
    gradientOverlay1: {
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent)",
    },
    gradientOverlay2: {
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent, rgba(0, 0, 0, 0.3))",
    },
    caption: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      padding: "24px",
    },
    captionTitle: {
      color: "white",
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      fontWeight: "bold",
      textShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      marginBottom: "12px",
      letterSpacing: "0.025em",
    },
    captionDivider: {
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
      borderRadius: "9999px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(24px)",
      color: "white",
      padding: "12px",
      borderRadius: "50%",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    navButtonLeft: {
      left: "16px",
    },
    navButtonRight: {
      right: "16px",
    },
    navButtonHover: {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-50%) scale(1.1)",
      borderColor: "rgba(255, 255, 255, 0.4)",
    },
    playButton: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(24px)",
      color: "white",
      padding: "8px",
      borderRadius: "50%",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    playButtonHover: {
      background: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.1)",
    },
    dotsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      marginTop: "32px",
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.4)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
    },
    dotActive: {
      width: "48px",
      height: "12px",
      background: "white",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transform: "scale(1.1)",
    },
    dotHover: {
      background: "rgba(255, 255, 255, 0.7)",
      transform: "scale(1.1)",
    },
    thumbnailsContainer: {
      display: "none",
      justifyContent: "center",
      gap: "16px",
      marginTop: "40px",
      overflowX: "auto",
      paddingBottom: "8px",
      padding: "0 16px",
    },
    thumbnail: {
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    thumbnailActive: {
      boxShadow:
        "0 0 0 4px rgba(255, 255, 255, 0.6), 0 25px 50px rgba(0, 0, 0, 0.25)",
      transform: "scale(1.1)",
    },
    thumbnailInactive: {
      opacity: "0.5",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    thumbnailHover: {
      opacity: "0.8",
      transform: "scale(1.05)",
    },
    thumbnailImage: {
      width: "96px",
      height: "96px",
      objectFit: "cover",
      transition: "all 0.3s ease",
    },
    thumbnailOverlay: {
      position: "absolute",
      inset: "0",
      transition: "all 0.3s ease",
    },
    thumbnailOverlayActive: {
      background: "rgba(0, 0, 0, 0.1)",
    },
    thumbnailOverlayInactive: {
      background: "rgba(0, 0, 0, 0.4)",
    },
    thumbnailLabel: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
      padding: "8px",
    },
    thumbnailLabelText: {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "block",
    },
    progressBarContainer: {
      marginTop: "32px",
      width: "100%",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "9999px",
      height: "8px",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    progressBar: {
      background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
      height: "8px",
      borderRadius: "9999px",
      transition: "all 0.7s ease",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "24px",
    },
    infoText: {
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: "14px",
      fontWeight: "500",
    },
    hintsText: {
      marginTop: "24px",
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "12px",
    },
    // Media queries through inline styles
  "@media (max-width: 480px)": {
     carouselContainer: {
      position: "relative",
      maxWidth: "900vh",
      width: "100%",
    },
    },
    




    "@media (min-width: 768px)": {
      imageContainer: {
        height: "384px",
      },
      navButton: {
        padding: "16px",
      },
      navButtonLeft: {
        left: "24px",
      },
      navButtonRight: {
        right: "24px",
      },
      playButton: {
        padding: "12px",
      },
      caption: {
        padding: "32px",
      },
      hintsText: {
        fontSize: "14px",
      },
    },
    "@media (min-width: 1024px)": {
      imageContainer: {
        height: "500px",
      },
      thumbnailsContainer: {
        display: "flex",
      },
      caption: {
        padding: "40px",
      },
    },
    "@media (min-width: 1280px)": {
      imageContainer: {
        height: "600px",
      },
    },
  };

  // Responsive styles based on screen size
  const getResponsiveStyles = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;

      if (width >= 1280) {
        return {
          imageContainer: { ...styles.imageContainer, height: "600px" },
          thumbnailsContainer: {
            ...styles.thumbnailsContainer,
            display: "flex",
          },
          caption: { ...styles.caption, padding: "40px" },
        };
      } else if (width >= 1024) {
        return {
          imageContainer: { ...styles.imageContainer, height: "500px" },
          thumbnailsContainer: {
            ...styles.thumbnailsContainer,
            display: "flex",
          },
          caption: { ...styles.caption, padding: "40px" },
        };
      } else if (width >= 768) {
        return {
          imageContainer: { ...styles.imageContainer, height: "384px" },
          navButton: { ...styles.navButton, padding: "16px" },
          playButton: { ...styles.playButton, padding: "12px" },
          caption: { ...styles.caption, padding: "32px" },
        };
      }
    }

    return {
      imageContainer: styles.imageContainer,
      thumbnailsContainer: styles.thumbnailsContainer,
      caption: styles.caption,
      navButton: styles.navButton,
      playButton: styles.playButton,
    };
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <section id="Galeria" style={styles.section}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Galeria</h2>
        <p style={styles.subtitle}>Confira Algumas de Nossas Melhores Fotos!</p>
        <div style={styles.divider}></div>
      </div>

      {/* Carousel Container */}
      <div style={styles.carouselContainer}>
        {/* Main Carousel */}
        <div style={styles.carousel}>
          <div style={responsiveStyles.imageContainer}>
            {/* Current Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].alt}
                style={styles.image}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />

              {/* Gradient Overlays */}
              <div style={styles.gradientOverlay1}></div>
              <div style={styles.gradientOverlay2}></div>
            </div>

            {/* Caption */}
            <div style={responsiveStyles.caption}>
              <h3 style={styles.captionTitle}>
                {galleryItems[currentIndex].caption}
              </h3>
              <div style={styles.captionDivider}></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              style={{
                ...styles.navButton,
                ...styles.navButtonLeft,
                ...responsiveStyles.navButton,
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.navButtonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  ...styles.navButton,
                  ...styles.navButtonLeft,
                  ...responsiveStyles.navButton,
                });
              }}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              style={{
                ...styles.navButton,
                ...styles.navButtonRight,
                ...responsiveStyles.navButton,
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.navButtonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  ...styles.navButton,
                  ...styles.navButtonRight,
                  ...responsiveStyles.navButton,
                });
              }}
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>

            {/* Auto-play Control */}
            <button
              onClick={toggleAutoPlay}
              style={{
                ...styles.playButton,
                ...responsiveStyles.playButton,
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.playButtonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  ...styles.playButton,
                  ...responsiveStyles.playButton,
                });
              }}
              aria-label={
                isPlaying ? "Pausar apresentação" : "Iniciar apresentação"
              }
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div style={styles.dotsContainer}>
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={
                index === currentIndex
                  ? { ...styles.dot, ...styles.dotActive }
                  : styles.dot
              }
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  Object.assign(e.currentTarget.style, styles.dotHover);
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  Object.assign(e.currentTarget.style, styles.dot);
                }
              }}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div style={responsiveStyles.thumbnailsContainer}>
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                ...styles.thumbnail,
                ...(index === currentIndex
                  ? styles.thumbnailActive
                  : styles.thumbnailInactive),
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  Object.assign(e.currentTarget.style, {
                    ...styles.thumbnail,
                    ...styles.thumbnailInactive,
                    ...styles.thumbnailHover,
                  });
                }
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, {
                  ...styles.thumbnail,
                  ...(index === currentIndex
                    ? styles.thumbnailActive
                    : styles.thumbnailInactive),
                });
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={styles.thumbnailImage}
              />
              <div
                style={
                  index === currentIndex
                    ? {
                        ...styles.thumbnailOverlay,
                        ...styles.thumbnailOverlayActive,
                      }
                    : {
                        ...styles.thumbnailOverlay,
                        ...styles.thumbnailOverlayInactive,
                      }
                }
              ></div>

              {/* Thumbnail Label */}
              <div style={styles.thumbnailLabel}>
                <span style={styles.thumbnailLabelText}>{item.caption}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${((currentIndex + 1) / galleryItems.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Counter and Info */}
        <div style={styles.infoContainer}>
          <span style={styles.infoText}>
            {currentIndex + 1} de {galleryItems.length}
          </span>
          <span style={styles.infoText}>
            {isPlaying ? "Auto-play ativo" : "Auto-play pausado"}
          </span>
        </div>

        {/* Navigation Hints */}
        <div style={styles.hintsText}>
          <p>Use as setas do teclado ou clique nas miniaturas para navegar</p>
        </div>
      </div>
    </section>
  );
};

export default gallery;
