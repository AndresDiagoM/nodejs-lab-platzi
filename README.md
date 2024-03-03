<p align="center">
  <a href="https://platzi.com/cursos/platzi-lab-nodejs-auth/" target="_blank">
    <img alt="Laboratorio de Node.js Auth" src="https://static.platzi.com/media/achievements/piezas-platzi-lab-nodejs-auth-apollo-server-prisma-cms_badge-5995d28d-302e-4bdd-bd86-e49a1b.png" width="60" />
  </a>
  <a href="https://platzi.com/cursos/platzi-lab-nodejs-auth/" target="_blank">
    <img alt="Curso de Next.js con GraphQL" src="https://static.platzi.com/media/achievements/piezas-platzi-lab-nodejs-auth_badge-cbeed361-b95b-439e-a48b-ce024f85384e.png" width="60" />
  </a>
</p>
<h1 align="center">
  Laboratorio Profesional de Node.js: Autenticación
</h1>

Este repositorio contiene el proyecto con el reto para el Laboratorio Profesional de Node.js: Autenticación, dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com).

## 👉 El Reto.

Es nuestra primer semana en la empresa "ACME" y nos han pedido finalizar este proyecto que ha quedado abandonado e incompleto.

Desafortunadente, nadie en la empresa sabe del proyecto y es nuestra responsabilidad adueñarnos de éste y sacarlo adelante. ¿Podrás hacerlo?

De nuestro "Project Manager", que también es nuevo en la empresa, sabemos lo siguiente:

1. El propósito de la aplicación es permitir crear, actualizar, y eliminar Perfiles de usuario. Los usuarios deberán registrarse primero e iniciar sesión para ser autenticados.
1. Al momento, solo existe el Backend para registrarse (sign up) e iniciar sesión (login).
1. Escuché, dice nuestro Project Manager, que aún con lo poco que tiene la aplicación, es muy insegura. Fue echa de afán. Tiene un gravísimo error de seguridad. Sólo se sabe que es relacionado a cómo se guarda cierta información en la base de datos.
1. Nuestra primera prioridad es encontrar por qué es insegura y arreglarlo.
1. Luego, completar el Backend para que las funcionalidades de crear, modificar y eliminar un Perfil trabajen correctamente.
1. Aunque ten cuidado, solo usuarios autenticados pueden acceder a su perfil. Así que deberás idear antes alguna forma para saber si el usuario inició sesión e identificar quién es.

### Retos opcionales

Mientras ibamos por algo de café, nos topamos con nuestro nuestro Project Manager que nos dice:

1. Estaría genial si podemos agregar los tests necesarios para asegurar la funcionalidad y proteger ante futuros bugs de todo lo que haremos.
1. Ahora, no recuerdo si _también trabajas en el Frontend_, si es así, ¿te animas a crear la UI con la que los visitantes puedan interactuar para utilizar la aplicación? Tienes plena libertad creativa para hacerlo. Confío en ti.
1. Finalmente, ¿cómo presentaremos este proyecto a las directivas? ¿Podrías subirlo a internet para que podamos probarlo desde alguna URL? Servicios gratuitos como [Render](https://render.com), o [Fly.io](https://fly.io), combinado con [MongoDB Atlas](https://www.mongodb.com/pricing) nos podrían servir.

### Lo que sabemos de la aplicación

- El proyecto fue creado en una estructura de [Monorepo utilizando NPM](https://docs.npmjs.com/cli/v7/using-npm/workspaces).
- El Frontend se encuentra en la carpeta `frontend`. Aunque está totalmente vacia.
- El Backend se encuentra en la carpeta `api`.
- El Backend es una aplicación típica de Node.js usando el framework de Express. Además de otras utilidades.
- Hay una conexión a una base de datos MongoDB.
- En el archivo [README del Backend](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/tree/challenge/api) hay detalles sobre como instalar y correr el proyecto localmente.

## 🐞 Encontraste un error o mejora?

Ayuda a otros estudiantes con eso que acabas de descubrir que haría este curso y respositorio mucho mejor.

- En [Issues](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/issues/new) puedes reportar errores, agregar sugerencias y comentarios.
- Por su parte, los [Pull Request](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/pulls) siempre estarán abiertos para recibir mejoras puntuales.

Happy hacking!

<!-- para correr el api desde la raiz es npm start --workspace=api -->

## 📝 Tests de la api

Para correr los tests de la api, desde la raíz del proyecto, ejecuta:

```sh
npm test --workspace=api
```