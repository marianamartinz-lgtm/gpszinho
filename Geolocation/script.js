const btn = document.getElementById("btn");
const lat = document.getElementById("latitude");
const longi = document.getElementById("longitude");
const mapa = document.getElementById("mapa");

const papel = document.getElementById("papel");
const lixeira = document.getElementById("lixeira");

btn.onclick = () => {

navigator.geolocation.getCurrentPosition(pos => {

const la = pos.coords.latitude;
const lo = pos.coords.longitude;

lat.textContent = la;
longi.textContent = lo;

mapa.innerHTML = `
<iframe
src="https://www.google.com/maps?q=${la},${lo}&z=15&output=embed"
width="100%" height="100%">
</iframe>
`;

});
};

/* DRAG */
papel.addEventListener("dragstart", e=>{
e.dataTransfer.setData("text","ok");
});

lixeira.addEventListener("dragover", e=>{
e.preventDefault();
});

lixeira.addEventListener("drop", e=>{
localStorage.clear();
lat.textContent="--";
longi.textContent="--";
mapa.innerHTML="";
});