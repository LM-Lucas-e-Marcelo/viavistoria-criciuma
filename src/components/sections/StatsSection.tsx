import { useState, useEffect } from "react";
import { Car, Users, Shield, Clock } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({
  icon,
  number,
  suffix = "",
  label,
  delay = 0,
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`,
    );
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = number / 50;
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= number) {
              clearInterval(interval);
              return number;
            }
            return Math.min(prev + increment, number);
          });
        }, 30);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="text-center group"
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary group-hover:text-secondary transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 md:text-4xl">
        {Math.floor(count).toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

interface StatsSectionProps {
  className?: string;
  id?: string;
}

export const StatsSection = ({ className, id }: StatsSectionProps) => {
  const stats = [
    {
      icon: <Car className="h-8 w-8" />,
      number: 2500,
      suffix: "+",
      label: "Vistorias Realizadas",
      delay: 0,
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 1800,
      suffix: "+",
      label: "Clientes Satisfeitos",
      delay: 200,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      number: 100,
      suffix: "%",
      label: "Precisão nos Laudos",
      delay: 400,
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: 24,
      suffix: "h",
      label: "Tempo Médio de Entrega",
      delay: 600,
    },
  ];

  return (
    <section
      id={id}
      className={`py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden ${className || ""}`}
    >
      {/* Background animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:30px_30px] animate-pulse"></div>
      </div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Números que comprovam nossa excelência
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Anos de experiência traduzidos em resultados concretos para nossos
            clientes
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
