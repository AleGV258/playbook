# Weekly Mission 4

**Ejercicios realizados por Michell Alejandro García Vargas**

En este directorio podrás encontrar en diversos sub-directorios y archivos, de las actividades de BackEnd-Mision para Launch X de la Weekly Mission 4, de la Práctica "Code Challenge".

Estos ejercicios pertenecen al repositorio de https://github.com/AleGV258/playbook/tree/main/weekly_mission_4

## Gracias por dedicarle tiempo a leer este documento y de revisar el repositorio ;)

- Tiempo que me tomo en resolver este ejercicio: Aproximadamente 1 hora

- Dependencias que se utilizaron:
    - "jest" - Para automatizar las pruebas del código.
    - "eslint" - Para refactorizar, identificar y corregir errores en el estilado de programación.
    - "express" - Para levantar el servidor y formar los endpoints de la API.

- Explicación del diseño de componentes:
    - `/lib/utils/Reader.js` - Código de javascript que se encarga de leer la información de un archivo JSON y dentro de una clase, parsear esa información en un nuevo diccionario.
    - `/lib/services/StudentService.js` - Código de javascript que se encarga de formular la lógica y los métodos de los requerimientos de los endpoints de la API, dentro de una clase, y filtra el diccionario con base a cada método que se usa.
    - `/lib/controllers/StudentsController.js` - Código de javascript que se encarga de agrupar y pasar de manera más fácil los datos formateados a la API, para que de este modo los endpoints se puedan formular de manera más sencilla, sin tener que importar tantos servicios y que todo el código este revuelto.

- Funcionamiento de la API:
  - El servidor se levanta con `npm run server` y se debe entrar en `http://localhost:3000/`.
  - Una vez que el servidor este disponible, dentro del endpoint `http://localhost:3000/v1/students/allStudents/`, se regresa la lista entera de todos los estudiantes, en conjunto con todos sus datos disponibles.
  - Dentro del endpoint `http://localhost:3000/v1/students/emailCertification/`, se regresa la lista de los emails, de los estudiantes que tienen la certificación completada (True).
  - Dentro del endpoint `http://localhost:3000/v1/students/creditsGreater/`, se regresa la lista de los estudiantes, cuyos créditos superan al 500, junto con todos sus datos.