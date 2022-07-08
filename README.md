# Alketamy-pelis

## Descripción de las tareas

* Clonar el repo.

* Instalar las dependencias en cada proyecto (entrar a app y poner en consola `npm i`, entrar a api y poner en consola `npm i`).

* Desde la rama DEV ejecutar el siguiente comando:

  > `git config core.autocrlf false`

* Instalar las siguientes extensiones de visual:

    Prettier - Code Formatter

    ESLint

    npm Intellisense

    Trailing Spaces

    Visual Studio IntelliCode

    Markdown Preview Enhanced

    Material Icon Theme

    Prisma

* Configuracion de Visual:

    Tab Size: 2

    Editor: Detect Identation: true

    Editor: Insert Spaces: true

    En "setting.json" de Visual Studio Code agregar esta linea "files.eol": "\n"

* Crear una rama para empezar a trabajar ej: `git checkout -b g2-1-header`

* Cuando se termina pushear a la rama:

  > `git add .`

  > `git commit -m ”mensaje descriptivo”`

  > `git push origin ”nombre de la rama”`

Al pushear por primera vez la rama en la terminal va a aparecer un link para crear el PR, si no lo encuentran entran a Github,  y dentro del proyecto les va a aparecer la opcion que dice Create new pull request.  Hacen click y luego le dan un nombre descriptivo al PR, y donde dice reviewers me seleccionan a mi

## Jira

* Cuando se empieza una tarea mover el ticket a en curso.

* Cuando se termina una tarea mover a en revision.

* Nunca mover el ticket a terminado, solo lo hace el que aprueba el PR.