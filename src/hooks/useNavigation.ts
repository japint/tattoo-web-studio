"use client";

export function useNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const navigateToContact = () => {
    const scrolled = scrollToSection("contact");
    if (!scrolled) {
      // If contact section doesn't exist on current page, go to homepage
      window.location.href = "/#contact";
    }
  };

  const callPhone = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email: string, subject?: string) => {
    const mailtoUrl = subject
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`;
    window.location.href = mailtoUrl;
  };

  return {
    scrollToSection,
    navigateToContact,
    callPhone,
    sendEmail,
  };
}
