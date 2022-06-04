// Host e banco de dados substituido para testes
// INÍCIO MODIFICAÇÕES DO IVAN
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  push,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr-xP7-ORXBxI1qHhwa-jklpxCg5vFHL4",
  authDomain: "dashboard-vendas-f9593.firebaseapp.com",
  databaseURL: "https://dashboard-vendas-f9593-default-rtdb.firebaseio.com/",
  projectId: "dashboard-vendas-f9593",
  storageBucket: "dashboard-vendas-f9593.appspot.com",
  messagingSenderId: "615745376761",
  appId: "1:615745376761:web:a6cc3c76b90b0796c6ed28"
};

const app = initializeApp(firebaseConfig)

const db = getDatabase();

/* -------- References ---------- */
let nomeCompleto = document.getElementById("nome-completo");
let email = document.getElementById("email-completo");
let tipoContato = document.getElementById("estilo");
let celular = document.getElementById("celular");
let telefone = document.getElementById("telefone");
let mensagem = document.getElementById("textareamsg");
let enviarGravar = document.getElementById("btn_enviar");

enviarGravar.addEventListener('click', inserirDados);

function inserirDados() {
  const novaChave = push(child(ref(db), 'Musicas')).key;
  console.log(nomeCompleto);
  console.log(email)
  set(ref(db, "fale-conosco/" + novaChave), {
      nome: nomeCompleto.value,
      email: email.value,
      tipoContato: tipoContato.value,
      celular: celular.value,
      telefone: telefone.value,
      mensagem: mensagem.value
    }).then(() => {
      console.log("incluído com sucesso");
    })
    .catch((error) => {
      console.log("erro de inclusão");
    })
}

function lerDados() {
  const dbref = ref(db);
  get(child(dbref, "fale-conosco/" + novaChave)).then((snapshot) => {
    if (snapshot.exists()) {
      nomeCompleto.value = snapshot.val().nome;
      email.value = snapshot.val().email;
      tipoContato.value = snapshot.val().tipoContato;
      celular.value = snapshot.val().celular;
      telefone.value = snapshot.val().telefone;
      mensagem.value = snapshot.val().mensagem;
    } else alert("nao existe dado");

  }).catch((error) => {
    console.log("erro ", error);
  })
}

function atualizarDados() {
  update(ref(db, "fale-conosco/" + novaChave), {
      nome: nomeCompleto.value,
      email: email.value,
      tipoContato: tipoContato.value,
      celular: celular.value,
      telefone: telefone.value,
      mensagem: mensagem.value

    }).then(() => {
      console.log("atualizado com sucesso");
    })
    .catch((error) => {
      console.log("erro de atualizacao");
    })
}

function excluirDados() {
  remove(ref(db, "fale-conosco/" + novaChave), {
      nome: nomeCompleto.value,
      email: email.value,
      tipoContato: tipoContato.value,
      celular: celular.value,
      telefone: telefone.value,
      mensagem: mensagem.value

    }).then(() => {
      console.log("excluído com sucesso");
    })
    .catch((error) => {
      console.log("erro de exclusão");
    })
}

$(document).ready(function () {
  $("#btn_enviar").click(function () {
    alert("Formulário enviado com sucesso!");
  });
});
 
$(document).ready(function () {
  $(".limpar_form").click(function () {
    $("#nome-completo").val("");
    $("#email-completo").val("");
    $("#estilo").val("");
    $("#celular").val("");
    $("#telefone").val("");
    $("#textareamsg").val("");
  });
});
// FIM MODIFICAÇÕES DO IVAN

// APARECE ERRO NO CONSOLE, POR ISSO COMENTEI
// const firebaseConfig = {
//   apiKey: "AIzaSyAlg2DHGI3cSAZ092ZI_WEQy6EnrPz8x_U",
//   authDomain: "dashboard-vendas-38027.firebaseapp.com",
//   databaseURL: "https://dashboard-vendas-38027-default-rtdb.firebaseio.com",
//   projectId: "dashboard-vendas-38027",
//   storageBucket: "dashboard-vendas-38027.appspot.com",
//   messagingSenderId: "260328449489",
//   appId: "1:260328449489:web:c28afb9ed57439ee5aecf0",
//   measurementId: "G-VEMMP140LH"
// };

// let imagemSelecionada;

// let tabela = document.getElementById('tabelaCategoria').getElementsByTagName("tbody")[0]

// let bd = firebase.getFirestore();

// singleEventListener (estoque) 
// bd.collection("estoque").doc("1").get().then(function (doc) {

//   if (doc.exist) {
//     /* console.log("Existe") */
//     const dados = doc.data()
//     const nome = dados.nome
//     const quantidade = dados.quantidade
//     const valor = dados.valor
//     const data = dados.data

//     console.log("Nome Pasta: " + key + " ID: " + id + "Nome: " + nome)
//   } else {
//     console.log("Não Existe")
//   }

// })

// singleEventListener (venda)
// bd.collection("venda").doc("1").get().then(function (doc) {

//   if (doc.exist) {
//     /* console.log("Existe") */
//     const dados = doc.data()
//     const nome = dados.nome
//     const quantidade = dados.quantidade
//     const valor = dados.valor
//     const data = dados.data

//     console.log("Nome Pasta: " + key + " ID: " + id + "Nome: " + nome)
//   } else {
//     console.log("Não Existe")
//   }

// })

// singleEventListener (venda_atenção)
// bd.collection("venda_atenção").doc("1").get().then(function (doc) {

//   if (doc.exist) {
//     /* console.log("Existe") */
//     const dados = doc.data()
//     const nome = dados.nome
//     const quantidade = dados.quantidade
//     const valor = dados.valor
//     const data = dados.data

//     console.log("Nome Pasta: " + key + " ID: " + id + "Nome: " + nome)
//   } else {
//     console.log("Não Existe")
//   }

// })

// singleEventListener (venda_destaque)
// bd.collection("venda_destaque").doc("1").get().then(function (doc) {

//   if (doc.exist) {
//     /* console.log("Existe") */
//     const dados = doc.data()
//     const nome = dados.nome
//     const quantidade = dados.quantidade
//     const valor = dados.valor
//     const data = dados.data

//     console.log("Nome Pasta: " + key + " ID: " + id + "Nome: " + nome)
//   } else {
//     console.log("Não Existe")
//   }

// })