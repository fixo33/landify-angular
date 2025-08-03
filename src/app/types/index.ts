/**
 * Tipos TypeScript para el proyecto Landify Angular.
 * 
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */

/**
 * Interfaz para los testimonios de clientes.
 */
export interface Testimonial {
  text: string;
  author: string;
  company: string;
}

/**
 * Interfaz para los servicios ofrecidos.
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

/**
 * Interfaz para los proyectos del portafolio.
 */
export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

/**
 * Interfaz para el formulario de contacto.
 */
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

/**
 * Interfaz para las estadísticas de la empresa.
 */
export interface Stat {
  value: number;
  label: string;
}

/**
 * Interfaz para las redes sociales.
 */
export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
} 