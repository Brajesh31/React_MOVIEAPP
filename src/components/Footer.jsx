import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";
  return (
    <main>
      <footer
        className={`bg-${theme} text-${textColor} text-center text-lg-start`}
        data-bs-theme={theme}
      >
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-auto">
              <a href="#" className="me-4 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-4 fs-4">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="me-4 fs-4">
                <i className="bi bi-google"></i>
              </a>
              <a href="#" className="me-4 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`bg-${theme} text-center p-3 ${
            theme === "dark" ? "text-light" : "text-dark"
          }`}
        >
          © 2025 Tüm Hakları Saklıdır | Movie App
        </div>
      </footer>
    </main>
  );
}
