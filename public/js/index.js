fetch("/files")
    .then(response => response.json())
    .then(data => {
        const arregloDelete = [];
        const arrregloGet = [];
        const arregloPost = [];
        const arregloPut = [];

        const fileList = document.getElementById("fileListDelete");
        const fileListGet = document.getElementById("fileListGet");
        const fileListPost = document.getElementById("fileListPost");
        const fileListPut = document.getElementById("fileListPut");

        data.carpetas.map(file => {
            return file.metodos.filter(mt => {
                if (mt.method === 'delete') {
                    arregloDelete.push({
                        nombre: file.nombre,
                        capacidad: mt.name
                    });
                }
                if (mt.method === 'get') {
                    arrregloGet.push({
                        nombre: file.nombre,
                        capacidad: mt.name
                    });
                }
                if (mt.method === 'post') {
                    arregloPost.push({
                        nombre: file.nombre,
                        capacidad: mt.name
                    });
                }
                if (mt.method === 'put') {
                    arregloPut.push({
                        nombre: file.nombre,
                        capacidad: mt.name
                    });
                }
            })
        }).filter(file => file.length > 0);
        arregloDelete.forEach(dato => {
            const li = document.createElement('li');
            li.classList.add("bg-neutral-50", "rounded-lg", "p-2", "text-black", "shadow-inner", "shadow-neutral-800", "p-1", "font-semibold")
            li.textContent = `api/${dato.nombre}${dato.capacidad}`; // Personaliza el contenido según tus necesidades
            fileList.appendChild(li);
        });
        arrregloGet.forEach(dato => {
            const li = document.createElement('li');
            li.classList.add("bg-neutral-50", "rounded-lg", "p-2", "text-black", "shadow-inner", "shadow-neutral-800", "p-1", "font-semibold")
            li.textContent = `api/${dato.nombre}${dato.capacidad}`; // Personaliza el contenido según tus necesidades
            fileListGet.appendChild(li);
        });
        arregloPost.forEach(dato => {
            const li = document.createElement('li');
            li.classList.add("bg-neutral-50", "rounded-lg", "p-2", "text-black", "shadow-inner", "shadow-neutral-800", "p-1", "font-semibold")
            li.textContent = `api/${dato.nombre}${dato.capacidad}`; // Personaliza el contenido según tus necesidades
            fileListPost.appendChild(li);
        });
        arregloPut.forEach(dato => {
            const li = document.createElement('li');
            li.classList.add("bg-neutral-50", "rounded-lg", "p-2", "text-black", "shadow-inner", "shadow-neutral-800", "p-1", "font-semibold")
            li.textContent = `api/${dato.nombre}${dato.capacidad}`; // Personaliza el contenido según tus necesidades
            fileListPut.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener la lista de archivos:", error));

const div = document.getElementById('linkdiv');
const tema = window.matchMedia('(prefers-color-scheme: dark)');
const html = '';
if(tema.matches)
{
    html = '<link rel="icon" href="./imgs/code_white.png" type="image/png" />';
}
else
{
    html = '<link rel="icon" href="./imgs/code_dark.png" type="image/png" />';
}
div.innerHTML = html;