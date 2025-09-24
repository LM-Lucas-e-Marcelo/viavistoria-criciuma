import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: "waves" | "dots" | "grid" | "gradient" | "geometric";
}

export const AnimatedBackground = ({
  children,
  className = "",
  variant = "waves",
}: AnimatedBackgroundProps) => {
  const renderBackground = () => {
    switch (variant) {
      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-32"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".1"
                className="fill-primary/20 animate-pulse"
              />
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".2"
                className="fill-primary/10 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </svg>
          </div>
        );

      case "dots":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse"></div>
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.1)_1px,transparent_0)] bg-[length:40px_40px] animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        );

      case "grid":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        );

      case "gradient":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 opacity-30">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
          </div>
        );

      case "geometric":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-20 right-20 w-16 h-16 bg-emerald-500/10 rounded-full animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-10 right-10 w-12 h-12 bg-primary/10 rounded-full animate-bounce"
              style={{ animationDuration: "6s", animationDelay: "3s" }}
            ></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderBackground()}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Componente para transições entre seções
export const SectionTransition = ({
  variant = "waves",
  className = "",
}: {
  variant?: "waves" | "dots" | "grid" | "gradient" | "geometric";
  className?: string;
}) => {
  const renderTransition = () => {
    switch (variant) {
      case "waves":
        return (
          <div className="h-20 w-full overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".1"
                className="fill-primary/20"
              />
            </svg>
          </div>
        );

      case "dots":
        return (
          <div className="h-20 w-full bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30">
            <div className="h-full bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
          </div>
        );

      case "grid":
        return (
          <div className="h-20 w-full bg-gradient-to-r from-slate-50/50 via-white to-blue-50/30">
            <div className="h-full bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          </div>
        );

      case "gradient":
        return (
          <div className="h-20 w-full bg-gradient-to-r from-primary/5 via-emerald-500/5 to-primary/5">
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        );

      case "geometric":
        return (
          <div className="h-20 w-full bg-gradient-to-r from-blue-50/20 via-white to-emerald-50/20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/10 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-emerald-500/10 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500/10 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
          </div>
        );

      default:
        return (
          <div className="h-20 w-full bg-gradient-to-r from-slate-50 to-blue-50"></div>
        );
    }
  };

  return <div className={`w-full ${className}`}>{renderTransition()}</div>;
};

// Componente para seções com background animado
export const AnimatedSection = ({
  children,
  variant = "gradient",
  className = "",
}: AnimatedBackgroundProps) => {
  return (
    <AnimatedBackground variant={variant} className={className}>
      {children}
    </AnimatedBackground>
  );
};
