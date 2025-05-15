import React from "react";
import { Phone, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">KERBEN.ADS</h2>
            <p className="max-w-md text-blue-100">{t("about.description")}</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-3">
              {t("footer.contact")}
            </h3>
            <div className="flex items-center justify-center md:justify-end mb-1">
              <Phone size={18} className="mr-2" />
              <a
                href="https://wa.me/996500062205"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                {t("footer.whatsapp")}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end mb-1">
              <a
                href="https://wa.me/996500062205"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                {t("footer.whatsapp")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center space-x-4">
            <FileText size={18} className="text-blue-200" />
            <a
              href="/privacy-policy"
              className="text-blue-200 hover:text-blue-100 transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-blue-400 text-center text-blue-200">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
