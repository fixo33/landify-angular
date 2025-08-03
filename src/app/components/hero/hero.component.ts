import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Hero de la landing page de Landify.
 * 
 * Este componente muestra la sección principal con el título, descripción,
 * botón de reproducción de video e imagen principal de la landing page.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Hero Section -->
    <section class="bg-blue-100/80 pt-5 relative overflow-hidden" aria-labelledby="hero-heading">
      <div class="max-w-full mx-auto grid md:grid-cols-2 gap-0 items-center min-h-[500px] md:min-h-[650px]">
        <div class="px-6 md:px-12 lg:px-24 py-8 md:py-0 order-1 md:order-1">
          <h1 id="hero-heading" class="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">Workspace that<br>inspire you</h1>
          <p class="text-gray-600 mb-8 text-sm sm:text-base">We help you building the dreams and bring more than you expect</p>
          <div class="flex flex-row items-start sm:items-center space-y-4 sm:space-y-0">
            <button class="bg-transparent rounded-full p-3 flex items-center justify-center border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2" 
                    (click)="playVideo()"
                    aria-label="Play video">
              <iconify-icon icon="fluent:play-24-regular" width="20" height="20" class="text-gray-800 hover:text-white" aria-hidden="true"></iconify-icon>
            </button>
            <div class="flex items-center">
              <div class="w-16 sm:w-24 border-b-2 border-gray-800 bg-gray-800 mx-3"></div>
              <span class="text-gray-800 font-medium text-xs sm:text-sm tracking-wider">DISCOVER</span>
            </div>
          </div>
        </div>
        <div class="relative h-80 md:h-64 md:h-full w-full order-2 md:order-2">
          <img src="assets/images/image1.png" alt="Modern Architecture - Inspiring workspace design" class="h-full object-contain absolute right-0 bottom-0 w-auto" loading="eager" />
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {

  /**
   * Maneja el clic en el botón de reproducción de video.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   */
  playVideo(): void {
    // Aquí se implementaría la lógica para reproducir el video
    console.log('Reproduciendo video...');
    // En una implementación real, aquí se abriría un modal con el video
    // o se redirigiría a una página de video
  }
} 