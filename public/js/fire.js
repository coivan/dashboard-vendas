const firebaseConfig = {
  apiKey: "AIzaSyAlg2DHGI3cSAZ092ZI_WEQy6EnrPz8x_U",
  authDomain: "dashboard-vendas-38027.firebaseapp.com",
  databaseURL: "https://dashboard-vendas-38027-default-rtdb.firebaseio.com",
  projectId: "dashboard-vendas-38027",
  storageBucket: "dashboard-vendas-38027.appspot.com",
  messagingSenderId: "260328449489",
  appId: "1:260328449489:web:c28afb9ed57439ee5aecf0",
  measurementId: "G-VEMMP140LH"
};

  const app = initializeApp(firebaseConfig)

  let imagemSelecionada;

  let tabela = document.getElementById('tabelaCategoria').getElementsByTagName("tbody")[0]

  let bd = firebase.getFirestore();

 // singleEventListener (estoque) 
  bd.collection("estoque").doc("1").get().then(function (doc){

    if(doc.exist){
      /* console.log("Existe") */
      const dados = doc.data()
        const nome = dados.nome
        const quantidade = dados.quantidade
        const valor = dados.valor
        const data = dados.data

      console.log("Nome Pasta: "+ key+ " ID: "+id + "Nome: "+nome)
    }else{
      console.log("Não Existe")
    }

  })

  // singleEventListener (venda)
  bd.collection("venda").doc("1").get().then(function (doc){

    if(doc.exist){
      /* console.log("Existe") */
      const dados = doc.data()
        const nome = dados.nome
        const quantidade = dados.quantidade
        const valor = dados.valor
        const data = dados.data

      console.log("Nome Pasta: "+ key+ " ID: "+id + "Nome: "+nome)
    }else{
      console.log("Não Existe")
    }

  })

  // singleEventListener (venda_atenção)
  bd.collection("venda_atenção").doc("1").get().then(function (doc){

    if(doc.exist){
      /* console.log("Existe") */
      const dados = doc.data()
        const nome = dados.nome
        const quantidade = dados.quantidade
        const valor = dados.valor
        const data = dados.data

      console.log("Nome Pasta: "+ key+ " ID: "+id + "Nome: "+nome)
    }else{
      console.log("Não Existe")
    }

  })

  // singleEventListener (venda_destaque)
  bd.collection("venda_destaque").doc("1").get().then(function (doc){

    if(doc.exist){
      /* console.log("Existe") */
      const dados = doc.data()
        const nome = dados.nome
        const quantidade = dados.quantidade
        const valor = dados.valor
        const data = dados.data

      console.log("Nome Pasta: "+ key+ " ID: "+id + "Nome: "+nome)
    }else{
      console.log("Não Existe")
    }

  })

  