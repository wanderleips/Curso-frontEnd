function calcular(){
   let resp = window.document.getElementById("resposta")
   let valor = window.document.getElementById("tabuada")
   let num = valor.value
   
   
   
   for(let contar; contar <= 10; contar++){
        let resultado = num * contar
        resp.innerText += `${num} x ${contar} = ${resultado} <br>`
        console.log(`${num} x ${contar} = ${resultado}`)
   }
}