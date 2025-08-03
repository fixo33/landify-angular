import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

/**
 * Componente de testimonio de Landify.
 * 
 * Este componente muestra el testimonio de un cliente con navegación
 * entre testimonios, animaciones suaves y diseño responsive para móvil y desktop.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.3
 */
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ]),
    trigger('quoteAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-10deg) scale(0.8)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'rotate(0deg) scale(1)' }))
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.1)'
      })),
      transition('normal <=> hovered', [
        animate('200ms ease-in-out')
      ])
    ]),
    trigger('indicatorAnimation', [
      transition('* => *', [
        style({ transform: 'scale(1)' }),
        animate('200ms ease-out', style({ transform: 'scale(1.2)' })),
        animate('200ms ease-in', style({ transform: 'scale(1)' }))
      ])
    ])
  ],
  template: `
    <!-- Testimonial Section -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50" aria-labelledby="testimonial-heading">
      <div class="max-w-6xl mx-auto">
        <!-- Layout responsive: móvil (columna) vs desktop (fila) -->
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <!-- Flecha izquierda - oculta en móvil, visible en desktop -->
          <div class="hidden lg:flex lg:order-1">
            <button class="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg" 
                    (click)="previousTestimonial()"
                    [disabled]="isAnimating"
                    (mouseenter)="leftButtonState = 'hovered'"
                    (mouseleave)="leftButtonState = 'normal'"
                    [@buttonHover]="leftButtonState"
                    aria-label="Previous testimonial">
              <iconify-icon icon="bx:left-arrow-alt" width="24" height="24" aria-hidden="true"></iconify-icon>
            </button>
          </div>
          
          <!-- Testimonio centrado - siempre en el medio -->
          <blockquote class="text-center max-w-2xl mx-auto lg:order-2 lg:flex-1" 
                      [@slideAnimation]="currentIndex">
            <div class="text-3xl md:text-4xl text-cyan-500 mb-4 md:mb-6" [@quoteAnimation]>
              <iconify-icon icon="icon-park-outline:quote" width="36" height="36" class="md:w-12 md:h-12" aria-hidden="true"></iconify-icon>
            </div>
            <p class="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed" [@fadeInOut]>
              {{ currentTestimonial.text }}
            </p>
            <footer class="flex justify-center items-center" [@fadeInOut]>
              <div class="text-center">
                <p class="font-bold text-dark text-sm md:text-base">{{ currentTestimonial.company }}</p>
                <p class="text-xs md:text-sm text-gray-500">{{ currentTestimonial.author }}</p>
              </div>
            </footer>
          </blockquote>
          
          <!-- Flecha derecha - oculta en móvil, visible en desktop -->
          <div class="hidden lg:flex lg:order-3">
            <button class="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg" 
                    (click)="nextTestimonial()"
                    [disabled]="isAnimating"
                    (mouseenter)="rightButtonState = 'hovered'"
                    (mouseleave)="rightButtonState = 'normal'"
                    [@buttonHover]="rightButtonState"
                    aria-label="Next testimonial">
              <iconify-icon icon="bx:right-arrow-alt" width="24" height="24" aria-hidden="true"></iconify-icon>
            </button>
          </div>
        </div>
        
        <!-- Flechas de navegación - solo visibles en móvil -->
        <div class="flex justify-center items-center space-x-8 mt-8 lg:hidden">
          <button class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg" 
                  (click)="previousTestimonial()"
                  [disabled]="isAnimating"
                  aria-label="Previous testimonial">
            <iconify-icon icon="bx:left-arrow-alt" width="20" height="20" class="md:w-6 md:h-6" aria-hidden="true"></iconify-icon>
          </button>
          <button class="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg" 
                  (click)="nextTestimonial()"
                  [disabled]="isAnimating"
                  aria-label="Next testimonial">
            <iconify-icon icon="bx:right-arrow-alt" width="20" height="20" class="md:w-6 md:h-6" aria-hidden="true"></iconify-icon>
          </button>
        </div>
        
        <!-- Indicadores de navegación -->
        <div class="flex justify-center items-center space-x-3 mt-8">
          <button 
            *ngFor="let testimonial of testimonials; let i = index"
            class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
            [class]="i === currentIndex ? 'bg-cyan-500 scale-125 shadow-lg' : 'bg-gray-300 hover:bg-gray-400'"
            (click)="goToTestimonial(i)"
            [disabled]="isAnimating"
            [@indicatorAnimation]="i === currentIndex ? 'active' : 'inactive'"
            [attr.aria-label]="'Go to testimonial ' + (i + 1)">
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: scale(0.95);
    }
    
    button:not(:disabled):hover {
      transform: scale(1.1);
    }
    
    button:not(:disabled):active {
      transform: scale(0.95);
    }
    
    /* Efecto de brillo en los botones */
    button:not(:disabled)::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      transition: left 0.5s;
    }
    
    button:not(:disabled):hover::before {
      left: 100%;
    }
    
    /* Animación de pulso para el indicador activo */
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    .bg-cyan-500 {
      animation: pulse 2s infinite;
    }
  `]
})
export class TestimonialComponent {
  testimonials = [
    {
      text: "With the help of Landify I have created a landing page for my startup. The UI kit is so intuitive and easy to use.",
      author: "Floyd Miles Vice President, GoPro",
      company: "servicenow."
    },
    {
      text: "Landify transformed our workspace design completely. The attention to detail and professional approach exceeded our expectations.",
      author: "Sarah Johnson CEO, TechCorp",
      company: "TechCorp"
    },
    {
      text: "The interior design team at Landify created the perfect environment for our creative agency. Highly recommended!",
      author: "Michael Chen Creative Director, DesignStudio",
      company: "DesignStudio"
    }
  ];

  currentIndex = 0;
  isAnimating = false;
  leftButtonState = 'normal';
  rightButtonState = 'normal';

  /**
   * Obtiene el testimonio actual.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.3
   * 
   * @returns El testimonio actual
   */
  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  /**
   * Navega al testimonio anterior con animación.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.3
   */
  previousTestimonial(): void {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.testimonials.length - 1;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  /**
   * Navega al siguiente testimonio con animación.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.3
   */
  nextTestimonial(): void {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.currentIndex = this.currentIndex < this.testimonials.length - 1 ? this.currentIndex + 1 : 0;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  /**
   * Navega directamente a un testimonio específico.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.3
   * 
   * @param index Índice del testimonio al que navegar
   */
  goToTestimonial(index: number): void {
    if (this.isAnimating || index === this.currentIndex) return;
    
    this.isAnimating = true;
    this.currentIndex = index;
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
} 