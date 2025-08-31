"use client";
import { useEffect, useRef, useState } from "react";

const cord = { x: -22, y: -22 };

export default function CustomCursor() {
    const circlesRef = useRef([]);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const touchActive = useRef(false); // Whether the user is currently touching

    useEffect(() => {
        const checkTouchDevice = () => {
            const isTouch =
                typeof window !== "undefined" &&
                ("ontouchstart" in window || navigator.maxTouchPoints > 0);
            setIsTouchDevice(isTouch);
        };

        checkTouchDevice();

        circlesRef.current.forEach(circle => {
            if (!circle) return;
            circle.x = 0;
            circle.y = 0;
        });

        const updateCoords = (x, y) => {
            cord.x = x;
            cord.y = y;
        };

        // 🖱️ Desktop Mouse Events
        const handleMouseMove = (e) => {
            updateCoords(e.clientX, e.clientY);
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

        // 👆 Touch Events
        const handleTouchStart = (e) => {
            touchActive.current = true;
            const touch = e.touches[0];
            updateCoords(touch.clientX, touch.clientY);
            showCircles();
        };

        const handleTouchMove = (e) => {
            if (!touchActive.current) return;
            const touch = e.touches[0];
            updateCoords(touch.clientX, touch.clientY);
        };

        const handleTouchEnd = () => {
            touchActive.current = false;
            hideCircles();
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

        // 🎥 Animation Loop
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
                x += (nextCircle.x - x) * 0.35;
                y += (nextCircle.y - y) * 0.35;
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();

        // ✅ Add Event Listeners
        if (isTouchDevice) {
            window.addEventListener("touchstart", handleTouchStart);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("touchend", handleTouchEnd);
            window.addEventListener("touchcancel", handleTouchEnd);
        } else {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("click", handleClick);
            window.addEventListener("mouseout", hideCircles);
            window.addEventListener("mouseover", showCircles);
        }

        // ✅ Cleanup
        return () => {
            if (isTouchDevice) {
                window.removeEventListener("touchstart", handleTouchStart);
                window.removeEventListener("touchmove", handleTouchMove);
                window.removeEventListener("touchend", handleTouchEnd);
                window.removeEventListener("touchcancel", handleTouchEnd);
            } else {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("click", handleClick);
                window.removeEventListener("mouseout", hideCircles);
                window.removeEventListener("mouseover", showCircles);
            }
        };
    }, [isTouchDevice]);

    return (
        <>
            {Array.from({ length: 11 }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (circlesRef.current[i] = el)}
                    className="circle h-7 w-7 rounded-full bg-black fixed top-0 left-0 pointer-events-none transition-transform duration-150 opacity-0"
                />
            ))}
        </>
    );
}

