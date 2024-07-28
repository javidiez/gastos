const descripcion = document.getElementById('descripcion');
const categoria = document.getElementById('categoria');
const fecha = document.getElementById('fecha');
const radioIngreso = document.getElementById('radioingreso');
const radioGasto = document.getElementById('radiogasto');
const importe = document.getElementById('importe');
const tabla = document.getElementById('tabla');
const total = document.getElementById('total');
const boton = document.querySelector('#boton');

let inOut = [];

function createIncomeOutcome() {
    if (descripcion.value != "" && importe.value != "" && importe.value != 0) {

        if (radioIngreso.checked) {
            inOut.push(importe.value);


            let filaNueva = document.createElement('tr');

            let descripcionGasto = document.createElement('td');
            descripcionGasto.classList.add('table-success');
            descripcionGasto.innerText = descripcion.value;
            filaNueva.appendChild(descripcionGasto);

            let categoriaGasto = document.createElement('td');
            categoriaGasto.classList.add('table-success');
            categoriaGasto.innerText = categoria.value;
            filaNueva.appendChild(categoriaGasto);

            let fechaGasto = document.createElement('td');
            fechaGasto.classList.add('table-success');
            fechaGasto.innerText = fecha.value;
            filaNueva.appendChild(fechaGasto);

            let importeGasto = document.createElement('td');
            importeGasto.classList.add('table-success');
            importeGasto.innerText = importe.value + ' €';
            filaNueva.appendChild(importeGasto);

            let filaIconoTrash = document.createElement('td');
            filaIconoTrash.classList.add('table-success');
            filaNueva.appendChild(filaIconoTrash);

            let iconoTrash = document.createElement('i');
            iconoTrash.classList.add('bi', 'bi-trash3');
            filaIconoTrash.appendChild(iconoTrash);
            iconoTrash.addEventListener('click', eliminarFila);

            total.innerText = sumarTotal(inOut) + ' €';

            tabla.appendChild(filaNueva);


        }
        else {
            inOut.push(-importe.value);

            let filaNueva = document.createElement('tr');

            let descripcionGasto = document.createElement('td');
            descripcionGasto.classList.add('table-danger');
            descripcionGasto.innerText = descripcion.value;
            filaNueva.appendChild(descripcionGasto);

            let categoriaGasto = document.createElement('td');
            categoriaGasto.classList.add('table-danger');
            categoriaGasto.innerText = categoria.value;
            filaNueva.appendChild(categoriaGasto);

            let fechaGasto = document.createElement('td');
            fechaGasto.classList.add('table-danger');
            fechaGasto.innerText = fecha.value;
            filaNueva.appendChild(fechaGasto);

            let importeGasto = document.createElement('td');
            importeGasto.classList.add('table-danger');
            importeGasto.innerText = importe.value + ' €';
            filaNueva.appendChild(importeGasto);

            let filaIconoTrash = document.createElement('td');
            filaIconoTrash.classList.add('table-danger');
            filaNueva.appendChild(filaIconoTrash);

            let iconoTrash = document.createElement('i');
            iconoTrash.classList.add('bi', 'bi-trash3');
            filaIconoTrash.appendChild(iconoTrash);
            iconoTrash.addEventListener('click', eliminarFila);

            total.innerText = sumarTotal(inOut) + ' €';


            tabla.appendChild(filaNueva);
        }
    }
    else alert("Debe completar la Descripción y el importe.")
}


function eliminarFila(e) {
    let fila = e.target.parentNode.parentNode;
    let importeEliminado = parseFloat(fila.querySelector('td:nth-child(4)').innerText);
    if (fila.querySelector('td').classList.contains('table-success')) {
        inOut.splice(inOut.indexOf(importeEliminado), 1);
    } else if (fila.querySelector('td').classList.contains('table-danger')) {
        inOut.splice(inOut.indexOf(-importeEliminado), 1);
    }
    fila.remove();
    total.innerText = sumarTotal(inOut) + ' €';
    console.log(inOut);
}

function sumarTotal(arr) {
    let numberArray = arr.map(Number);
    console.log(inOut);
    return numberArray.reduce((acc, cur) => acc + cur, 0);
}

boton.addEventListener('click', createIncomeOutcome);