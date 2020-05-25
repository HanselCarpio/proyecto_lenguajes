class Elementos{

    elegirAlojamiento(e){
        console.log('2');
        e.preventDefault();
        if(e.target.classList.contains('campo1')){
            const alojamiento =  e.target.parentElement.parentElement;
            this.leerDatos(alojamiento);
            console.log('4');
        }
        else{
            console.log('no')
        }
    }

    leerDatos(alojamiento){
        const infoAlojamiento ={
            nombre : alojamiento.querySelector('h2'),
            precio : alojamiento.querySelector('.precio span'),
            id :alojamiento.querySelector('a').getAttribute('data-id')
        }
        let alojamientosLS;
        alojamientosLS = this.obtenerAlojamientosLocalStorage();
        alojamientosLS.forEach(function(alojamientoLSLS){
            if(alojamientoLS.id == infoAlojamiento.id){
                alojamientosLS.id = alojamientoLS.id;
            }
        });

        if(alojamientosLS.id === infoAlojamiento.id){
            console.log('producto ya agregado');
        }
        else{
            this.insertarAlojamiento(infoAlojamiento);
            console.log('que picha')
        }
    }

    insertarAlojamiento(alojamiento){
        this.guardarAlojamientosLocalStorage(alojamiento);
    }

    guardarAlojamientosLocalStorage(alojamiento) {
        let alojamientos;
        alojamientos = this.obtenerAlojamientosLocalStorage();
        alojamientos.push(alojamiento);
        localStorage.setItem('alojamientos', JSON.stringify(alojamientos));
    }

    obtenerAlojamientosLocalStorage() {
        let alojamientoLS;

        if (localStorage.getItem('alojamientos') === null) {
            alojamientoLS = [];
        }
        else {
            alojamientoLS = JSON.parse(localStorage.getItem('alojamientos'));
        }
        return alojamientoLS;
    }

    leerLocalStoragePago() {
        let alojamientosLS;
        alojamientosLS = this.obtenerAlojamientosLocalStorage();
        alojamientosLS.forEach(function (alojamiento) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${alojamiento.titulo}</td>
                <td>${alojamiento.precio}</td>
                <td><a href="#" class="borrar-producto fas fa-times-circle" data-id="${alojamiento.id}"></a></td>
            `;
            listaAlojamientos.appendChild(row);
        });
    }  

    cambiarDetalles(AlojaID){
        console.log(AlojaID);
        if(AlojaID === "1"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/compartida/ArchitecturalGem/ArchitecturalGem1.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/ArchitecturalGem/ArchitecturalGem2.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/ArchitecturalGem/ArchitecturalGem3.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/ArchitecturalGem/ArchitecturalGem4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "2"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/compartida/HollywoodHostel/HollywoodHostel1.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/HollywoodHostel/HollywoodHostel2.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/HollywoodHostel/HollywoodHostel3.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/HollywoodHostel/HollywoodHostel4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "3"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/compartida/MargaritaHostel/Margarita1.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/MargaritaHostel/Margarita2.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/MargaritaHostel/Margarita3.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/MargaritaHostel/Margarita4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "4"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/compartida/StrayCatHostel/StrayCat1.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/StrayCatHostel/StrayCat2.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/StrayCatHostel/StrayCat3.webp" style="width:100%">
                        <img class="mySlides" src="img/compartida/StrayCatHostel/StrayCat4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "5"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/completo/CHARMINGHOUSE/CHARMING HOUSE1.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/CHARMINGHOUSE/CHARMING HOUSE2.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/CHARMINGHOUSE/CHARMING HOUSE3.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/CHARMINGHOUSE/CHARMING HOUSE4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "6"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/completo/RadiantApartment/Radiant Apartment1.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/RadiantApartment/Radiant Apartment2.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/RadiantApartment/Radiant Apartment3.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/RadiantApartment/Radiant Apartment4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "7"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/completo/SunnyApartment/sunny1.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/SunnyApartment/sunny2.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/SunnyApartment/sunny3.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/SunnyApartment/sunny4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "8"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/completo/VillaHumac/Villa Humac1.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/VillaHumac/Villa Humac2.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/VillaHumac/Villa Humac3.webp" style="width:100%">
                        <img class="mySlides" src="img/completo/VillaHumac/Villa Humac4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "9"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/habitacion/ClosestMiami/primera1.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ClosestMiami/primera2.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ClosestMiami/primera3.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ClosestMiami/primera4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "10"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/habitacion/EleganteHabitación/Elegante habitación1.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/EleganteHabitación/Elegante habitación2.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/EleganteHabitación/Elegante habitación3.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/EleganteHabitación/Elegante habitación4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "11"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/habitacion/ElegantSpacious/Elegant and Spacious1.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ElegantSpacious/Elegant and Spacious2.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ElegantSpacious/Elegant and Spacious3.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/ElegantSpacious/Elegant and Spacious4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "12"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO1.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO2.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO3.webp" style="width:100%">
                        <img class="mySlides" src="img/habitacion/SUITEDELLAGO/SUITE DEL LAGO4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "13"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE1.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE2.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE3.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/DOWNTOWN_LITTLE/DOWNTOWNLITTLE4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "14"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/hoteles/FamilyApartment/FamilyApartment1.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/FamilyApartment/FamilyApartment2.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/FamilyApartment/FamilyApartment3.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/FamilyApartment/FamilyApartment4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "15"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/hoteles/OceanFrontEscape/OceanFrontEscape1.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/OceanFrontEscape/OceanFrontEscape2.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/OceanFrontEscape/OceanFrontEscape3.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/OceanFrontEscape/OceanFrontEscape4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        if(AlojaID === "16"){

            var imagenes = document.getElementById('imagenes');
            imagenes.innerHTML = `
                        <img class="mySlides" src="img/hoteles/YuccaBeachfront/Yucca1.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/YuccaBeachfront/Yucca2.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/YuccaBeachfront/Yucca3.webp" style="width:100%">
                        <img class="mySlides" src="img/hoteles/YuccaBeachfront/Yucca4.webp" style="width:100%">

                        <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
            `;
            //elementos.appendChild(imagenes);
        }
        
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }

    procesarPedido(e){
        e.preventDefault();
        location.href="detalleView.html";
    }

    calcularTotal(){
        let alojamientoLS;
        let total = 0, subtotal =0, imp=0;
        alojamientoLS = this.obtenerAlojamientosLocalStorage();
        for(let i=0; i< alojamientoLS.length; i++){
            let element = Number(alojamientoLS[i]);
            total = total * element;
        }
        imp = parseFloat(total * 0.18).toFixed(2);
        subtotal = parseFloat(total - igv).toFixed(2);

        document.getElementById('subtotal').innerHTML = "S/. " + subtotal;
        document.getElementById('imp').innerHTML = "S/. " + imp;
        document.getElementById('total').innerHTML = "S/. " + total.toFixed(2);
    }

}



    /*



    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id')
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }



    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS));
    }*/