import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de servicios de Landify.
 * 
 * Este componente muestra los tres servicios principales:
 * Arquitectura, Diseño de Interior y Bienes Raíces,
 * cada uno con su icono, descripción y enlace.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Solutions Section -->
    <section id="services" class="py-16 px-6 md:px-12 lg:px-24 bg-white" aria-labelledby="solutions-heading">
      <div class="max-w-6xl mx-auto">
        <h2 id="solutions-heading" class="text-3xl font-bold text-dark mb-12">Solutions for your dream</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <article class="p-6 hover:shadow-lg transition duration-300 rounded-lg">
            <div class="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mb-4">
              <iconify-icon icon="bx:building-house" width="24" height="24" class="text-primary" aria-hidden="true"></iconify-icon>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Architecture</h3>
            <p class="text-gray-600 mb-4">We design the space of your life with the best architecture solutions</p>
            <a href="#" class="text-primary font-medium flex items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 -ml-2" (click)="learnMore('architecture')">
              Learn more
              <iconify-icon icon="bx:right-arrow-alt" width="20" height="20" class="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"></iconify-icon>
            </a>
          </article>
          <article class="p-6 hover:shadow-lg transition duration-300 rounded-lg">
            <div class="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mb-4">
              <iconify-icon icon="bx:palette" width="24" height="24" class="text-purple-600" aria-hidden="true"></iconify-icon>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Interior design</h3>
            <p class="text-gray-600 mb-4">Create your dream interior with our professional designers</p>
            <a href="#" class="text-primary font-medium flex items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 -ml-2" (click)="learnMore('interior-design')">
              Learn more
              <iconify-icon icon="bx:right-arrow-alt" width="20" height="20" class="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"></iconify-icon>
            </a>
          </article>
          <article class="p-6 hover:shadow-lg transition duration-300 rounded-lg">
            <div class="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
              <iconify-icon icon="bx:home" width="24" height="24" class="text-blue-600" aria-hidden="true"></iconify-icon>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Real estate</h3>
            <p class="text-gray-600 mb-4">Looking to buy or sell? We'll guide you through the entire process</p>
            <a href="#" class="text-primary font-medium flex items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 -ml-2" (click)="learnMore('real-estate')">
              Learn more
              <iconify-icon icon="bx:right-arrow-alt" width="20" height="20" class="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"></iconify-icon>
            </a>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {

  /**
   * Maneja el clic en el enlace "Learn more" de cada servicio.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param service El servicio seleccionado (architecture, interior-design, real-estate)
   */
  learnMore(service: string): void {
    console.log(`Aprendiendo más sobre: ${service}`);
    // En una implementación real, aquí se navegaría a la página específica del servicio
    // o se abriría un modal con más información
  }
} 