document.getElementById("see-leaderboard").addEventListener()

const bingo_numbers = [];

for (let i = 1; i<51; i++) {
    bingo_numbers.push(i);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function generarCarton(size) {
    shuffleArray(bingo_numbers);
    let carton = []
    for (let i = 0; i<size; i++) {
        carton.push(bingo_numbers.slice(i*size, (i+1)*size));
    }
    return carton;
}

function toggleLeaderboard(toggle) {
    document.getElementById("main-menu").style.scale = Math.abs(toggle-1);
    document.getElementById("leader-panel").style.scale = toggle;
}