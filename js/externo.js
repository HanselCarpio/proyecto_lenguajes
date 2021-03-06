
function remover() {
    document.getElementById("facturacion").classList.remove();
}

function cambiarMenuHC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/compartida/ArchitecturalGem/ArchitecturalGem1.webp" alt="gem" width="450" height="400">
                        <p id="gem"><strong>Shared Dorm | Architectural Gem | San José City</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="1">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/compartida/HollywoodHostel/HollywoodHostel1.webp" alt="hollywood" width="450" height="400">
                        <p id="hollywood"><strong>Close to DTLA and Hollywood, hostel!</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="2">ver detalles</a>
                    </br>`;


    aux2.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/compartida/MargaritaHostel/Margarita1.webp" alt="margarita" width="450" height="400">
                        <p id="margarita"><strong>Margarita Hostel 3 Wi fi 3 miles From The Airport</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="3">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/compartida/StrayCatHostel/StrayCat1.webp" alt="straycat" width="450" height="400">
                        <p id="straycat"><strong>A Bed in Dorm- Stray Cat Hostel</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="4">ver detalles</a>
                    </br>`;
}

function cambiarMenuAC() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/completo/CHARMINGHOUSE/CHARMING HOUSE1.webp" alt="charming" width="450" height="400">
                        <p id="charminghouse"><strong>CHARMING HOUSE Seaside& Pine Forest</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="5">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/completo/RadiantApartment/Radiant Apartment1.webp" alt="radiant" width="450" height="400">
                        <p id="radiant"><strong>Radiant Apartment with Terrace in Roma Norte</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="6">ver detalles</a>
                    </br>`;

    aux2.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/completo/SunnyApartment/sunny1.webp" alt="sunny" width="450" height="400">
                        <p id="sunny"><strong>Sunny apartment near metro station</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="7">ver detalles</a>
                    </>
                    <div class="thumbnail text-center">
                        <img src="img/completo/VillaHumac/Villa Humac1.webp" alt="villa" width="450" height="400">
                        <p id="villa"><strong>Villa Humac Hvar</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="8">ver detalles</a>
                    </br>`;
}

function cambiarMenuHP() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/habitacion/ClosestMiami/primera1.webp" alt="closest" width="450" height="400">
                        <p id="closest"><strong>Closest place to Miami International Airport</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="9">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/habitacion/EleganteHabitación/Elegante habitación1.webp" alt="elegante" width="450" height="400">
                        <p id="elegante"><strong>Elegante habitación ideal para tu estancia.</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="10">ver detalles</a>
                    </br>`;

    aux2.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/habitacion/ElegantSpacious/Elegant and Spacious1.webp" alt="elegant" width="450" height="400">
                        <p id="elegant"><strong>Elegant and Spacious Hideaway Close to Downtown</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="11">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO1.webp" alt="suite" width="450" height="400">
                        <p id="suite"><strong>SUITE DEL LAGO: Romance, Naturaleza y Sanitización</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="12">ver detalles</a>
                    </>`;
}



function cambiarMenuHH() {
    var aux1 = document.getElementById("campo1");
    var aux2 = document.getElementById("campo2");

    aux1.innerHTML = `<div class="thumbnail text-center">
                        <img src="img/hoteles/YuccaBeachfront/Yucca1.webp" alt="yucca" width="450" height="400">
                        <p id="yuccaBeach"><strong>Yucca Beachfront Cabinas</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="13">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE1.webp" alt="jaco" width="450" height="400">
                        <p id="DOWNTOWNLITTLE"><strong> DOWNTOWN LITTLE LOFT - JACO INN</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="14">ver detalles</a>
                    </br>`;

    aux2.innerHTML = `<div class="thumbnail text-center">
                    <img src="img/hoteles/FamilyApartment/FamilyApartment1.webp" alt="family" width="450" height="400">
                        <p id="familyApart"><strong>Family apartment in San Jose</strong></p>
                        </div>
                        <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="15">ver detalles</a>
                    </br>
                    <div class="thumbnail text-center">
                        <img src="img/hoteles/OceanFrontEscape/OceanFrontEscape1.webp" alt="Ocean" width="450" height="400">
                        <p id="OceanFront"><strong>Ocean Front Escape - Classic Queen</strong></p>
                    </div>
                    <a href="#" id="verDetalles" class="btn btn-block btn-primary agregar-carrito" data-id="16>ver detalles</a>
                    </br>`;
}