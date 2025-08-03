import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de navegación principal de Landify.
 * 
 * Este componente incluye la barra de navegación con logo, enlaces de menú,
 * botón de contacto y menú móvil responsive con funcionalidad de toggle.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Navbar -->
    <nav class="bg-blue-100/80 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-40 backdrop-blur-sm">
      <div class="flex items-center">
        <a href="#" class="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1" aria-label="Landify Home">
          <iconify-icon icon="bx:cube" width="24" height="24" class="text-primary" aria-hidden="true"></iconify-icon>
          <span class="ml-2 text-xl font-bold text-dark">Landify</span>
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
        <a href="#models" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">Models</a>
        <a href="#services" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">Services</a>
        <a href="#portfolio" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">Portfolio</a>
        <a href="#about" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">About</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2 rounded-md hover:bg-blue-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
              (click)="toggleMobileMenu()"
              [attr.aria-expanded]="isMobileMenuOpen"
              aria-label="Toggle mobile menu" 
              aria-controls="mobile-menu">
        <iconify-icon icon="bx:menu" width="24" height="24" class="text-gray-600" aria-hidden="true"></iconify-icon>
      </button>
      
      <!-- Desktop Contact Button -->
      <div class="hidden md:block">
        <a href="#contact" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">Contact</a>
      </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div class="md:hidden bg-blue-100/95 px-6 py-4" 
         [class.hidden]="!isMobileMenuOpen" 
         id="mobile-menu" 
         role="navigation" 
         aria-label="Mobile navigation">
      <div class="flex flex-col space-y-4">
        <a href="#models" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" (click)="closeMobileMenu()">Models</a>
        <a href="#services" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" (click)="closeMobileMenu()">Services</a>
        <a href="#portfolio" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" (click)="closeMobileMenu()">Portfolio</a>
        <a href="#about" class="text-gray-600 hover:text-primary transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1" (click)="closeMobileMenu()">About</a>
        <a href="#contact" class="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" (click)="closeMobileMenu()">Contact</a>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  /**
   * Alterna el estado del menú móvil.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Cierra el menú móvil.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
} 