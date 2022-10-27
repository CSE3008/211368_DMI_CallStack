const cortar = (ingrediente) => {
    /*
     if (ingrediente === 'lechuga'){
        throw new Error('Desaparecio la Lechuga!');
    }
    */
    console.log('Cortar ' + ingrediente);
  }
  
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
//   Primero se Ejecutaria la funcion de Hacer Ensaldas la cual ejecutaria 
// La funcion de Cortar despues Mezclar Ingredientes y por ultimo  Comer.
  hacerEnsaladaMixta();