import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/**
 * Componente de contacto de Landify.
 * 
 * Este componente incluye un formulario de contacto con validación
 * reactiva y manejo de envío de datos.
 *
 * @author Fixo33 <devawsoftware@gmail.com>
 * @version 1.0
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Contact Section -->
    <section id="contact" class="bg-white" aria-labelledby="contact-heading">
      <div class="max-w-full mx-auto grid md:grid-cols-2 gap-0 md:gap-12 items-center">
        <div class="w-full h-auto order-1 md:order-1">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Professional team meeting in modern office" class="w-full h-64 md:h-[800px] object-cover" loading="lazy" />
        </div>
        <div class="w-full py-8 md:py-12 px-6 lg:px-12 order-2 md:order-2">
          <h2 id="contact-heading" class="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-6">Get in touch</h2>
          <p class="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Have an inquiry? Fill out the form below to contact our team.</p>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" role="form" aria-labelledby="contact-heading">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="name" class="block text-sm text-gray-600 mb-1">Your name <span class="text-red-500">*</span></label>
                <input type="text" 
                       id="name" 
                       formControlName="name"
                       class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base" 
                       [class.border-red-500]="isFieldInvalid('name')"
                       aria-describedby="name-error" />
                <div id="name-error" class="text-red-500 text-xs mt-1" *ngIf="isFieldInvalid('name')">
                  {{ getFieldError('name') }}
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm text-gray-600 mb-1">Email address <span class="text-red-500">*</span></label>
                <input type="email" 
                       id="email" 
                       formControlName="email"
                       class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base" 
                       [class.border-red-500]="isFieldInvalid('email')"
                       aria-describedby="email-error" />
                <div id="email-error" class="text-red-500 text-xs mt-1" *ngIf="isFieldInvalid('email')">
                  {{ getFieldError('email') }}
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm text-gray-600 mb-1">Message <span class="text-red-500">*</span></label>
              <textarea id="message" 
                        formControlName="message"
                        rows="4" 
                        class="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base" 
                        [class.border-red-500]="isFieldInvalid('message')"
                        aria-describedby="message-error"></textarea>
              <div id="message-error" class="text-red-500 text-xs mt-1" *ngIf="isFieldInvalid('message')">
                {{ getFieldError('message') }}
              </div>
            </div>
            <button type="submit" 
                    class="bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-secondary transition duration-300 w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                    [disabled]="contactForm.invalid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Verifica si un campo es inválido y ha sido tocado.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param fieldName El nombre del campo a verificar
   * @returns true si el campo es inválido y ha sido tocado
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  /**
   * Obtiene el mensaje de error para un campo específico.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   * 
   * @param fieldName El nombre del campo
   * @returns El mensaje de error correspondiente
   */
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (field.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field.hasError('minlength')) {
      const requiredLength = field.getError('minlength').requiredLength;
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${requiredLength} characters`;
    }
    return '';
  }

  /**
   * Maneja el envío del formulario de contacto.
   * 
   * @author Fixo33 <devawsoftware@gmail.com>
   * @version 1.0
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simular envío de formulario
      setTimeout(() => {
        console.log('Formulario enviado:', this.contactForm.value);
        alert('Thank you for your message! We will get back to you soon.');
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 1000);
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
} 