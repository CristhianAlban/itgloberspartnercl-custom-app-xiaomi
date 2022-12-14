# Boton de Whatsapp

Este componente es un boton que se renderiza en a parte inferior derecha de la pagina y al darle click, el cliente podra contactarse via whatsapp  .
- Vista previa 
![image](/assets/img/preview.jpg)


## Configuration 

### Paso 1 - Clonar

Realizar la [clonación](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) de este repositorio.

### Paso 2 - Editar el Manifest.json 

Ingresar al archivo manifest.json y realizar modificaciones en: `vendor`, `name`, `version`, `title` y `description`
como se muestra en el siguiente ejemplo: 
```
{
  "vendor": "itgloberspartnercl",
  "name": "whatsapp-button",
  "version": "0.0.1",
  "title": "Whatsapp Button Component",
  "description": "Boton de componente para whatsApp que recibirá un teléfono, un logo y un mensaje",
}
```
Además, verifique que el archivo cuente con los siguientes builders y dependecies: 
```
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  },
  "dependencies": {
    "vtex.css-handles": "0.x"
  },
```
### Paso 3 - Instalar node-modules

Para realizar esta instalación de node-modules, debe estar ubicado en la carpeta de `react` de la aplicación y ejecutar el comando `yarn`, y tendrá instaladas todas las dependencias necesarias para usar esta plantilla.

### Paso 4 - Ejecutar el preview

Despues de realizar los pasos anteriores puede verificar si su componente está funcionando ejecutando el comando `vtex link` si todo funciona correctamente deberá ver en consola `Sending locale change event`, si por el contrario ocurre un error verifique los pasos anteriores y realice nuevamente este paso. 

### Paso 5 - Implementar el componente

Para utilizar el componente debe agregarlo a las `dependencies` en el `manifest.json` de su tienda de la siguiente manera: vendor.name : version. Por ejemplo: 

```
  "dependencies": {
     "itgloberspartnercl.whatsapp-button": "0.x"
  }
```

### Paso 6 - declarar el componente y pasar las "props"

Para que el componente funcione correctamente debe declararse con las siguientes propiedades: `"logo"`, `"phone"`, `"message"`, `"width"`, `"height"`  de la siguiente forma: 

```
  "whatsapp-button": {
    "props": {
      "logo": "assets/img/whatsapp-logo.png",
      "phone": "3165166685",
      "message": "contactanos"
      "width": 100,
      "height":100
    }
  }

```
nota: tanto la propiedad de `"width"` como `"height"` es de tipo `number` 

## Contributors 

Cristhian Arley Alban Larrahondo
