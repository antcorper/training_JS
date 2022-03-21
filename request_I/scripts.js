const btRequest = document.getElementById("btRequest");
btRequest.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", (data) => {
    const dataJSON = JSON.parse(data.target.response);
    if (data.currentTarget.status < 400) printData(dataJSON);
    else console.log("Load callback - error!");
  });
  xhr.send();
});
function printData(dataJSON) {
  //Accedo a la lista
  const lista = document.getElementById("lista");

  //listar nombres solo una vez hay dos maneras
  //primera
  var lies = document.querySelectorAll("#lista li");
  for (var i = 0; lies[i]; i++) {
    li.parentNode.removeChild(li);
  }
  //segunda
  //lista.innerHTML = "";

  //bucle para enumerar los usuarios
  for (const userInfo of dataJSON) {
    console.log(`${userInfo.id} - ${userInfo.name}`);

    //creamos las etiquetas
    const li = document.createElement("li");
    const a = document.createElement("a");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img = document.createElement("img");
    const div = document.createElement("div");

    //añadimos class
    li.classList.add("celdaHome");

    //introducimos el texto y el enlace en cada etiqueta
    a.textContent = userInfo.website;
    a.href = `http://${userInfo.website}`;
    img.src = "https://loremflickr.com/320/240/dog";
    p1.textContent = userInfo.name;
    p2.textContent = userInfo.company.catchPhrase;

    //colocamos las etiquetas en jerarquía
    li.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(a);
    li.appendChild(div);
    lista.appendChild(li);
  }
}
