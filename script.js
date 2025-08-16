let answers = [];

function nextPage(answer) {
    answers.push(answer);
    const current = document.querySelector('.page.active');
    current.classList.remove('active');
    current.style.opacity = 0;

    setTimeout(() => {
        const next = current.nextElementSibling;
        if (next) {
            next.classList.add('active');
            next.style.opacity = 1;
        }
    }, 100);
}

function showResults(answer) {
    answers.push(answer);
    const current = document.querySelector('.page.active');
    current.classList.remove('active');
    current.style.opacity = 0;

    setTimeout(() => {
        const results = document.getElementById('results');
        results.classList.add('active');
        results.style.opacity = 1;
        displayShows();
        launchConfetti(); // 🎉 Trigger confetti burst
    }, 400);
}

function displayShows() {
    const scifi = "Sci-fi", fantasy = "Fantasy";
    const western = "Western", eastern = "Eastern";
    const comedy = "Comedy", action = "Action";
    const kid = "Kid", adult = "Adult";

    const list = document.getElementById('showList');
    list.innerHTML = '';

    let allShows = [
        {
            "name": "🚀 Futurama",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🌌 Final Space",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "🛸 Rick and Morty",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🤖 Ghost in the Shell",
            "theme": scifi,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🤠 Cowboy Bebop",
            "theme": scifi,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🧠 Psycho-Pass",
            "theme": scifi,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🌊 Avatar: The Last Airbender",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "🦇 Castlevania",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🎭 The Legend of Vox Machina",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "⏳ Adventure Time",
            "theme": fantasy,
            "culture": western,
            "genre": comedy,
            "age": kid
        },
        {
            "name": "💪 One Punch Man",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "⚗ Fullmetal Alchemist",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🪓 Gravity Falls",
            "theme": fantasy,
            "culture": western,
            "genre": comedy,
            "age": kid
        },
        {
            "name": "🍔 Bob's Burgers",
            "theme": fantasy,
            "culture": western,
            "genre": comedy,
            "age": kid
        },
        {
            "name": "🔮 Arcane",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "🕵️ Archer",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "⚔️ Blye Eye Samurai",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "👒 Carmen Sandiego",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "🔫 Cyberpunk Edgerunners",
            "theme": scifi,
            "culture": eastern,
            "genre": action,
            "age": adult
        },
        {
            "name": "🧌 Delicious in Dungeon",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": kid
        },
        {
            "name": "🐉 DOTA: Dragon's Blood",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "🧝 Frieren",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": kid
        },
        {
            "name": "🔥 Hazbin Hotel",
            "theme": fantasy,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🦸 Invincible",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "👁️ Inside Job",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🤖 Love, Death and Robots",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "🏴‍☠️ One Piece",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": kid
        },
        {
            "name": "🧠 Pantheon",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "🌏 Scavengers Reign",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "🎮 Secret Level",
            "theme": scifi,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "👑 She-Ra and the Princesses of Power",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "👽 Solar Opposites",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🛰️ Star Trek: Lower Decks",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "🛡️ Steven Universe",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": kid
        },
        {
            "name": "🌏 Strange Planet",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "👑 The Apothecary Diaries",
            "theme": fantasy,
            "culture": eastern,
            "genre": action,
            "age": kid
        },
        {
            "name": "😷 The Second Best Hospital in the Galaxy",
            "theme": scifi,
            "culture": western,
            "genre": comedy,
            "age": adult
        },
        {
            "name": "✨ Twilight of the Gods",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": kid
        },
        {
            "name": "🦄 Unicorn: Warriors Eternal",
            "theme": fantasy,
            "culture": western,
            "genre": action,
            "age": adult
        },
        {
            "name": "🪄 Uncle from Another World",
            "theme": fantasy,
            "culture": eastern,
            "genre": comedy,
            "age": adult
        },
    ];

    const [theme, culture, age, genre] = answers;
    let recommendedShows = [];

    for (let i = 0; i < allShows.length; i++) {
        const show = allShows[i];
        if (show.theme === theme && show.culture === culture && show.age === age && show.genre === genre) {
            recommendedShows.push(show);
        }
    }

    if (recommendedShows.length === 0) {
        const li = document.createElement('li');
        li.textContent = "Sorry, we couldn't find any shows.";
        li.className = "animate-slideFade";
        list.appendChild(li);
    }

    recommendedShows.forEach(show => {
        const li = document.createElement('li');
        li.textContent = show.name;
        li.className = "animate-slideFade";
        list.appendChild(li);
    });
}

function launchConfetti() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function restart() {
    answers = [];
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('q1').classList.add('active');
}