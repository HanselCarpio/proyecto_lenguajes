
function remover() {
    document.getElementById("facturacion").classList.remove();
}


function cambiarMenuMc() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");
    var aux3 = document.getElementById("campo3");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/mc/big_new_cr.png" alt="Mc" width="150" height="100"><p id="bigMc"><strong> Big Mc ¢3000 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'bigMc\')"></center><div class="thumbnail text-center"><img src="img/mc/mc-flurry-oreo_new_cr.png" alt="Mc" width="150" height="100"><p id="mcFlurry"><strong> Mc Flurry ¢1300 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'mcFlurry\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/mc/mc-wrap-classic.png" alt="Mc" width="150" height="100"><p id="mcWrap"><strong> Mc Wrap ¢2000 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'mcWrap\')"></center><div class="thumbnail text-center"><img src="img/mc/papas.png" alt="Mc" width="150" height="100"><p id="mcPapas"><strong> Papas ¢700 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'mcPapas\')"></center>';
    aux3.innerHTML = '<div class="thumbnail text-center"><img src="img/mc/COCA_1.png" alt="Mc" width="150" height="100"><p id="refresco"><strong> Refresco ¢700 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'refresco\')"></center><div class="thumbnail text-center"><img src="img/mc/pollo-mc-crispy_new_cr.png" alt="Mc" width="150" height="100"><p id="mcPolla"><strong> Pollo McCrispy ¢1000 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'mcPolla\')"></center>';
}

function cambiarMenuKFC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");
    var aux3 = document.getElementById("campo3");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/kfc/bbq_crunch.webp" alt="Mc" width="150" height="100"><p id="bbqChrunchy"><strong> BBQ Chrunchy ¢2600</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'bbqChrunchy\')"></center><div class="thumbnail text-center"><img src="img/kfc/ensalada.webp" alt="Mc" width="150" height="100"><p id="ensalada"><strong> ensalada ¢1400</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'ensalada\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/kfc/guacamole_santaFe.webp" alt="Mc" width="150" height="100"><p id="guacamoleSantaFe"><strong> Guacamole santa fe ¢2000</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'guacamoleSantaFe\')"></center><div class="thumbnail text-center"><img src="img/kfc/papas.webp" alt="Mc" width="150" height="100"><p id="papas"><strong> Papas ¢850</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'papas\')"></center>';
    aux3.innerHTML = '<div class="thumbnail text-center"><img src="img/kfc/pepsi.webp" alt="Mc" width="150" height="100"><p id="pepsi2l"><strong> Pepsi 2 lts ¢2300</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'pepsi2l\')"></center><div class="thumbnail text-center"><img src="img/kfc/Twister.webp" alt="Mc" width="150" height="100"><p id="twisterClasic"><strong> Twister Clasic ¢2100 </strong></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'twisterClasic\')"></center>';
}

function cambiarMenuHH() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/hoteles/YuccaBeachfront/Yucca1.webp" alt="yucca" width="450" height="400"><p id="yuccaBeach"><strong>Yucca Beachfront Cabinas</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'yuccaBeach\')"></center><div class="thumbnail text-center"><img src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE1.webp" alt="jaco" width="150" height="200"><p id="DOWNTOWNLITTLE"><strong> DOWNTOWN LITTLE LOFT - JACO INN</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'DOWNTOWNLITTLE\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/hoteles/FamilyApartment/FamilyApartment1.webp" alt="family" width="150" height="100"><p id="familyApart"><strong>Family apartment in San Jose</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'FamilyApartment\')"></center><div class="thumbnail text-center"><img src="img/hoteles/OceanFrontEscape/OceanFrontEscape1.webp" alt="Ocean" width="150" height="100"><p id="OceanFront"><strong>Ocean Front Escape - Classic Queen</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'OceanFront\')"></center>';
}

function cambiarMenuTB() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");
    var aux3 = document.getElementById("campo3");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/taco/crunchyWrap.png" alt="Mc" width="150" height="100"><p id="chrunchyWrap"><strong> Chrunchy Wrap ¢2100</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'chrunchyWrap\')"></center><div class="thumbnail text-center"><img src="img/taco/fiesta_fries.png" alt="Mc" width="150" height="100"><p id="fiestaFriesSupreme"><strong> Fiesta Fries Supreme ¢1475</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'fiestaFriesSupreme\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/taco/gordita_chrunchy.png" alt="Mc" width="150" height="100"><p id="gorditaChrunchy"><strong> Gordita Chrunchy ¢2300</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'gorditaChrunchy\')"></center><div class="thumbnail text-center"><img src="img/taco/mexica_pizza.png" alt="Mc" width="150" height="100"><p id="pizzaMexicana"><strong> Pizza Mexicana ¢2700</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'pizzaMexicana\')"></center>';
    aux3.innerHTML = '<div class="thumbnail text-center"><img src="img/taco/xtreme_chicken.png" alt="Mc" width="150" height="100"><p id="xtremeChicken"><strong> Xtreme Chicken ¢3000</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'xtremeChicken\')"></center><div class="thumbnail text-center"><img src="img/taco/bacon_huevo.png" alt="Mc" width="150" height="100"><p id="baconHuevoburrito"><strong> Bacon Huevo Burrito ¢1600</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'baconHuevoBurrito\')"></center>';
}

function cambiarMenuLC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");
    var aux3 = document.getElementById("campo3");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/casona/churrasco.jpg" alt="Mc" width="150" height="100"><p id="churrasco"><strong> Churasco ¢4800</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'churrasco\')"></center><div class="thumbnail text-center"><img src="img/casona/costilla.jpg" alt="Mc" width="150" height="100"><p id="costilla"><strong> costilla ¢6500</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'costilla\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/casona/filetmignon.jpg" alt="Mc" width="150" height="100"><p id="filetMignon"><strong> Filet Mignon ¢7000</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'filetMignon\')"></center><div class="thumbnail text-center"><img src="img/casona/marytierra.jpg" alt="Mc" width="150" height="100"><p id="marYtierra"><strong> Mar y Tierra ¢10000</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'marYtierra\')"></center>';
    aux3.innerHTML = '<div class="thumbnail text-center"><img src="img/casona/tbone.jpg" alt="Mc" width="150" height="100"><p id="tBone"><strong> T Bone ¢8000 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'tBone\')"></center><div class="thumbnail text-center"><img src="img/casona/chorizo.jpg" alt="Mc" width="150" height="100"><p id="chorizo"><strong> Chorizo ¢3700 </strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'chorizo\')"></center>';
}

function compra() {
    alert("SU COMPRA HA SIDO REALIZADA CON EXITO");
    window.location.href = "index.html";
}

