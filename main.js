const getBanco = () => JSON.parse(localStorage.getItem('box-img')) ?? [];
const setBanco = (banco) => localStorage.setItem('box-img', JSON.stringify(banco));
//localStorage.clear();

function adicionar() {
  let urlFilme = document.getElementById("iUrl").value;
  let nomeFilme = document.getElementById("iNome").value;
  let trailerFilme = document.getElementById("iUrlTrailer").value;

  if (urlFilme.endsWith("jpg") ||
      urlFilme.endsWith("jpeg") || 
      urlFilme.endsWith("png") && 
      urlFilme != "" && nomeFilme != "" && 
      trailerFilme != "") {
      const banco = getBanco();
      banco.push({'urlFilme': urlFilme, 'nomeFilme': nomeFilme, 'urlTrailer': trailerFilme});
      setBanco(banco);
      
    
    document.getElementById('iUrl').value = '';
    document.getElementById('iNome').value = '';
    document.getElementById('iUrlTrailer').value = '';
    
    alert('Série adicionada com sucesso!');
    
  } else {
      alert('Por favor, preencha todos os campos...');
  }
  
 
}

 function listarFilmes() {
   let boxImg = document.getElementById("box-img");
   boxImg.innerHTML = '';
    const banco = getBanco();
    banco.forEach((item, indice) => boxImg.innerHTML += `<div class="box-img"> <a target=_blank href= ${item.urlTrailer}><img src=${item.urlFilme}></a>
        <p id='iMsg'>${item.nomeFilme}</p>`)
}


