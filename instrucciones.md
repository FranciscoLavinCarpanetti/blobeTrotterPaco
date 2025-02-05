## BlobeTrotterPaco ##

Estructura del Proyecto

1. **Instalaciones y Configuraciones Iniciales:**

    - Instalar Bootstrap:

      ```bash
      npm install bootstrap
      ```

    - Cargar Bootstrap en [angular.json](http://_vscodecontentref_/1):

      ```json
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
      ]
      ```

    - Instalar SweetAlert2:

      ```bash
      npm install sweetalert2
      ```

2. **Definir las Interfaces:**

    - **Post (Representa una publicación en el blog)**

      ```typescript
      export interface IPost {
        id?: number;
        title: string;
        text: string;
        author: string;
        image: string;
        date: string;
        category: ICategory;
      }
      ```

    - **Category (Representa una categoría del blog)**

      ```typescript
      export enum ICategory {
        Playa = 'Playa',
        Montaña = 'Montaña',
        Ciudad = 'Ciudad',
        Rural = 'Rural',
        Festivales = 'Festivales'
      }
      ```

3. **Crear el Servicio de Posts:**

    - Generar el servicio:

      ```bash
      ng g s services/posts --skip-tests
      ```

    - Métodos:

      ```typescript
      getAll(): IPost[]; // Recuperar todos los posts
      getByCategory(cat: string): IPost[]; // Filtrar por categoría
      getById(id: number): IPost; // Obtener un post por ID
      createPost(newPost: IPost): void; // Agregar un nuevo post
      ```

4. **Crear Componentes Necesarios:**

    - Componente Principal:

      ```bash
      ng g c components/component --skip-tests
      ```

    - Componentes Específicos:

      ```bash
      ng g c components/header --skip-tests
      ng g c components/footer --skip-tests
      ng g c components/formPost --skip-tests
      ng g c components/postItem --skip-tests
      ng g c components/nameSerch --skip-tests
      ng g c components/selectTipo --skip-tests
      ```

    - Componentes Página:

      ```bash
      ng g c pages/postList --skip-tests
      ng g c pages/postView --skip-tests
      ng g c pages/registro --skip-tests
      ng g c pages/login --skip-tests
      ```

5. **Rutas de la Aplicación:**

    - Configurar en `app-routing.module.ts`:

      ```typescript
      const routes: Routes = [
        { path: 'home', component: PostListComponent },
        { path: 'new', component: FormPostComponent },
        { path: 'post/:id', component: PostViewComponent },
        { path: 'registro', component: RegistroComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', redirectTo: 'home' }
      ];
      ```

6. **Funcionalidades Clave:**

    - Listar todas las publicaciones desde `PostsService` en `PostListComponent`.
    - Formulario reactivo en `FormPostComponent` para agregar posts con validaciones.
    - Visualización de un post individual en `PostViewComponent`.
    - Filtro por categorías y búsqueda por título en `PostListComponent`.
    - Selector de categorías basado en un array de categorías en `SelectTipoComponent`.

7. **Tareas Adicionales:**

    - Cargar menú en `HeaderComponent` y gestionar rutas.
    - Diseñar el Blog con Bootstrap y CSS personalizado.
    - Repositorio en GitHub con commits organizados por tarea.
