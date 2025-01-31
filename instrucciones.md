## BlobeTotterPaco ##

Estructura del Proyecto

1. Instalaciones y Configuraciones Iniciales:

    Instalar Bootstrap
    npm install bootstrap

    Cargar Bootstrap en angular.json
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]

2. Definir las Interfaces:

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
    export interface ICategory {
      id: number;
      title: string;
    }

3. Crear el Servicio de Posts:

    Servicio: postsService
    ng g s services/posts --skip-tests

    Métodos:

        getAll() : IPost[] - Recuperar todos los posts

        insert(newPost: IPost) : any - Agregar un nuevo post

        getByCategoria(cat: string) : IPost[] - Filtrar por categoría

        getById(id: number) : IPost - Obtener un post por ID

4. Crear Componentes Necesarios:

    Componente Principal
    ng g c components/blog --skip-tests

    Componentes Específicos
    ng g c components/blog/formPost --skip-tests
    ng g c components/blog/postList --skip-tests
    ng g c components/blog/postItem --skip-tests
    ng g c components/blog/viewPost --skip-tests

5. Rutas de la Aplicación:

    Configurar en app-routing.module.ts
    const routes: Routes = [
      { path: 'home', component: BlogComponent },
      { path: 'new', component: FormPostComponent },
      { path: 'post/:idpost', component: ViewPostComponent },
      { path: '**', redirectTo: 'home' }
    ];

6. Funcionalidades Clave:

    Listar todas las publicaciones desde postsService en BlogComponent.

    Formulario reactivo en FormPostComponent para agregar posts con validaciones.

    Visualización de un post individual en ViewPostComponent.

    Filtro por categorías y búsqueda por título en PostListComponent.

    Selector de categorías basado en un array de categorías en CategoryService.

7. Tareas Adicionales:

    Cargar menú en HeaderComponent y gestionar rutas.

    Diseñar el Blog con Bootstrap y CSS personalizado.

    Repositorio en GitHub con commits organizados por tarea.
