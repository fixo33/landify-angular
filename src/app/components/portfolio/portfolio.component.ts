import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de portafolio de Landify.
 * 
 * Este componente muestra una galería de trabajos seleccionados
 * con imágenes de proyectos de arquitectura y diseño de interior.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Gallery Section -->
    <section id="portfolio" class="py-12 px-6 md:px-12 lg:px-24 bg-white" aria-labelledby="gallery-heading">
      <div class="max-w-6xl mx-auto">
        <h3 id="gallery-heading" class="text-base md:text-lg font-medium text-gray-800 mb-6 md:mb-8">SELECTED WORKS</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(1)">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Interior Design - Modern living space with elegant furniture" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Interior Design Project</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(2)">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="Modern Living Room - Contemporary design with natural lighting" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Modern Living Room</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(3)">
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Cozy Space - Warm and inviting interior design" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Cozy Space Design</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(4)">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80" alt="Luxury Interior - High-end residential design" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Luxury Interior</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(5)">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Modern Staircase - Contemporary architectural element" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Modern Staircase</figcaption>
          </figure>
          <figure class="overflow-hidden rounded-lg group" (click)="openProject(6)">
            <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Elegant Design - Sophisticated interior styling" class="w-full h-48 sm:h-64 md:h-96 object-cover group-hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
            <figcaption class="sr-only">Elegant Design</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PortfolioComponent {

  /**
   * Abre un proyecto específico del portafolio.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param projectId El ID del proyecto a abrir
   */
  openProject(projectId: number): void {
    console.log(`Abriendo proyecto: ${projectId}`);
    // En una implementación real, aquí se abriría un modal con detalles del proyecto
    // o se navegaría a una página específica del proyecto
  }
} 