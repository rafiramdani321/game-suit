function getPilihanComputer() {
    const comp = Math.floor(Math.random() * 9) + 1
    if (comp <= 3) return 'gajah'
    if (comp > 3 && comp <= 6) return 'orang'
    return 'semut'
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI'
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!'
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!'
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!'
}

function randomImg() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`)
        if (i == gambar.length) i = 0
    }, 100)
}

const pilihanPlayer = document.querySelectorAll('li img')
pilihanPlayer.forEach((img) => {
    img.addEventListener('click', () => {
        const pilihanComp = getPilihanComputer()
        const pilihanPlayer = img.className
        const hasil = getHasil(pilihanComp, pilihanPlayer)
        randomImg()

        setTimeout(() => {
            const imgComp = document.querySelector('.img-komputer')
            imgComp.setAttribute('src', `img/${pilihanComp}.png`)

            const info = document.querySelector('.info')
            info.innerHTML = hasil
            score(info.innerHTML)
        }, 1000)

    })

})

const scorePlayer = document.querySelector('.scorePlayer')
const scoreComputer = document.querySelector('.scoreComputer')
let win = 1
let lose = 1

function score(hasil) {
    if (hasil == 'MENANG!') {
        scorePlayer.innerHTML = win++
    }
    if (hasil == 'KALAH!') {
        scoreComputer.innerHTML = lose++
    }
}