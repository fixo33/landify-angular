#!/bin/bash

# Script de despliegue para Landify Angular
# Autor: Fixo33
# Versión: 1.0

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Verificar que Docker esté instalado
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker no está instalado. Por favor instala Docker primero."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose no está instalado. Por favor instala Docker Compose primero."
        exit 1
    fi
    
    print_message "Docker y Docker Compose están instalados"
}

# Crear directorios necesarios
create_directories() {
    print_step "Creando directorios necesarios..."
    
    mkdir -p logs/nginx
    mkdir -p ssl
    
    print_message "Directorios creados correctamente"
}

# Generar certificados SSL de desarrollo (opcional)
generate_ssl_certs() {
    if [ ! -f "ssl/cert.pem" ] || [ ! -f "ssl/key.pem" ]; then
        print_step "Generando certificados SSL de desarrollo..."
        
        mkdir -p ssl
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout ssl/key.pem \
            -out ssl/cert.pem \
            -subj "/C=ES/ST=Madrid/L=Madrid/O=Landify/OU=IT/CN=landify.localhost"
        
        print_message "Certificados SSL generados"
    else
        print_message "Certificados SSL ya existen"
    fi
}

# Construir y ejecutar en modo desarrollo
deploy_dev() {
    print_step "Desplegando en modo desarrollo..."
    
    docker-compose down
    docker-compose up --build -d
    
    print_message "Aplicación desplegada en modo desarrollo"
    print_message "Accede a: http://localhost"
}

# Construir y ejecutar en modo producción
deploy_prod() {
    print_step "Desplegando en modo producción..."
    
    # Parar contenedores existentes
    docker-compose -f docker-compose.prod.yml down
    
    # Limpiar imágenes antiguas
    docker system prune -f
    
    # Construir y ejecutar
    docker-compose -f docker-compose.prod.yml up --build -d
    
    print_message "Aplicación desplegada en modo producción"
    print_message "Accede a: http://localhost"
}

# Mostrar logs
show_logs() {
    print_step "Mostrando logs..."
    
    if [ "$1" = "prod" ]; then
        docker-compose -f docker-compose.prod.yml logs -f
    else
        docker-compose logs -f
    fi
}

# Parar aplicación
stop_app() {
    print_step "Parando aplicación..."
    
    if [ "$1" = "prod" ]; then
        docker-compose -f docker-compose.prod.yml down
    else
        docker-compose down
    fi
    
    print_message "Aplicación detenida"
}

# Limpiar todo
cleanup() {
    print_step "Limpiando contenedores e imágenes..."
    
    docker-compose down
    docker-compose -f docker-compose.prod.yml down
    docker system prune -af
    docker volume prune -f
    
    print_message "Limpieza completada"
}

# Mostrar estado
status() {
    print_step "Estado de los contenedores:"
    
    if [ "$1" = "prod" ]; then
        docker-compose -f docker-compose.prod.yml ps
    else
        docker-compose ps
    fi
}

# Función principal
main() {
    case "$1" in
        "dev")
            check_docker
            create_directories
            deploy_dev
            ;;
        "prod")
            check_docker
            create_directories
            generate_ssl_certs
            deploy_prod
            ;;
        "logs")
            show_logs "$2"
            ;;
        "stop")
            stop_app "$2"
            ;;
        "cleanup")
            cleanup
            ;;
        "status")
            status "$2"
            ;;
        *)
            echo "Uso: $0 {dev|prod|logs|stop|cleanup|status}"
            echo ""
            echo "Comandos disponibles:"
            echo "  dev     - Desplegar en modo desarrollo"
            echo "  prod    - Desplegar en modo producción"
            echo "  logs    - Mostrar logs (dev|prod)"
            echo "  stop    - Parar aplicación (dev|prod)"
            echo "  cleanup - Limpiar contenedores e imágenes"
            echo "  status  - Mostrar estado (dev|prod)"
            echo ""
            echo "Ejemplos:"
            echo "  $0 dev"
            echo "  $0 prod"
            echo "  $0 logs prod"
            echo "  $0 stop prod"
            exit 1
            ;;
    esac
}

# Ejecutar función principal
main "$@" 