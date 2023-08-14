const cardHTML = (character) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rick and Morty Character</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 20px;
                padding-top: 150px;
                height: 440px;
            }
    
            .character-card {
                border: 1px solid #ccc;
                border-radius: 10px;
                padding: 10px;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                overflow: hidden;
            }
    
            .character-image {
                float: left;
                width: 200px;
                height: 250px;
                border-radius:20px;
            }
    
            .character-details {
                margin-left: 220px;
            }
    
            .character-name {
                font-size: 18px;
                margin: 10px 0;
            }
    
            .character-info {
                font-size: 14px;
                margin: 5px 0;
            }
        </style>
    </head>
    <body>
        <div class="character-card">
            <img class="character-image" src="http://localhost:4000/${character.image}" alt="${character.name}">
            <div class="character-details">
                <h2 class="character-name">${character.name}</h2>
                <p class="character-info"><strong>Status:</strong> ${character.status}</p>
                <p class="character-info"><strong>Species:</strong> ${character.species}</p>
                <p class="character-info"><strong>Type:</strong> ${character.type}</p>
                <p class="character-info"><strong>Gender:</strong> ${character.gender}</p>
                <p class="character-info"><strong>Episodes:</strong> ${character.episodes.length}</p>
                <p class="character-info"><strong>Created:</strong> ${character.created}</p>
            </div>
        </div>
    </body>
    </html>
    
  `;
}

module.exports = {
  cardHTML
}