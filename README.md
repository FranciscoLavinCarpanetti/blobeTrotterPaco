# BlobeTrotterPaco

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.1.1.

## Servidor de Desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a <http://localhost:4200/>. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

Estructura del Proyecto
Instalaciones y Configuraciones Iniciales:

Instalar Bootstrap:

npm install bootstrap

Cargar Bootstrap en angular.json:
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

Instalar SweetAlert2:

npm install sweetalert2

Definir las Interfaces:

Post (Representa una publicación en el blog)

export interface IPost {
  id?: number;
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
  category: ICategory;
}

Category (Representa una categoría del blog)

export enum ICategory {
  Playa = 'Playa',
  Montaña = 'Montaña',
  Ciudad = 'Ciudad',
  Rural = 'Rural',
  Festivales = 'Festivales'
}

Crear el Servicio de Posts:

Generar el servicio:

ng g s services/posts --skip-tests

Métodos:

getAll(): IPost[]; // Recuperar todos los posts
getByCategory(cat: string): IPost[]; // Filtrar por categoría
getById(id: number): IPost; // Obtener un post por ID
createPost(newPost: IPost): void; // Agregar un nuevo post

Crear Componentes Necesarios:

Componente Principal:

ng g c components/component --skip-tests

Componentes Específicos:

ng g c components/header --skip-tests
ng g c components/footer --skip-tests
ng g c components/formPost --skip-tests
ng g c components/postItem --skip-tests
ng g c components/nameSerch --skip-tests
ng g c components/selectTipo --skip-tests

Componentes Página:

ng g c pages/postList --skip-tests
ng g c pages/postView --skip-tests
ng g c pages/registro --skip-tests
ng g c pages/login --skip-tests

Rutas de la Aplicación:

Configurar en app-routing.module.ts:

const routes: Routes = [
  { path: 'home', component: PostListComponent },
  { path: 'new', component: FormPostComponent },
  { path: 'post/:id', component: PostViewComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

Funcionalidades Clave:

Listar todas las publicaciones desde PostsService en PostListComponent.
Formulario reactivo en FormPostComponent para agregar posts con validaciones.
Visualización de un post individual en PostViewComponent.
Filtro por categorías y búsqueda por título en PostListComponent.
Selector de categorías basado en un array de categorías en SelectTipoComponent.
Tareas Adicionales:

Cargar menú en HeaderComponent y gestionar rutas.
Diseñar el Blog con Bootstrap y CSS personalizado.
Repositorio en GitHub con commits organizados por tarea.
Code scaffolding
Angular CLI incluye herramientas de scaffolding de código. Para generar un nuevo componente, ejecuta:

ng generate component component-name

Para una lista completa de los esquemas disponibles (como components, directives, o pipes), ejecuta:

ng generate component component-name

Para una lista completa de los esquemas disponibles (como components, directives, o pipes), ejecuta:

ng generate --help

Building
Para construir el proyecto, ejecuta:

ng build

Los artefactos de construcción se almacenarán en el directorio dist/. Usa la opción --configuration production para una construcción de producción.

Running unit tests
Para ejecutar las pruebas unitarias a través de Karma, ejecuta:

ng test

Running end-to-end tests
Para ejecutar las pruebas end-to-end a través de Protractor, ejecuta:

ng e2e

Further help
Para obtener más ayuda sobre Angular CLI, usa ng help o visita la Angular CLI README.

Este archivo `README.md` proporciona una guía clara y completa sobre cómo configurar y trabajar con tu proyecto `BlobeTrotterPaco`.
