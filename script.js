 window.alert("Hello World");
 
 var nomePessoa = document.getElementById("txtNome").value;
 window.alert("Hello " + nomePessoa.toUpperCase());
 var idadeCachorro = document.getElementById("idade").value;
 if(idadeCachorro <= 2){
     window.alert("Cachorro Filhote");
 }else
 if(idadeCachorro > 2 && idadeCachorro <= 8){
     window.alert("Cachorro Adulto");
 }else{
    window.alert("Cachorro Idoso");
 }

 function mudarValor(){
     var pegarHabilidade = document.getElementById("habilidade").value;
     var pegarElemt = document.getElementById("Atributo").value;
     pegarElemt *=  pegarHabilidade; 
     alert(pegarHabilidade);
     alert(pegarElemt);
 }