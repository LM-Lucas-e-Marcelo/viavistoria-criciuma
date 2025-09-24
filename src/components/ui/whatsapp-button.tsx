import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de saber mais sobre os serviços de vistoria.",
  className,
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white rounded-full p-4
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        group
        ${className || ""}
      `}
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="w-10 h-10" />

      {/* Tooltip */}
      <div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2
        bg-gray-900 text-white text-sm px-3 py-2 rounded-lg
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        whitespace-nowrap
        pointer-events-none
      "
      >
        Fale conosco no WhatsApp
        <div
          className="absolute left-full top-1/2 -translate-y-1/2
          border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent
        "
        ></div>
      </div>
    </button>
  );
};
