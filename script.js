function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
  
    // Validação dos campos
    if (nome === "" || telefone === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    // Validação do tamanho do telefone (DDD + 8 ou 9 dígitos)
    if (telefone.length !== 10 && telefone.length !== 11) {
      alert("O número de telefone deve ter 10 ou 11 dígitos (DDD + 8 ou 9 dígitos).");
      return;
    }
  
    if (!telefone.match(/^\d+$/)) {
      alert("O número de telefone deve conter apenas dígitos numéricos.");
      return;
    }
  
    // Formata o telefone
    if (telefone.length === 10) {
      // Telefone fixo (DDD + 8 dígitos)
      telefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 6) + "-" + telefone.substring(6);
    } else {
      // Telefone celular (DDD + 9 dígitos)
      telefone = "(" + telefone.substring(0, 2) + ") " + telefone.substring(2, 7) + "-" + telefone.substring(7);
    }
  
    // Verifica se o contato já existe na tabela
    var existe = false;
    var linhas = document.getElementById("contatoTabela").rows;
    for (var i = 0; i < linhas.length; i++) {
      if (linhas[i].cells[0].textContent === nome) {
        existe = true;
        break;
      }
    }
  
    if (!existe) {
      // Cria a nova linha da tabela
      var linha = document.createElement("tr");
      var nomeCelula = document.createElement("td");
      var telefoneCelula = document.createElement("td");
  
      nomeCelula.textContent = nome;
      telefoneCelula.textContent = telefone;
  
      linha.appendChild(nomeCelula);
      linha.appendChild(telefoneCelula);
      document.getElementById("contatoTabela").appendChild(linha);
  
      // Limpa o formulário
      document.getElementById("contatoForm").reset();
    } else {
      alert("Contato já cadastrado!");
    }
  }