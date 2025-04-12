function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Todos los derechos reservados</p>
        <small>&copy; 2025 - Mi tienda React - Mauricio Cox</small>

        <div className="contact-info">
          <p>Contacto:</p>
          <ul>
            <li>
              📧 <a href="mailto:mauricio@example.com">mauricio@example.com</a>
            </li>
            <li>
              🐙 <a href="https://github.com/mauricio-cox" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              💼 <a href="https://linkedin.com/in/mauricio-cox" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;