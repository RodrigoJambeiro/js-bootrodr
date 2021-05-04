// Import stylesheets
import "./style.css";
import "./css/bootstrap.css";
import "./js/bootstrap.js";

(function(w) {
  var tabela = document.getElementById("tabela_de_aulas");
  var cadastrarAula = document.getElementById("cadastro_de_aulas");
  var cadastrarDisc = document.getElementById("cadastro_de_disciplina");
  var cadastrarProf = document.getElementById("cadastro_de_professores");

  var count = 2;
  var click = 1;

  var cadastroaula = function() {
    tabela.style.display = "none";
    cadastrarAula.style.display = "block";
  };

  var retornarTabela = function() {
    cadastrarAula.style.display = "none";
    tabela.style.display = "block";
  };

  var cadastrarDiscipli = function() {
    cadastrarAula.style.display = "none";
    cadastrarDisc.style.display = "block";
  };

  var retornarCadastroAula = function() {
    cadastrarDisc.style.display = "none";
    cadastrarProf.style.display = "none";
    cadastrarAula.style.display = "block";
  };

  var cadastrodeprofessores = function() {
    cadastrarAula.style.display = "none";
    cadastrarProf.style.display = "block";
  };

  var ativarDisciplinaCadastrada = function() {
    var nome = document.getElementById("nomeDisci");
    var descricao = document.getElementById("nomeDescri");
    var selecioneDisciplina = document.getElementById("disciplina");

    var vetorDisciplina = [];

    vetorDisciplina.push(nome.value);

    for (var i = 0; i < vetorDisciplina.length; i++) {
      var option = new Option(vetorDisciplina[i], vetorDisciplina[i]);
      selecioneDisciplina.add(option);
    }

    cadastrarDisc.style.display = "none";
    cadastrarAula.style.display = "block";

    nome.value = null;
    descricao.value = null;
  };

  var ativarProfessorCadastrado = function() {
    var nome = document.getElementById("nomeProf");
    var cpf = document.getElementById("cpfProf");
    var email = document.getElementById("emailProf");
    var telefone = document.getElementById("telefoneProf");
    var endereco = document.getElementById("enderecoProf");
    var selecioneProfessor = document.getElementById("professor");

    var vetorProfessor = [];

    vetorProfessor.push(nome.value);

    for (var i = 0; i < vetorProfessor.length; i++) {
      var opcao = new Option(vetorProfessor[i], vetorProfessor[i]);
      selecioneProfessor.add(opcao);
    }

    cadastrarProf.style.display = "none";
    cadastrarAula.style.display = "block";

    nome.value = null;
    cpf.value = null;
    email.value = null;
    telefone.value = null;
    endereco.value = null;
  };

  var adicionarAluno = function() {
    var tabeladosalunos = document.getElementById("alunosTabela");
    var elementosDiv = document.createElement("div");

    count = count + 1;

    tabeladosalunos.appendChild(elementosDiv);
    elementosDiv.innerHTML =
      `<div class="row">
                    <div class="col-md-1">
                      <label>Id:</label>
                      <input type="number" class="form-control" placeholder="Id" name="idAluno` +
      (count - 1) +
      `" id="idAluno` +
      (count - 1) +
      `" value="` +
      count +
      `">
                    </div>
                    <div class="col-md-2">
                      <label>Nome: </label>
                      <input type="text" class="form-control" placeholder="Nome Completo" name="nameAluno` +
      (count - 1) +
      `" id="nameAluno` +
      (count - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label>CPF:</label>
                      <input type="number" class="form-control" placeholder="CPF" name="cpfAluno` +
      (count - 1) +
      `" id="cpfAluno` +
      (count - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Endereço: </label>
                      <input type="text" class="form-control" placeholder="Endereço" name="enderecoAluno` +
      (count - 1) +
      `" id="enderecoAluno` +
      (count - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Telefone: </label>
                      <input type="number" class="form-control" placeholder="Telefone" name="telefoneAluno` +
      (count - 1) +
      `" id="telefoneAluno` +
      (count - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Email: </label>
                      <input type="email" class="form-control" placeholder="email" name="emailAluno` +
      (count - 1) +
      `" id="emailAluno` +
      (count - 1) +
      `">
                    </div>
                  </div>`;
  };

  var cadastroDeAulas = function() {
    var tabelaDados = [];
    var dados = [];
    var disciplina = document.getElementById("disciplina");
    var professor = document.getElementById("professor");
    var tabelaAula = document.getElementById("tabelaDeAulas");

    dados.push(disciplina.value);
    dados.push(professor.value);
    disciplina.value = "selected";
    professor.value = "selected";

    for (var i = 0; i < count; i++) {
      var name = document.getElementById("nameAluno" + i);
      var cpf = document.getElementById("cpfAluno" + i);
      var endereco = document.getElementById("enderecoAluno" + i);
      var telefone = document.getElementById("telefoneAluno" + i);
      var email = document.getElementById("emailAluno" + i);

      dados.push(name.value);

      name.value = null;
      cpf.value = null;
      endereco.value = null;
      telefone.value = null;
      email.value = null;
    }

    tabelaDados.push(dados);

    var professorTabela = null;
    var disciplinaTabela = null;
    var alunosTabela = [];

    disciplinaTabela = tabelaDados[0][0];
    professorTabela = tabelaDados[0][1];

    for (var k = 0; k < count; k++) {
      alunosTabela.push(tabelaDados[0][k + 2]);
    }

    var trNova = document.createElement("tr");
    tabelaAula.appendChild(trNova);
    trNova.innerHTML =
      "<tr>" +
      "<td>" +
      click +
      "</td>" +
      "<td>" +
      professorTabela +
      "</td>" +
      "<td>" +
      disciplinaTabela +
      "</td>" +
      "<td>" +
      alunosTabela +
      "</td>" +
      "</tr>";

    click = click + 1;
    count = 2;

    cadastrarAula.style.display = "none";
    tabela.style.display = "block";
  };

  (w.cadastroaula = cadastroaula),
    (w.retornarTabela = retornarTabela),
    (w.cadastrarDiscipli = cadastrarDiscipli),
    (w.retornarCadastroAula = retornarCadastroAula),
    (w.cadastrodeprofessores = cadastrodeprofessores),
    (w.ativarDisciplinaCadastrada = ativarDisciplinaCadastrada),
    (w.ativarProfessorCadastrado = ativarProfessorCadastrado),
    (w.adicionarAluno = adicionarAluno),
    (w.cadastroDeAulas = cadastroDeAulas);
})(window);
