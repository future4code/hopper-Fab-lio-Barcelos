// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 function comparaNumeros(a, b) {
  return a - b
    }
    return array.sort(comparaNumeros)
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
   function filtraPares(num) {
    return num % 2 === 0
   }
   return array.filter(filtraPares)
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrayPares = retornaNumerosPares(array)
   function elevaQuadrado (num) {
   return num ** 2
   }
   return arrayPares.map(elevaQuadrado)
}
  
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  let i = 0
  for (array[i] of array) {  
  if (array[i] > maior) {
  maior = array[i]  
  }
}
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {



} 
 



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}