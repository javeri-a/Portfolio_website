// "use client";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     const showCursor = () => setVisible(true);
//     const hideCursor = () => setVisible(false);

//     document.addEventListener("mousemove", updatePosition);
//     document.addEventListener("mouseenter", showCursor);
//     document.addEventListener("mouseleave", hideCursor);

//     return () => {
//       document.removeEventListener("mousemove", updatePosition);
//       document.removeEventListener("mouseenter", showCursor);
//       document.removeEventListener("mouseleave", hideCursor);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ease-out ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//       style={{
//         transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
//       }}
//     >
//       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-60 blur-xl animate-spin-slow" />
//     </div>
//   );
// }



// "use client";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const [isHovering, setIsHovering] = useState(false);

//   const springConfig = { damping: 20, stiffness: 300 };
//   const x = useSpring(cursorX, springConfig);
//   const y = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       cursorX.set(e.clientX - 16); // offset for centering
//       cursorY.set(e.clientY - 16);
//     };

//     const hoverTargets = document.querySelectorAll("a, button, .hover-target");
//     hoverTargets.forEach(el =>
//       el.addEventListener("mouseenter", () => setIsHovering(true))
//     );
//     hoverTargets.forEach(el =>
//       el.addEventListener("mouseleave", () => setIsHovering(false))
//     );

//     window.addEventListener("mousemove", moveCursor);
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, [cursorX, cursorY]);

//   return (
//     <motion.div
//       className={`pointer-events-none fixed top-0 left-0 z-[9999] ${
//         isHovering ? "mix-blend-difference" : ""
//       }`}
//       style={{ x, y }}
//     >
//       <div
//         className={`w-8 h-8 rounded-full backdrop-blur-md bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 ${
//           isHovering
//             ? "scale-150 blur-md shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-transform duration-150"
//             : "scale-100 opacity-70"
//         } transition-all duration-200`}
//       ></div>
//     </motion.div>
//   );
// }




// "use client";
// import { useEffect, useRef } from "react";

// export default function CustomCursor() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const coords: { x: number; y: number }[] = [];
//   const maxLength = 30;

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", resize);

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       ctx.beginPath();
//       ctx.moveTo(coords[0]?.x || 0, coords[0]?.y || 0);
//       for (let i = 1; i < coords.length; i++) {
//         ctx.lineTo(coords[i].x, coords[i].y);
//       }

//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       gradient.addColorStop(0, "#00f0ff");
//       gradient.addColorStop(0.5, "#8e44ad");
//       gradient.addColorStop(1, "#00f0ff");

//       ctx.strokeStyle = gradient;
//       ctx.lineWidth = 3;
//       ctx.shadowBlur = 12;
//       ctx.shadowColor = "#00f0ff";
//       ctx.lineCap = "round";
//       ctx.stroke();
//     };

//     const animate = () => {
//       draw();
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       coords.push({ x: e.clientX, y: e.clientY });
//       if (coords.length > maxLength) coords.shift();
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
//     />
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    
    // Follower position
    let followerX = 0;
    let followerY = 0;
    
    // Cursor position
    let cursorX = 0;
    let cursorY = 0;
    
    // Animation frame ID
    let animationFrameId: number;

    // Speed factors
    const cursorSpeed = 0.2;
    const followerSpeed = 0.1;

    const animate = () => {
      // Move cursor
      cursorX += (mouseX - cursorX) * cursorSpeed;
      cursorY += (mouseY - cursorY) * cursorSpeed;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      // Move follower with more delay
      followerX += (mouseX - followerX) * followerSpeed;
      followerY += (mouseY - followerY) * followerSpeed;
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add hover state for interactive elements
    const handleLinkHover = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    // Initialize
    animate();
    handleLinkHover();
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${
          isHovering ? "bg-transparent scale-150" : "bg-white scale-100"
        } ${
          isClicking ? "scale-75" : ""
        }`}
      />
      
      {/* Follower circle */}
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${
          isHovering
            ? "bg-white/20 scale-150 border border-white/50"
            : "bg-transparent scale-100 border border-white/30"
        } ${
          isClicking ? "scale-90" : ""
        }`}
      />
      
      {/* Custom styles for hover states */}
      <style jsx global>{`
        html {
          cursor: none !important;
        }
        a, button, input, textarea, select, [role="button"], [data-cursor-hover] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}


// "use client";
// import { useEffect, useRef, useState } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   size: number;
//   speedX: number;
//   speedY: number;
//   color: string;
//   life: number;
//   opacity: number;
// }

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const particlesRef = useRef<HTMLCanvasElement>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const particles = useRef<Particle[]>([]);
//   const chars = useRef<string[]>(["</>", "{}", "=>", "()", "[]", "++", "#", "/*", "||"]);

//   // Generate random code-like characters
//   const getRandomChar = () => {
//     return chars.current[Math.floor(Math.random() * chars.current.length)];
//   };

//   // Create particles
//   const createParticles = (x: number, y: number, count: number) => {
//     for (let i = 0; i < count; i++) {
//       particles.current.push({
//         x,
//         y,
//         size: Math.random() * 4 + 2,
//         speedX: Math.random() * 4 - 2,
//         speedY: Math.random() * 4 - 2,
//         color: `hsl(${Math.random() * 60 + 180}, 100%, 50%)`,
//         life: Math.random() * 60 + 40,
//         opacity: 1,
//       });
//     }
//   };

//   // Update particles
//   const updateParticles = () => {
//     const ctx = particlesRef.current?.getContext("2d");
//     if (!ctx) return;

//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

//     for (let i = 0; i < particles.current.length; i++) {
//       const p = particles.current[i];
//       p.x += p.speedX;
//       p.y += p.speedY;
//       p.life--;
//       p.opacity = p.life / 100;

//       if (p.life <= 0) {
//         particles.current.splice(i, 1);
//         i--;
//         continue;
//       }

//       ctx.fillStyle = p.color;
//       ctx.globalAlpha = p.opacity;
//       ctx.font = `${p.size}px monospace`;
//       ctx.fillText(getRandomChar(), p.x, p.y);
//     }
//   };

//   useEffect(() => {
//     if (!cursorRef.current || !particlesRef.current) return;

//     const canvas = particlesRef.current;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let mouseX = 0;
//     let mouseY = 0;
//     let cursorX = 0;
//     let cursorY = 0;
//     let animationFrameId: number;

//     const animate = () => {
//       // Smooth cursor movement
//       cursorX += (mouseX - cursorX) * 0.2;
//       cursorY += (mouseY - cursorY) * 0.2;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
//       }

//       // Emit particles when moving
//       if (Math.abs(mouseX - cursorX) > 1 || Math.abs(mouseY - cursorY) > 1) {
//         createParticles(cursorX, cursorY, 1);
//       }

//       updateParticles();
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => {
//       setIsClicking(true);
//       createParticles(mouseX, mouseY, 10); // Burst effect on click
//     };

//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     const handleHover = () => {
//       const hoverElements = document.querySelectorAll(
//         "a, button, input, [data-cursor-hover]"
//       );
//       hoverElements.forEach((el) => {
//         el.addEventListener("mouseenter", () => setIsHovering(true));
//         el.addEventListener("mouseleave", () => setIsHovering(false));
//       });
//     };

//     const handleResize = () => {
//       if (particlesRef.current) {
//         particlesRef.current.width = window.innerWidth;
//         particlesRef.current.height = window.innerHeight;
//       }
//     };

//     // Initialize
//     animate();
//     handleHover();
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Cursor (Terminal-Themed) */}
//       <div
//         ref={cursorRef}
//         className={`fixed w-6 h-6 rounded-sm pointer-events-none z-[9999] flex items-center justify-center transition-all duration-100 ease-out ${
//           isHovering
//             ? "bg-green-500 scale-150"
//             : "bg-blue-500 scale-100"
//         } ${
//           isClicking ? "scale-75 bg-red-500" : ""
//         }`}
//       >
//         <span className="text-xs font-mono text-white">
//           {isHovering ? "→" : "▋"}
//         </span>
//       </div>

//       {/* Particle Canvas (Floating Code Snippets) */}
//       <canvas
//         ref={particlesRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] opacity-80"
//       />

//       {/* Hide default cursor globally */}
//       <style jsx global>{`
//         html, body, a, button {
//           cursor: none !important;
//         }
//       `}</style>
//     </>
//   );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   size: number;
//   speedX: number;
//   speedY: number;
//   color: string;
//   life: number;
//   text: string;
// }

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const particleCanvasRef = useRef<HTMLCanvasElement>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const particles = useRef<Particle[]>([]);

//   // Python & AI-related keywords
//   const pythonKeywords = [
//     "import", "def", "lambda", "async", "await", "Tensor", "model", 
//     "np.", "pd.", "plt.", "AI()", "Flask", "Django", "FastAPI"
//   ];

//   const getRandomKeyword = () => 
//     pythonKeywords[Math.floor(Math.random() * pythonKeywords.length)];

//   // Create particles (floating Python code)
//   const createParticles = (x: number, y: number, count: number) => {
//     for (let i = 0; i < count; i++) {
//       particles.current.push({
//         x,
//         y,
//         size: Math.random() * 14 + 10,
//         speedX: Math.random() * 2 - 1,
//         speedY: Math.random() * 2 - 1,
//         color: `hsl(${Math.random() * 60 + 200}, 100%, 60%)`,
//         life: Math.random() * 100 + 50,
//         text: getRandomKeyword(),
//       });
//     }
//   };

//   // Update and draw particles
//   const updateParticles = () => {
//     const ctx = particleCanvasRef.current?.getContext("2d");
//     if (!ctx || !particleCanvasRef.current) return;

//     ctx.clearRect(0, 0, particleCanvasRef.current.width, particleCanvasRef.current.height);

//     particles.current.forEach((p, i) => {
//       p.x += p.speedX;
//       p.y += p.speedY;
//       p.life--;
//       p.speedY -= 0.05; // Gravity effect

//       if (p.life <= 0) {
//         particles.current.splice(i, 1);
//         return;
//       }

//       ctx.fillStyle = p.color;
//       ctx.font = `${p.size}px 'Fira Code', monospace`;
//       ctx.globalAlpha = p.life / 100;
//       ctx.fillText(p.text, p.x, p.y);
//     });
//   };

//   useEffect(() => {
//     if (!cursorRef.current || !particleCanvasRef.current) return;

//     const canvas = particleCanvasRef.current;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let cursorX = 0;
//     let cursorY = 0;
//     let animationFrameId: number;

//     const animate = () => {
//       // Smooth cursor movement
//       cursorX += (mousePos.x - cursorX) * 0.1;
//       cursorY += (mousePos.y - cursorY) * 0.1;

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
//       }

//       // Spawn particles while moving
//       if (
//         Math.abs(mousePos.x - cursorX) > 2 || 
//         Math.abs(mousePos.y - cursorY) > 2
//       ) {
//         createParticles(cursorX, cursorY, 1);
//       }

//       updateParticles();
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => {
//       setIsClicking(true);
//       createParticles(mousePos.x, mousePos.y, 15); // Code explosion on click
//     };

//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     const handleHover = () => {
//       const hoverElements = document.querySelectorAll(
//         "a, button, [data-cursor-hover]"
//       );
//       hoverElements.forEach((el) => {
//         el.addEventListener("mouseenter", () => setIsHovering(true));
//         el.addEventListener("mouseleave", () => setIsHovering(false));
//       });
//     };

//     // Start animation
//     animate();
//     handleHover();
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [mousePos]);

//   return (
//     <>
//       {/* Main Cursor (Python Logo Style) */}
//       <div
//         ref={cursorRef}
//         className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-all duration-100 ease-out ${
//           isHovering
//             ? "bg-yellow-400 scale-150 shadow-[0_0_20px_5px_rgba(255,215,0,0.7)]"
//             : "bg-blue-500 scale-100 shadow-[0_0_15px_3px_rgba(65,105,225,0.6)]"
//         } ${
//           isClicking ? "scale-90 bg-green-500 shadow-[0_0_25px_10px_rgba(50,205,50,0.8)]" : ""
//         }`}
//       >
//         <span className="text-xs font-bold font-mono text-black">
//           {isHovering ? ">>>" : "Py"}
//         </span>
//       </div>

//       {/* Floating Python Code Particles */}
//       <canvas
//         ref={particleCanvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] opacity-90"
//       />

//       {/* Hide default cursor globally */}
//       <style jsx global>{`
//         html, body * {
//           cursor: none !important;
//         }
//       `}</style>
//     </>
//   );
// }


// "use client";
// import { useEffect, useRef } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   alpha: number;
//   text: string;
//   size: number;
//   vx: number;
//   vy: number;
// }

// const texts = ["<AI>", "def", "import", "λ", ">>", "Neural", "fastAPI", "GPT"];

// function getRandomText() {
//   return texts[Math.floor(Math.random() * texts.length)];
// }

// export default function WowCursor() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const points = useRef<{ x: number; y: number }[]>([]);
//   const particles = useRef<Particle[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", resize);

//     let mouse = { x: 0, y: 0 };

//     const drawTrail = () => {
//       if (points.current.length < 2) return;

//       ctx.beginPath();
//       ctx.moveTo(points.current[0].x, points.current[0].y);
//       for (let i = 1; i < points.current.length; i++) {
//         ctx.lineTo(points.current[i].x, points.current[i].y);
//       }

//       ctx.strokeStyle = "rgba(0, 255, 255, 0.4)";
//       ctx.lineWidth = 2;
//       ctx.shadowBlur = 12;
//       ctx.shadowColor = "cyan";
//       ctx.stroke();
//     };

//     const updateParticles = () => {
//       for (let i = particles.current.length - 1; i >= 0; i--) {
//         const p = particles.current[i];
//         p.x += p.vx;
//         p.y += p.vy;
//         p.alpha -= 0.01;
//         if (p.alpha <= 0) {
//           particles.current.splice(i, 1);
//         }
//       }
//     };

//     const drawParticles = () => {
//       particles.current.forEach((p) => {
//         ctx.globalAlpha = p.alpha;
//         ctx.fillStyle = "cyan";
//         ctx.font = `${p.size}px 'Fira Code', monospace`;
//         ctx.fillText(p.text, p.x, p.y);
//       });
//       ctx.globalAlpha = 1;
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       drawTrail();
//       updateParticles();
//       drawParticles();

//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse = { x: e.clientX, y: e.clientY };
//       points.current.push(mouse);
//       if (points.current.length > 20) points.current.shift();

//       // Add text particle
//       particles.current.push({
//         x: mouse.x,
//         y: mouse.y,
//         alpha: 1,
//         text: getRandomText(),
//         size: 12 + Math.random() * 4,
//         vx: (Math.random() - 0.5) * 1,
//         vy: (Math.random() - 0.5) * 1,
//       });
//     };

//     const handleClick = () => {
//       // Explode particles
//       for (let i = 0; i < 20; i++) {
//         particles.current.push({
//           x: mouse.x,
//           y: mouse.y,
//           alpha: 1,
//           text: getRandomText(),
//           size: 14 + Math.random() * 8,
//           vx: (Math.random() - 0.5) * 4,
//           vy: (Math.random() - 0.5) * 4,
//         });
//       }
//     };

//     animate();
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <>
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
//       />
//       <style jsx global>{`
//         html, body {
//           cursor: none !important;
//         }
//       `}</style>
//     </>
//   );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const trailRef = useRef<SVGPathElement>(null);
//   const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

//   useEffect(() => {
//     let rafId: number;

//     const handleMouseMove = (e: MouseEvent) => {
//       setPoints((oldPoints) => {
//         const newPoints = [...oldPoints, { x: e.clientX, y: e.clientY }];
//         // Keep max 20 points for smooth trail
//         if (newPoints.length > 20) newPoints.shift();
//         return newPoints;
//       });
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
//       }
//     };

//     const updatePath = () => {
//       if (!trailRef.current) return;

//       const pts = points;
//       if (pts.length < 2) {
//         rafId = requestAnimationFrame(updatePath);
//         return;
//       }

//       // Generate smooth SVG path using quadratic bezier curves
//       let d = `M${pts[0].x} ${pts[0].y}`;
//       for (let i = 1; i < pts.length - 2; i++) {
//         const cX = (pts[i].x + pts[i + 1].x) / 2;
//         const cY = (pts[i].y + pts[i + 1].y) / 2;
//         d += ` Q${pts[i].x} ${pts[i].y} ${cX} ${cY}`;
//       }
//       // Last two points
//       d += ` T${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;

//       trailRef.current.setAttribute("d", d);

//       rafId = requestAnimationFrame(updatePath);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     rafId = requestAnimationFrame(updatePath);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(rafId);
//     };
//   }, [points]);

//   return (
//     <>
//       {/* Cursor Dot */}
//       <div
//         ref={cursorRef}
//         className="fixed w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/70 pointer-events-none top-0 left-0 z-[9999] transition-transform duration-100 ease-out"
//       ></div>

//       {/* SVG Trail */}
//       <svg
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
//         style={{ overflow: "visible" }}
//       >
//         <path
//           ref={trailRef}
//           fill="none"
//           stroke="cyan"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{
//             filter: "drop-shadow(0 0 10px cyan)",
//             transition: "stroke-width 0.3s ease",
//           }}
//         />
//       </svg>

//       {/* Hide default cursor */}
//       <style jsx global>{`
//         html,
//         body,
//         * {
//           cursor: none !important;
//         }
//       `}</style>
//     </>
//   );
// }
