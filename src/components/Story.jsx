import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import NewButton from "./NewButton";

const Story = () => {
  const frameRef = useRef("null");
  const element = frameRef.current;

  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * -10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="overflow-hidden min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col item-center py-10 pb-24">
        <p className="font-general text-sm text-center uppercase md:text-[10px]">
          The Multiversal IP World
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            secondId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            title="The St<b>o</b>ry of<br/>a hidden real<b>m</b>"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />


          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">

          <div className="flex flex-col h-full w-fit  items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Where realms converge, lies Zentry and the boundless pillar. Disover its secrets and shape your fate amidst opportunities</p>
          <NewButton id="realm-button"  title="discover prologue" containerClass="mt-5 !bg-violet-50 !text-black"/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
