"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var GalleryItem = {
    src: "string",
    alt: "string",
    caption: "string",
};
var gallery = function () {
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = (0, react_1.useState)(true), isPlaying = _b[0], setIsPlaying = _b[1];
    var galleryItems = [
        {
            src: "../public/fotos/Galeria/foto-patata.png",
            alt: "Festas Temáticas",
            caption: "Festas Temáticas",
        },
        {
            src: "../public/fotos/Galeria/foto-bolha.png",
            alt: "Bubble House",
            caption: "Bubble House",
        },
        {
            src: "../public/fotos/Galeria/foto-pipocamickey.png",
            alt: "Embalagem Personalizada",
            caption: "Embalagem Personalizada",
        },
        {
            src: "../public/fotos/Galeria/foto-palhaçoalto.png",
            alt: "Tema Circus",
            caption: "Tema Circus",
        },
        {
            src: "../public/fotos/Galeria/maquina-de-bichinho-led.png",
            alt: "Máquinas de Bichinho",
            caption: "Máquinas de Bichinho",
        },
        {
            src: "../public/fotos/Galeria/sorvete2.png",
            alt: "Máquina de Sorvete",
            caption: "Máquina de Sorvete",
        },
        {
            src: "../public/fotos/Galeria/carrinhopipoca-mine.png",
            alt: "Carrinho Móvel",
            caption: "Carrinho Móvel",
        },
        {
            src: "../public/fotos/Galeria/tempero-maça-doce.png",
            alt: "Variedades de Temperos",
            caption: "Variedades de Temperos",
        },
    ];
    var goToPrevious = function () {
        setCurrentIndex(currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1);
    };
    var goToNext = function () {
        setCurrentIndex(currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1);
    };
    var toggleAutoPlay = function () {
        setIsPlaying(!isPlaying);
    };
    // Auto-play functionality
    (0, react_1.useEffect)(function () {
        if (!isPlaying)
            return;
        var interval = setInterval(function () {
            goToNext();
        }, 4000);
        return function () { return clearInterval(interval); };
    }, [currentIndex, isPlaying]);
    var styles = {
        section: {
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 16px",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.2), rgba(0, 0, 0, 0), rgba(30, 41, 59, 0.2))",
        },
        header: {
            textAlign: "center",
            marginBottom: "64px",
        },
        title: {
            fontSize: "clamp(3rem, 8vw, 4rem)",
            fontWeight: "bold",
            color: "white",
            marginBottom: "24px",
            textShadow: "0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.3)",
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
            width: "100%",
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
            background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent)",
        },
        gradientOverlay2: {
            position: "absolute",
            inset: "0",
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent, rgba(0, 0, 0, 0.3))",
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
            boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.6), 0 25px 50px rgba(0, 0, 0, 0.25)",
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
    var getResponsiveStyles = function () {
        if (typeof window !== "undefined") {
            var width = window.innerWidth;
            if (width >= 1280) {
                return {
                    imageContainer: __assign(__assign({}, styles.imageContainer), { height: "600px" }),
                    thumbnailsContainer: __assign(__assign({}, styles.thumbnailsContainer), { display: "flex" }),
                    caption: __assign(__assign({}, styles.caption), { padding: "40px" }),
                };
            }
            else if (width >= 1024) {
                return {
                    imageContainer: __assign(__assign({}, styles.imageContainer), { height: "500px" }),
                    thumbnailsContainer: __assign(__assign({}, styles.thumbnailsContainer), { display: "flex" }),
                    caption: __assign(__assign({}, styles.caption), { padding: "40px" }),
                };
            }
            else if (width >= 768) {
                return {
                    imageContainer: __assign(__assign({}, styles.imageContainer), { height: "384px" }),
                    navButton: __assign(__assign({}, styles.navButton), { padding: "16px" }),
                    playButton: __assign(__assign({}, styles.playButton), { padding: "12px" }),
                    caption: __assign(__assign({}, styles.caption), { padding: "32px" }),
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
    var responsiveStyles = getResponsiveStyles();
    return ((0, jsx_runtime_1.jsxs)("section", { id: "Galeria", style: styles.section, children: [(0, jsx_runtime_1.jsxs)("div", { style: styles.header, children: [(0, jsx_runtime_1.jsx)("h2", { style: styles.title, children: "Galeria" }), (0, jsx_runtime_1.jsx)("p", { style: styles.subtitle, children: "Confira Algumas de Nossas Melhores Fotos!" }), (0, jsx_runtime_1.jsx)("div", { style: styles.divider })] }), (0, jsx_runtime_1.jsxs)("div", { style: styles.carouselContainer, children: [(0, jsx_runtime_1.jsx)("div", { style: styles.carousel, children: (0, jsx_runtime_1.jsxs)("div", { style: responsiveStyles.imageContainer, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden",
                                    }, children: [(0, jsx_runtime_1.jsx)("img", { src: galleryItems[currentIndex].src, alt: galleryItems[currentIndex].alt, style: styles.image, onMouseEnter: function (e) {
                                                e.currentTarget.style.transform = "scale(1.05)";
                                            }, onMouseLeave: function (e) {
                                                e.currentTarget.style.transform = "scale(1)";
                                            } }), (0, jsx_runtime_1.jsx)("div", { style: styles.gradientOverlay1 }), (0, jsx_runtime_1.jsx)("div", { style: styles.gradientOverlay2 })] }), (0, jsx_runtime_1.jsxs)("div", { style: responsiveStyles.caption, children: [(0, jsx_runtime_1.jsx)("h3", { style: styles.captionTitle, children: galleryItems[currentIndex].caption }), (0, jsx_runtime_1.jsx)("div", { style: styles.captionDivider })] }), (0, jsx_runtime_1.jsx)("button", { onClick: goToPrevious, style: __assign(__assign(__assign({}, styles.navButton), styles.navButtonLeft), responsiveStyles.navButton), onMouseEnter: function (e) {
                                        Object.assign(e.currentTarget.style, styles.navButtonHover);
                                    }, onMouseLeave: function (e) {
                                        Object.assign(e.currentTarget.style, __assign(__assign(__assign({}, styles.navButton), styles.navButtonLeft), responsiveStyles.navButton));
                                    }, "aria-label": "Foto anterior", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { size: 24 }) }), (0, jsx_runtime_1.jsx)("button", { onClick: goToNext, style: __assign(__assign(__assign({}, styles.navButton), styles.navButtonRight), responsiveStyles.navButton), onMouseEnter: function (e) {
                                        Object.assign(e.currentTarget.style, styles.navButtonHover);
                                    }, onMouseLeave: function (e) {
                                        Object.assign(e.currentTarget.style, __assign(__assign(__assign({}, styles.navButton), styles.navButtonRight), responsiveStyles.navButton));
                                    }, "aria-label": "Pr\u00F3xima foto", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 24 }) }), (0, jsx_runtime_1.jsx)("button", { onClick: toggleAutoPlay, style: __assign(__assign({}, styles.playButton), responsiveStyles.playButton), onMouseEnter: function (e) {
                                        Object.assign(e.currentTarget.style, styles.playButtonHover);
                                    }, onMouseLeave: function (e) {
                                        Object.assign(e.currentTarget.style, __assign(__assign({}, styles.playButton), responsiveStyles.playButton));
                                    }, "aria-label": isPlaying ? "Pausar apresentação" : "Iniciar apresentação", children: isPlaying ? (0, jsx_runtime_1.jsx)(lucide_react_1.Pause, { size: 20 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.Play, { size: 20 }) })] }) }), (0, jsx_runtime_1.jsx)("div", { style: styles.dotsContainer, children: galleryItems.map(function (_, index) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCurrentIndex(index); }, style: index === currentIndex
                                ? __assign(__assign({}, styles.dot), styles.dotActive) : styles.dot, onMouseEnter: function (e) {
                                if (index !== currentIndex) {
                                    Object.assign(e.currentTarget.style, styles.dotHover);
                                }
                            }, onMouseLeave: function (e) {
                                if (index !== currentIndex) {
                                    Object.assign(e.currentTarget.style, styles.dot);
                                }
                            }, "aria-label": "Ir para foto ".concat(index + 1) }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { style: responsiveStyles.thumbnailsContainer, children: galleryItems.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("button", { onClick: function () { return setCurrentIndex(index); }, style: __assign(__assign({}, styles.thumbnail), (index === currentIndex
                                ? styles.thumbnailActive
                                : styles.thumbnailInactive)), onMouseEnter: function (e) {
                                if (index !== currentIndex) {
                                    Object.assign(e.currentTarget.style, __assign(__assign(__assign({}, styles.thumbnail), styles.thumbnailInactive), styles.thumbnailHover));
                                }
                            }, onMouseLeave: function (e) {
                                Object.assign(e.currentTarget.style, __assign(__assign({}, styles.thumbnail), (index === currentIndex
                                    ? styles.thumbnailActive
                                    : styles.thumbnailInactive)));
                            }, children: [(0, jsx_runtime_1.jsx)("img", { src: item.src, alt: item.alt, style: styles.thumbnailImage }), (0, jsx_runtime_1.jsx)("div", { style: index === currentIndex
                                        ? __assign(__assign({}, styles.thumbnailOverlay), styles.thumbnailOverlayActive) : __assign(__assign({}, styles.thumbnailOverlay), styles.thumbnailOverlayInactive) }), (0, jsx_runtime_1.jsx)("div", { style: styles.thumbnailLabel, children: (0, jsx_runtime_1.jsx)("span", { style: styles.thumbnailLabelText, children: item.caption }) })] }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { style: styles.progressBarContainer, children: (0, jsx_runtime_1.jsx)("div", { style: __assign(__assign({}, styles.progressBar), { width: "".concat(((currentIndex + 1) / galleryItems.length) * 100, "%") }) }) }), (0, jsx_runtime_1.jsxs)("div", { style: styles.infoContainer, children: [(0, jsx_runtime_1.jsxs)("span", { style: styles.infoText, children: [currentIndex + 1, " de ", galleryItems.length] }), (0, jsx_runtime_1.jsx)("span", { style: styles.infoText, children: isPlaying ? "Auto-play ativo" : "Auto-play pausado" })] }), (0, jsx_runtime_1.jsx)("div", { style: styles.hintsText, children: (0, jsx_runtime_1.jsx)("p", { children: "Use as setas do teclado ou clique nas miniaturas para navegar" }) })] })] }));
};
exports.default = gallery;
