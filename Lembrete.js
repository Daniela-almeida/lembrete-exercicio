 
 // lembrete de ajuda para saúde mental (lógica)

 let lembrete = alert("Bem vindo ao Lembrete do dia!!");
 
       // 1º
 const think = prompt("Esta pensativo demais ? (Sim/Não");
  if(think === "Sim") {
  alert("Escreva seus pensamentos e reflita sobre quais são bons e os mantenha, e os ruins não de importância!!💜")
} else if(think === "Não") {
  alert("Você está indo bem, absorva só o que for necessário para seu bem!!")
} 
      // 2º
 const anxious = prompt("Se sente muito ansioso? (Sim/Não)");
  if(anxious === "Sim") {
  alert("Medite com músicas ou meditação guiada, e sempre respire profundamente. Tudo tem solução")
} else if(anxious === "Não") {
  alert("Muito bem, está conseguindo manter a calma e sendo paciente consigo mesmo")
}

      // 3º
 const tired = prompt("Se sente muito cansado? (Sim/Não)");
 if(tired === "Sim") {
  alert("Tenha mais noites de sono revigorantes, durma na hora certa,não se sobrecarregue")
} else if(tired === "Não") {
  alert("Continue assim, conseguirá fazer as coisas muito melhor descansado")
}

      // 4º
 const sad = prompt("Se sente triste ultimamente? (Sim/Não)")
  if(sad === "Sim") {
  alert("Comece a se exercitar mais, saia mais, faça coisas que goste e que te distraem da sua tristeza")
} else if(sad === "Não") {
  alert("Ótimo, continue assim. Por mais que venham dias tristes não podemos deixar eles tomarem conta de nós. Você é maior que sua tristeza")
}

      // 5º
 const stressed = prompt("Se sente estressado frequentemente? (Sim/Não)");
  if(stressed === "Sim") {
  alert("Faça uma caminhada, exercicíos e se alimente bem..durma mais e tenha um hobby e obviamente não desconte em outras pessoas")
} else if(stressed === "Não") {
  alert("Certo, continue fazendo coisas que te acalmem")
}

      // 6º
 const irritaded = prompt("Se sente irritado muitas vezes? (Sim/Não)");
  if(irritaded === "Sim") {
  alert("Ouça músicas, brinque com seu pet, assista filme, faça um doce que gosta, tenha um hobby e obviamente não desconte em outras pessoas")
} else if(irritaded === "Não") {
  alert("Certo, continue fazendo coisas que te relaxem.")
}

      // 7º
 const lazynes = prompt("Se sente preguiçoso na maioria do tempo? (Sim/Não)");
  if(lazynes === "Sim") {
  alert("Não fique tanto no celular, acorde mais cedo e tente ser mais produtivo com o que gosta. Tenha metas no dia e tente cumpri-las sem se cobrar.")
} else if(lazynes === "Não") {
  alert("Certo, continue fazendo coisas que te deixem produtivo")
}


  
 const continuar = prompt("Continua sentindo algumas dessas coisas frequentemente? (Sim/Não)");
  while(continuar === "Sim") {
    alert("Continue praticando, mas também faça terapia e faça orações para o que quer que acredite!")
    break
 }if(continuar === "Não") {
    alert("Parabéns, você está conseguindo !!")
 }

 




