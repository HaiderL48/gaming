import React, { useEffect, useRef, useState } from "react";
import NewButton from "./NewButton";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const NavBar = () => {
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const navContainerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisibility, setIsNavVisibility] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisibility(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisibility(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisibility(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisibility ? 0 : -100,
      opacity: isNavVisibility ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisibility]);

  const audioElementRef = useRef(null);
  const [isAudeoPlaying, setIsAudeoPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const toggleAudioIndicator = () => {
    setIsAudeoPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  useEffect(() => {
    if (isAudeoPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudeoPlaying]);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="Logo" className="w-10 " />
            <NewButton
              id="product-button"
              title="Products"
              leftIconIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center ">
            <div className="hidden md:block">
              {navItems.map((navItem, index) => (
                <a
                  key={index}
                  href={`#${navItem.toLocaleLowerCase()}`}
                  className="nav-hover-btn "
                >
                  {navItem}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center sapce-x-[0.5]"
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                loop
                className="hidden"
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`${
                    isIndicatorActive ? "active" : ""
                  } indicator-line `}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
