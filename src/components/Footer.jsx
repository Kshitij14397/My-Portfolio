import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-8 bg-dark border-t border-dark-lighter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} | Designed with ❤️ by{" "}
            {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
