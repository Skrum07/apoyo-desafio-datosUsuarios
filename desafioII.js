(async () => { 
    const url = 'https://randomuser.me/api/?results=10';
    let individuos = document.getElementById('user-data');
    try {
        const resultado = await fetch(url);
        const data = await resultado.json();

        data.results.forEach(element => {
            individuos.innerHTML += `<img src="${element.picture.medium}" alt="...">
                                    <p>${element.name.first} ${element.name.last}</p>
                                    <p>${element.email}</p>
                                    <p>${element.cell}</p><br>`;
        });
        
    } catch (error) {
        console.log("Algo salió mal:", error); 
    }
})();

llamarDatos();

// const url = 'https://randomuser.me/api/?results=10';
// let individuos = document.getElementById('user-data');

// const llamarDatos = async () => { 
//     try {
//         const resultado = await fetch(url);
//         const data = await resultado.json();

//         data.results.forEach(element => {
//             individuos.innerHTML += `<img src="${element.picture.medium}" alt="...">
//                                     <p>${element.name.first} ${element.name.last}</p>
//                                     <p>${element.email}</p>
//                                     <p>${element.cell}</p><br>`;
//         });
        
//     } catch (error) {
//         console.log("Algo salió mal:", error); 
//     }
// };

// llamarDatos();

