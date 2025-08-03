import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de pie de página de Landify.
 * 
 * Este componente incluye el logo, enlaces de navegación,
 * información de copyright y enlaces a redes sociales.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24" role="contentinfo">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-center mb-8">
          <a href="#" class="flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1" aria-label="Landify Home">
            <iconify-icon icon="bx:cube" width="24" height="24" class="text-white" aria-hidden="true"></iconify-icon>
            <span class="ml-2 text-xl font-bold">Landify</span>
          </a>
        </div>
        <nav class="flex flex-wrap justify-center gap-8 mb-8" aria-label="Footer navigation">
          <a href="#about" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToSection('about')">About</a>
          <a href="#services" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToSection('services')">Services</a>
          <a href="#models" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToSection('models')">Models</a>
          <a href="#portfolio" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToSection('portfolio')">Portfolio</a>
          <a href="#" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToBlog()">Blog</a>
          <a href="#contact" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1" (click)="navigateToSection('contact')">Contact</a>
        </nav>
        <div class="text-center text-gray-400 text-sm">
          <p>© 2023 Landify LLC. All rights reserved.</p>
        </div>
        <div class="flex justify-center mt-6 space-x-4" aria-label="Social media links">
          <a href="#" class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1" aria-label="Facebook" (click)="openSocialMedia('facebook')">
            <iconify-icon icon="bx:facebook" width="20" height="20" aria-hidden="true"></iconify-icon>
          </a>
          <a href="#" class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1" aria-label="Twitter" (click)="openSocialMedia('twitter')">
            <iconify-icon icon="bx:twitter" width="20" height="20" aria-hidden="true"></iconify-icon>
          </a>
          <a href="#" class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1" aria-label="Instagram" (click)="openSocialMedia('instagram')">
            <iconify-icon icon="bx:instagram" width="20" height="20" aria-hidden="true"></iconify-icon>
          </a>
          <a href="#" class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1" aria-label="LinkedIn" (click)="openSocialMedia('linkedin')">
            <iconify-icon icon="bx:linkedin" width="20" height="20" aria-hidden="true"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {

  /**
   * Navega a una sección específica de la página.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param sectionId El ID de la sección a la que navegar
   */
  navigateToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Navega a la página del blog.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   */
  navigateToBlog(): void {
    console.log('Navegando al blog...');
    // En una implementación real, aquí se navegaría a la página del blog
  }

  /**
   * Abre una red social específica.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param platform La plataforma de redes sociales
   */
  openSocialMedia(platform: string): void {
    console.log(`Abriendo ${platform}...`);
    // En una implementación real, aquí se abriría la URL de la red social
    // const urls = {
    //   facebook: 'https://facebook.com/landify',
    //   twitter: 'https://twitter.com/landify',
    //   instagram: 'https://instagram.com/landify',
    //   linkedin: 'https://linkedin.com/company/landify'
    // };
    // window.open(urls[platform], '_blank');
  }
} 