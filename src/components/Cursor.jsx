"use client";
import { useEffect, useRef } from "react";

const cord = { x: -22, y: -22 };

export default function CustomCursor() {
    const circlesRef = useRef([]);

    useEffect(() => {
        // Init positions
        circlesRef.current.forEach(circle => {
            if (!circle) return;
            circle.x = 0;
            circle.y = 0;
        });

        const handleMouseMove = (e) => {
            cord.x = e.clientX;
            cord.y = e.clientY;
        };

        const handleClick = () => {
            circlesRef.current.forEach(circle => {
                if (!circle) return;
                circle.classList.add("click-pop");
                setTimeout(() => {
                    circle.classList.remove("click-pop");
                }, 150);
            });
        };

        const hideCircles = () => {
            circlesRef.current.forEach(circle => {
                if (circle) circle.style.opacity = "0";
            });
        };

        const showCircles = () => {
            circlesRef.current.forEach(circle => {
                if (circle) circle.style.opacity = "1";
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("mouseout", hideCircles);
        window.addEventListener("mouseover", showCircles);

        const animateCircles = () => {
            let x = cord.x;
            let y = cord.y;

            circlesRef.current.forEach((circle, index) => {
                if (!circle) return;

                circle.style.left = `${x - 13}px`;
                circle.style.top = `${y - 9}px`;
                circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;

                circle.x = x;
                circle.y = y;

                const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("mouseout", hideCircles);
            window.removeEventListener("mouseover", showCircles);
        };
    }, []);

    return (
        <>
            {Array.from({ length: 11 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (circlesRef.current[i] = el)}
                    className="circle h-7 w-7 rounded-full bg-black fixed top-0 left-0 pointer-events-none transition-transform duration-150 opacity-100"
                />
            ))}
        </>
    );
}

