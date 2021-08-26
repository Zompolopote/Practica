var select = document.getElementById("tipos");

fetch("https://api.pokemontcg.io/v2/subtypes")
  .then((x) => x.json())
  .then((res) => {
    let data = res.data;
    // data.forEach(tipo => {
    //     let option = document.createElement("option");
    //     let text = document.createTextNode(tipo);
    //     option.appendChild(text);
    //     select.appendChild(option)
    // });
    for (let i = 0; i < data.length; i++) {
      var option = document.createElement("option");
      option.innerHTML = data[i];
      option.value = data[i];
      select.append(option);
    }
  });

var tabla = $("#tabla tbody");


$("#boton").click((e)=>{
    e.preventDefault();
    let search = $("#search").val();
    let url = `https://api.pokemontcg.io/v2/cards?q=name:${search}&pageSize=10`;
    fetch(url)
    .then((x) => x.json())
    .then((res) => {
       tabla.empty(); 
      let data = res.data;
      data.forEach((card) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerHTML = card.id;
        td2.innerHTML = card.name;
        tr.append(td1, td2);
        tabla.append(tr);
      });
    });
})
