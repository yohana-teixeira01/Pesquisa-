

let array = []

let respostas ={}
const proximo = (atributo,event)=>{
  respostas = JSON.parse(localStorage.getItem("respostas"))
   if(event.target.type == "checkbox"){
    if(!respostas.tipo){
     respostas = {...respostas, [atributo] : [event.target.value]}
     localStorage.setItem("respostas", JSON.stringify(respostas))
    }else{
      array = respostas.tipo
      let encontrado = array.find(elemento => elemento == event.target.value)
      //retirar
      if(encontrado){
        array = array.filter(elemento  => elemento != event.target.value)
        respostas = {...respostas, tipo : array}
        localStorage.setItem("respostas", JSON.stringify(respostas))
      //salvar
      }else{
        array.push(event.target.value)
        respostas = {...respostas, tipo : array}
        localStorage.setItem("respostas", JSON.stringify(respostas))
       }
    }
   }else{
     respostas = {...respostas, [atributo] : event.target.value}
     localStorage.setItem("respostas", JSON.stringify(respostas))
    } 
}
  
   const op = (event) =>{
    if(event.target.id == "Sim"){
        document.getElementById("opcao").style.display= "block";
    }else{
      document.getElementById("opcao").style.display= "none"; 
      document.getElementById("Quantidade_semana").value = ''; 
      delete respostas["Quantidade_semana"]
      localStorage.setItem("respostas",JSON.stringify(respostas))
    }
    
  }




    const Atualizar = ()=>{
      respostas = JSON.parse(localStorage.getItem("respostas"))
      Object.keys(respostas).forEach(
      Dados =>{
        let campo = document.getElementById(String (Dados))
        
        if (campo){
          campo.value = respostas[Dados]
        }
        //radio
        if(Dados == 'pratica_exercicios'){
          campo = document.getElementById(respostas[Dados])
          // console.log("Entrou")
          if(campo){
          campo.checked = true
          if(campo.id =='Sim'&& campo.checked){
            document.getElementById('opcao').style.display = 'block'
          }

          }

        }
        if(Dados == 'tipo'){
          if(respostas['tipo']){
           let array_carregar = respostas['tipo']
            array_carregar.forEach(
            elemento =>{
            let campo_checkbox = document.getElementById(elemento)
            if(campo_checkbox){
              campo_checkbox.checked = true
            }
          }

          )
        }
        }
        
      }
      
      
      ) 

    }

    const Apagar = ()=>{
     localStorage.clear()

    }

    const Resultados = () =>{
      respostas = JSON.parse(localStorage.getItem("respostas"))
     document.getElementById("Nome").innerHTML = respostas["nome"]
     document.getElementById("gosta_exercicio").innerHTML = respostas["pergunta"]
     document.getElementById("pratica_exercicio").innerHTML = respostas["pratica_exercicios"]
    if(respostas['pratica_exercicios'] == 'Sim'){
     document.getElementById("pergunta_some").style.display ="block"
     document.getElementById("Quantidade_semana").innerHTML = respostas["Quantidade_semana"]
    }
    document.getElementById("exercicio_identica").innerHTML = respostas["tipo"]
  }
 