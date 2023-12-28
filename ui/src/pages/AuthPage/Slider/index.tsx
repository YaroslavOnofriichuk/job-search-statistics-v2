import { useEffect, useState, useRef } from "react";
import { Slider as SliderStyled } from "./Slider";

export const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [slideWidth, setSlideWidth] = useState(1);
    const ref = useRef<HTMLDivElement>(null);
    const baseUrl = import.meta.env.VITE_API_HOST + "/";

    const move = () => {
        console.log("MOVE");
        setActiveSlide((prevSlide) => (prevSlide > 4 ? 1 : prevSlide + 1));
    };

    const handleResize = () => {
        console.log("RESIZE");
        setSlideWidth(ref.current?.offsetWidth || 1);
    };

    useEffect(() => {
        const interval = setInterval(move, 3000);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <SliderStyled ref={ref}>
            {/* <li>
                <picture>
                    <source
                        media="(min-width: 1170px)"
                        srcSet={baseUrl + "desc-dark-eng-create.webp"}
                        type="image/webp"
                    />
                    <source
                        media="(min-width: 1170px)"
                        srcSet={baseUrl + "desc-dark-eng-create.jpg"}
                    />

                    <source
                        media="(min-width: 200px)"
                        srcSet={baseUrl + "mob-dark-eng-create.webp"}
                        type="image/webp"
                    />
                    <source
                        media="(min-width: 200px)"
                        srcSet={baseUrl + "mob-dark-eng-create.jpg"}
                    />
                    <img src="#" alt="create image" />
                </picture>
            </li> */}

            <ul
                className="slider-inner"
                style={{
                    width: slideWidth * 5,
                    transform: `translateX(-${slideWidth * activeSlide}px)`,
                }}
            >
                <li
                    className={activeSlide === 1 ? "active slide" : "slide"}
                    style={{ width: slideWidth }}
                >
                    1
                </li>
                <li
                    className={activeSlide === 2 ? "active slide" : "slide"}
                    style={{ width: slideWidth }}
                >
                    2
                </li>
                <li
                    className={activeSlide === 3 ? "active slide" : "slide"}
                    style={{ width: slideWidth }}
                >
                    3
                </li>
                <li
                    className={activeSlide === 4 ? "active slide" : "slide"}
                    style={{ width: slideWidth }}
                >
                    4
                </li>
                <li
                    className={activeSlide === 5 ? "active slide" : "slide"}
                    style={{ width: slideWidth }}
                >
                    5
                </li>
            </ul>

            <ul className="slider-nav">
                <li
                    className={activeSlide === 1 ? "active" : ""}
                    onClick={() => setActiveSlide(1)}
                ></li>
                <li
                    className={activeSlide === 2 ? "active" : ""}
                    onClick={() => setActiveSlide(2)}
                ></li>
                <li
                    className={activeSlide === 3 ? "active" : ""}
                    onClick={() => setActiveSlide(3)}
                ></li>
                <li
                    className={activeSlide === 4 ? "active" : ""}
                    onClick={() => setActiveSlide(4)}
                ></li>
                <li
                    className={activeSlide === 5 ? "active" : ""}
                    onClick={() => setActiveSlide(5)}
                ></li>
            </ul>
        </SliderStyled>
    );
};
