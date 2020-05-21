
function remover() {
    document.getElementById("facturacion").classList.remove();
}


function cambiarMenuAC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/completo/CHARMINGHOUSE/CHARMING HOUSE1.webp" alt="charming" width="150" height="100"><p id="charminghouse"><strong>CHARMING HOUSE Seaside& Pine Forest</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'charminghouse\')"></center><div class="thumbnail text-center"><img src="img/completo/RadiantApartment/Radiant Apartment1.webp" alt="radiant" width="150" height="100"><p id="radiant"><strong>Radiant Apartment with Terrace in Roma Norte</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'radiant\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/completo/SunnyApartment/sunny1.webp" alt="sunny" width="150" height="100"><p id="sunny"><strong>Sunny apartment near metro station</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'sunny\')"></center><div class="thumbnail text-center"><img src="img/completo/VillaHumac/Villa Humac1.webp" alt="villa" width="150" height="100"><p id="villa"><strong>Villa Humac Hvar</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'villa\')"></center>';
}

function cambiarMenuHP() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/habitacion/ClosestMiami/primera1.webp" alt="closest" width="150" height="100"><p id="closest"><strong>Closest place to Miami International Airport</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'closest\')"></center><div class="thumbnail text-center"><img src="img/habitacion/EleganteHabitación/Elegante habitación1.webp" alt="elegante" width="150" height="100"><p id="elegante"><strong>Elegante habitación ideal para tu estancia.</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'elegante\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/habitacion/ElegantSpacious/Elegant and Spacious1.webp" alt="elegant" width="150" height="100"><p id="elegant"><strong>Elegant and Spacious Hideaway Close to Downtown</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'elegant\')"></center><div class="thumbnail text-center"><img src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO1.webp" alt="suite" width="150" height="100"><p id="suite"><strong>SUITE DEL LAGO: Romance, Naturaleza y Sanitización</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'suite\')"></center>';
}

function cambiarMenuHH() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/hoteles/YuccaBeachfront/Yucca1.webp" alt="yucca" width="450" height="400"><p id="yuccaBeach"><strong>Yucca Beachfront Cabinas</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'yuccaBeach\')"></center><div class="thumbnail text-center"><img src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE1.webp" alt="jaco" width="150" height="200"><p id="DOWNTOWNLITTLE"><strong> DOWNTOWN LITTLE LOFT - JACO INN</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'DOWNTOWNLITTLE\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/hoteles/FamilyApartment/FamilyApartment1.webp" alt="family" width="150" height="100"><p id="familyApart"><strong>Family apartment in San Jose</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'FamilyApartment\')"></center><div class="thumbnail text-center"><img src="img/hoteles/OceanFrontEscape/OceanFrontEscape1.webp" alt="Ocean" width="150" height="100"><p id="OceanFront"><strong>Ocean Front Escape - Classic Queen</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'OceanFront\')"></center>';
}

function cambiarMenuHC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = '<div class="thumbnail text-center"><img src="img/compartida/ArchitecturalGem/ArchitecturalGem1.webp" alt="gem" width="150" height="100"><p id="gem"><strong>Shared Dorm | Architectural Gem | San José City</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'gem\')"></center><div class="thumbnail text-center"><img src="img/compartida/HollywoodHostel/HollywoodHostel1.webp" alt="hollywood" width="150" height="100"><p id="hollywood"><strong>Close to DTLA and Hollywood, hostel!</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'hollywood\')"></center>';
    aux2.innerHTML = '<div class="thumbnail text-center"><img src="img/compartida/MargaritaHostel/Margarita1.webp" alt="margarita" width="150" height="100"><p id="margarita"><strong>Margarita Hostel 3 Wi fi 3 miles From The Airport</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'margarita\')"></center><div class="thumbnail text-center"><img src="img/compartida/StrayCatHostel/StrayCat1.webp" alt="straycat" width="150" height="100"><p id="straycat"><strong>A Bed in Dorm- Stray Cat Hostel</strong></p></div><center><input id="botonAñadir" type="button" value="+" onclick="addCarrito(\'straycat\')"></center>';
}



function compra() {
    alert("SU COMPRA HA SIDO REALIZADA CON EXITO");
    window.location.href = "index.html";
}

