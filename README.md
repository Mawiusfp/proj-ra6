# Calculadora Angular

Aplicación web sencilla desarrollada con **Angular** que suma dos números

---

## Descripción

El usuario introduce dos números y pulsa el botón **Add** para obtener la suma. Incluye validación de números negativos y un easter egg para el resultado `3.14`

---

## Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| Angular | 17+ (standalone) |
| TypeScript | 5.x |
| FormsModule | (ngModel) |

---

## Estructura del proyecto

```
src/app/
- example/
--- example.ts
--- example.html
--- example.css
```

---

## Instrucciones de instalación

```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO/calculadora-angular.git
cd calculadora-angular

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
ng serve
```

Abre el navegador en `http://localhost:4200`

---

## Funcionamiento

- Introduce dos números en los campos **Number 1** y **Number 2**
- Pulsa **Add** para calcular la suma
- Si algún número es negativo, muestra un mensaje de error
- Si el resultado es `3.14`, muestra `π`

---

## Despliegue

```bash
ng build
```
