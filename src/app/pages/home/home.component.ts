import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

/**
 * Componente de la página principal de Landify.
 * 
 * Este componente integra todos los componentes de la landing page
 * en una sola página con navegación suave entre secciones.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- Skip to main content para accesibilidad -->
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50">
      Skip to main content
    </a>

    <app-header></app-header>

    <main id="main-content">
      <app-hero></app-hero>
      <app-stats></app-stats>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-testimonial></app-testimonial>
      <app-contact></app-contact>
    </main>

    <app-footer></app-footer>
  `,
  styles: []
})
export class HomeComponent {} 