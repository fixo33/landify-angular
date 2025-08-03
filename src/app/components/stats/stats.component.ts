import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de estadísticas de Landify.
 * 
 * Este componente muestra las estadísticas clave de la empresa
 * como número de edificios completados, trabajos de interior,
 * equipo dedicado y premios ganados.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Stats Section -->
    <section class="py-12 px-6 md:px-12 lg:px-24" aria-labelledby="stats-heading">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div class="border-l-4 border-primary pl-3 md:pl-4">
          <h3 class="text-2xl md:text-3xl font-bold text-dark">850</h3>
          <p class="text-gray-500 text-xs md:text-sm">Buildings completed</p>
        </div>
        <div class="border-l-4 border-primary pl-3 md:pl-4">
          <h3 class="text-2xl md:text-3xl font-bold text-dark">578</h3>
          <p class="text-gray-500 text-xs md:text-sm">Interior work</p>
        </div>
        <div class="border-l-4 border-primary pl-3 md:pl-4">
          <h3 class="text-2xl md:text-3xl font-bold text-dark">97</h3>
          <p class="text-gray-500 text-xs md:text-sm">Dedicated teammates</p>
        </div>
        <div class="border-l-4 border-primary pl-3 md:pl-4">
          <h3 class="text-2xl md:text-3xl font-bold text-dark">24</h3>
          <p class="text-gray-500 text-xs md:text-sm">Awards won</p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class StatsComponent {} 