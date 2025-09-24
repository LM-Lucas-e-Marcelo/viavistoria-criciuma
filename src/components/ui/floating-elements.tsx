import { useEffect, useState } from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "rotate";
}

export const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  duration = 3,
  direction = "up",
}: FloatingElementProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-in-out";

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClass} opacity-0 translate-y-8`;
        case "down":
          return `${baseClass} opacity-0 -translate-y-8`;
        case "left":
          return `${baseClass} opacity-0 translate-x-8`;
        case "right":
          return `${baseClass} opacity-0 -translate-x-8`;
        case "rotate":
          return `${baseClass} opacity-0 rotate-12 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }

    switch (direction) {
      case "up":
        return `${baseClass} opacity-100 translate-y-0`;
      case "down":
        return `${baseClass} opacity-100 translate-y-0`;
      case "left":
        return `${baseClass} opacity-100 translate-x-0`;
      case "right":
        return `${baseClass} opacity-100 translate-x-0`;
      case "rotate":
        return `${baseClass} opacity-100 rotate-0 scale-100`;
      default:
        return `${baseClass} opacity-100 translate-y-0`;
    }
  };

  return (
    <div
      className={`${getAnimationClass()} ${className}`}
      style={{
        animation: isVisible
          ? `float-${direction} ${duration}s ease-in-out infinite`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

// Componente para elementos decorativos flutuantes
export const FloatingDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Elementos decorativos com diferentes animações */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="h-2 w-2 bg-blue-400/30 rounded-full"></div>
      </div>
      <div
        className="absolute top-40 right-20 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <div className="h-3 w-3 bg-emerald-400/20 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-40 left-20 animate-ping"
        style={{ animationDuration: "4s" }}
      >
        <div className="h-1 w-1 bg-primary/40 rounded-full"></div>
      </div>
      <div
        className="absolute top-60 left-1/4 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <div className="h-2 w-2 bg-yellow-400/25 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-60 right-1/4 animate-bounce"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      >
        <div className="h-2 w-2 bg-purple-400/20 rounded-full"></div>
      </div>
    </div>
  );
};

// Componente para ondas animadas
export const AnimatedWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-primary/20"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-primary/10"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-primary/5"
        />
      </svg>
    </div>
  );
};

// Componente para gradiente animado
export const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-10 opacity-50">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};
