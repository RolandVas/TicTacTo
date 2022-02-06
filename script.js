let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) { // minden td be van szämozva = id - kezdes 0, 1, 2.... - function beszämozza a kockät hogy a function show() tudja hova melyik jel kell
    if (!fields[id] && !gameOver){ //  a !jel megforditja a parancsot if fields[0] igaz van benne valami, bele kattintottam - mivel üres ezert nem lehet belakattintani es nem fegzi el a feladato // a ! jel viszont megforditja es ha üres akkor lehet belekattintani 
        // !gameOver alapbol false lenne az ertek de a ! jel miatt true az ertek, tehät most true van beirva es lehet jatszani, de ha legalul defninialva van, hogy ha meg van a 3 egyforma jel akkor váltson ät false ra -> let true van irva de itt fent a ! jel miatt a trubol -> false lesz
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactiv'); 
            document.getElementById('player-1').classList.add('player-inactiv');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactiv');
            document.getElementById('player-2').classList.add('player-inactiv');
        }

        fields[id] = currentShape; // a fields variableban mutatja valamelyik erteken id = 0
        console.log(fields)

        show();
        checkForWien()
    }
}

function show() { // A fields ben levö ertek megegyezik a definialt ertekkel akkor a display none el lesz tävolitva
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') { // fields[0] = a nuladik helyen talälhato ertek circle -> fields['circle'] ha igen akkor eltävolitja a display none-t es megmutatja a kört
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }

    }
}

function restart(){
    gameOver = false;
    fields =[];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('resetBtn').classList.add('d-none');

    for (let i = 0; i <= 8; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
    }

    for (let i = 0; i <= 8; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
}

function checkForWien() {
    let gewinner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { // 1. sor
        gewinner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) { // 2. sor
        gewinner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {// 3. sor
        gewinner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {// 1. oszlop
        gewinner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {// 2. oszlop
        gewinner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {// 3. oszlop
        gewinner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {// bal ätló
        gewinner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {// jobb ätló
        gewinner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (gewinner) {
        console.log('GEWINNER:', gewinner);
        gameOver = true;
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('resetBtn').classList.remove('d-none');
    }

}