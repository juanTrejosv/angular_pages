# angular_pages
Learning and practicing Angular themes

## Proyecto formularios reactivos

Formularios por template y formularios reactivos

o forms Module o Reactive, es mejor reactive

Formularios Reactivos

-Lazyload y tareas relacionadas
-Validaciones propias de Angula
-Validaciones personalizadas
-Validaciones asíncronas
-Arreglos y objetos anidados
-FormBuilder
-FormGroup
-FormArray

creación de proyecto
ng new formApp

Would you like yo add Angular routing? Y/N R/= YES
Wich stylesheet format would you like to use? CSS

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?

SSR (Renderizado en el servidor): El HTML se genera en el servidor para cada solicitud. Esto es útil cuando el contenido es dinámico y cambia según la interacción del usuario, mejorando el SEO y el rendimiento en la primera carga.

SSG (Generación estática de sitios/Prerenderizado): El HTML se genera en el momento de la compilación y se sirve de manera estática. Es ideal para sitios con contenido que no cambia frecuentemente, proporcionando un rendimiento rápido gracias al almacenamiento en caché.

Copy CDN boostrap
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

crear componentes 

ng g m auth --routing
ng g m reactive --routing
ng g m shared


ng g component auth/pages/RegisterPage --inline-style --skip-selector --skip-tests

ng g component reactive/pages/BasicPage --inline-style --skip-selector --skip-tests

ng g component reactive/pages/DynamicPage --inline-style --skip-selector --skip-tests

ng g component reactive/pages/SwitchesPage --inline-style --skip-selector --skip-tests

reemplazar desde
https://gist.github.com/Klerith/5729dcfb170595f84d1b564a182ffbc2

ng g component shared/components/sideMenu --inline-style --skip-tests