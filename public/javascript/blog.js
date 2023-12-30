/* ----------blog------------- */

fetch('/blog.json')
    .then(res => res.json())
    .then(data => {
        const cardContainer = document.querySelector('.container-card');
        const cards = data.map(item => {
            return `
                <ul id="${item.id}" class="card">
                    <li class="card-li">
                        <h2>${item.title}</h2>
                        <img class="img-blog" src="${item.img}" alt="Imagen del blog"></img>                
                        <p>${item.description}</p>
                        <p>${item.suggestion}</p>
                    </li>
                </ul>
            `;
        });
        cardContainer.innerHTML = cards.join('');
    })
    .catch((error) => {
        console.error('Error:', error);
    });