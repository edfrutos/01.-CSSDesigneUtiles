Estructura de ventanas para fragmentos de código con opción de copia de fragmento en cualquiera de las ventanas.
Realizada con los estilos básicos para poderse amoldar mejor a las características del HTML donde se vaya a instalar.
Llegado el momento de utilizar los estilos sugeridos, tener  muy encuenta los 'id' y 'class'
Una opción de estilos básicos pero con algo de diseño sería:

```css
/* Estilos para el contenedor de los fragmentos de código */
#code-window {
    width: 50%;
    height: 500px;
    background-color: #f5f5f5;
    margin: 20px auto;
  }
  #code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 0 0 0 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  #code-input {
    width: 100%;
    height: calc(100% - 50px);
    padding: 20px;
    overflow: auto;
    border-radius: 10px;
  }
  /*Para justificar el código con respecto al tamaño de la ventana, puede agregar el estilo <code>white-space: pre-wrap</code> 
  al elemento <code>pre</code> que contiene el fragmento de código. Esto forzará a que el código se muestre con los saltos de 
  línea y los espacios en blanco originales y se ajuste al ancho de la ventana. Aquí está el código necesario para hacerlo:*/

  #code-input {
      white-space: pre-wrap;
  }
  
  /* ara ajustar el texto del fragmento a la parte izquierda de la ventana, puede agregar el estilo <code>text-align: left</code> 
  al elemento <code>pre</code> que contiene el fragmento de código. Aquí está el código necesario para hacerlo:*/

  #code-input {
      text-align: left;
  }

  #copy-btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  #copy-btn {
    display: flex;
    align-items: center;
  }
  
  #copy-btn svg {
    margin-right: 10px;
  }
  ```
  Estos estilos se encuentran en el archivo VenFragCod.css que se también adjunta
  A parte se facilitan los ficheros 'styles.css' y 'script.js' por si se quiere separar los mismos del archivo 'index.html'