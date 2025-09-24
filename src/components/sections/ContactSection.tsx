import { ContactForm } from "./ContactForm";

interface ContactSectionProps {
  className?: string;
  id?: string;
}

export const ContactSection = ({ className, id }: ContactSectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ""}`}>
      <div className="container grid gap-10 md:grid-cols-2">
        <ContactForm />
      </div>
    </section>
  );
};
