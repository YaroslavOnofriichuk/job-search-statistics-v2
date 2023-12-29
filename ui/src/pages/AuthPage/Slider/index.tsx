import { useEffect, useState, useRef } from "react";
import { Slider as SliderStyled } from "./Slider";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

const slides = ["create", "list", "edit", "cal", "stat"];

export const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [slideWidth, setSlideWidth] = useState(1);
    const ref = useRef<HTMLDivElement>(null);
    const { t, i18n } = useTranslation("pages/auth");
    const { mode } = useTheme();
    const baseUrl = import.meta.env.VITE_API_HOST;

    const move = () => {
        setActiveSlide((prevSlide) => (prevSlide >= slides.length ? 1 : prevSlide + 1));
    };

    const handleResize = () => {
        setSlideWidth(ref.current?.offsetWidth || 1);
    };

    useEffect(() => {
        const interval = setInterval(move, 5000);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <SliderStyled ref={ref}>
            <ul
                className="slider-inner"
                style={{
                    width: slideWidth * slides.length,
                    transform: `translateX(-${slideWidth * activeSlide}px) translateZ(0)`,
                }}
            >
                {slides.map((slide, index) => (
                    <li
                        key={slide}
                        className={activeSlide === index + 1 ? "active slide" : "slide"}
                        style={{ width: slideWidth, left: slideWidth * (index + 1) }}
                    >
                        <picture>
                            <source
                                media="(min-width: 767px)"
                                srcSet={`${baseUrl}/desc-${mode}-${i18n.language}-${slide}.webp`}
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 767px)"
                                srcSet={`${baseUrl}/desc-${mode}-${i18n.language}-${slide}.jpg`}
                            />

                            <source
                                media="(min-width: 200px)"
                                srcSet={`${baseUrl}/mob-${mode}-${i18n.language}-${slide}.webp`}
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 200px)"
                                srcSet={`${baseUrl}/mob-${mode}-${i18n.language}-${slide}.jpg`}
                            />
                            <img src="#" alt={"image " + slide} width={slideWidth}/>
                        </picture>
                        <div><p>{t(`slides.${slide}`)}</p></div>
                    </li>
                ))}
            </ul>

            <ul className="slider-nav">
                {slides.map((slide, index) => (
                    <li
                        key={slide}
                        className={activeSlide === index + 1 ? "active" : ""}
                        onClick={() => setActiveSlide(index + 1)}
                    ></li>
                ))}
            </ul>
        </SliderStyled>
    );
};
