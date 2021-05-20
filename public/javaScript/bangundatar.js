const question = document.querySelector('#question'),
    choices = Array.from(document.querySelectorAll('.choice-text')),
    progressText = document.querySelector('#progressText'),
    scoreText = document.querySelector('#score'),
    progressBarFull = document.querySelector('#progressBarFull'),
    image = document.querySelector('#maper')

    let currentQuestion = {},
    acceptingAnswers = true,
    score = 0,
    questionCounter = 0,
    availableQuestions = [],
    questions = []

    let s = 1,
    p = 1,
    l = 1,
    a = 1,
    b = 1,
    c = 1,
    t = 1,
    j = 1,
    opt1 = 1,
    opt2 = 1,
    opt3 = 1,
    opt4 = 1,
    answer = 0,
    whereUat = [],
    bentuk = ['persegi', 'persegiPanjang', 'segitiga', 'lingkaran', 'trapesium', 'jajarGenjang'],
    perintah = ['luas', 'keliling'],
    parameter = ['sisi', 'panjang dan lebar', 'a, t, b, c', 'r dan d', 'AB, BC, AD, CD dan t', 'a, t dan b'],
    highLevelBentuk = ['persegi', 'persegi panjang', 'segitiga', 'lingkaran', 'trapesium', 'jajar genjang']

    // SORRY THIS IS VERY MESSY AND WEIRD

    makeTriangle = () => {
        triangles = [
            [6, 4, 5], [10, 12, 13], [14, 24, 25], [18, 40, 41], [22, 60, 61], [26, 84, 85],
            [8, 3, 5], [12, 8, 10], [16, 15, 17], [20, 24, 26], [24, 35, 37], [28, 48, 50]
        ]
        n = Math.floor(Math.random() * triangles.length)
    }
    
    makeTrapesium = () => {
        pythagoras = [
            [3, 4, 5], [5, 12, 13], [7, 24, 25], [9, 40, 41], [11, 60, 61], [13, 84, 85],
            [4, 3, 5], [6, 8, 10], [8, 15, 17], [10, 24, 26], [12, 35, 37], [14, 48, 50]
        ]
            n = Math.floor(Math.random() * pythagoras.length)
    
            k = pythagoras[n][0],
            l = p,
            m = pythagoras[n][2]
            z = pythagoras[n][1]
    
            AB = 2*k + l,
            BC = m,
            AD = m,
            CD = l
    }
    
    makeJajarGenjang = () => {
        pythagoras = [
            [3, 4, 5], [5, 12, 13], [7, 24, 25], [9, 40, 41], [11, 60, 61], [13, 84, 85],
            [4, 3, 5], [6, 8, 10], [8, 15, 17], [10, 24, 26], [12, 35, 37], [14, 48, 50]
        ]
        n = Math.floor(Math.random() * pythagoras.length)
    
        q = pythagoras[n][0],
        w = pythagoras[n][1],
        e = pythagoras[n][2],
        r = q + w
    }

// ES Math Formulas

Lpersegi = () => {
    return answer = Math.pow(s, 2)
}

Kpersegi = () => {
    return answer = 4 * s
}

LPP = () => {
    return answer = p * l
}

KPP = () => {
    return answer = 2 * (p + l)
}

Lsegitiga = () => {
    return answer = 0.5 * a * t
}

Ksegitiga = () => {
    return answer = a + b + c
}

Ltrapesium = () => {
    return answer = 0.5 * (AB + CD) * z
}

Ktrapesium = () => {
    return answer = AB + BC +CD + AD
}

Lcircle = () => {
    return answer = 3.14 * u * u
}

Kcircle = () => {
    return answer = 3.14 * d
}

Ljg = () => {
    return answer = r * w
}

Kjg = () => {
    return answer = 2 * (r + e)
}

random = () => {
    return Math.floor(Math.random() * 15)
}

// Logic

x = () => {
    return randomIndex = Math.floor(Math.random() * 4)
}

genap = () => {
    cakep = Math.floor(Math.random() * 20)
    while(cakep % 2 !== 0){
        Math.floor(Math.random() * 20)
    }
}

bentukIndex = () => {
    return bindex = Math.floor(Math.random() * bentuk.length)
}

perintahIndex = () => {
    return pindex = Math.floor(Math.random() * perintah.length)
}

parameterIndex = () => {
    if(randomBentuk == 'persegi'){        
        return parindex = parameter[0]
    }
    if(randomBentuk == 'persegiPanjang'){
        return parindex = parameter[1]
    }
    if(randomBentuk == 'segitiga'){
        return parindex = parameter[2]
    }
    if(randomBentuk == 'lingkaran'){
        return parindex = parameter[3]
    }
    if(randomBentuk == 'trapesium'){
        return parindex = parameter[4]
    }
    if(randomBentuk == 'jajarGenjang'){
        return parindex = parameter[5]
    }
}

generateBentuk = () => {
    for(var i = 0; i < bentuk.length; i++){
        return randomBentuk = bentuk[bentukIndex()]
    }
}

generatePerintah = () => {
    for(var i = 0; i < perintah.length; i++){
        return randomPerintah = perintah[perintahIndex()]
    }
}

sizeIndex = () => {
    if(randomBentuk == 'persegi'){
        return sindex = size[0]
    }
    if(randomBentuk == 'persegiPanjang'){
        return sindex = size[1]
    }
    if(randomBentuk == 'segitiga'){
        return sindex = size[2]
    }
    if(randomBentuk == 'lingkaran'){
        return sindex = size[3]
    }
    if(randomBentuk == 'trapesium'){
        return sindex = size[4]
    }
    if(randomBentuk == 'jajarGenjang'){
        return sindex = size[5]
    }
}

hlbIndex = () => {
    if(randomBentuk == 'persegi'){
        return shape = highLevelBentuk[0]
    }
    if(randomBentuk == 'persegiPanjang'){
        return shape = highLevelBentuk[1]
    }
    if(randomBentuk == 'segitiga'){
        return shape = highLevelBentuk[2]
    }
    if(randomBentuk == 'lingkaran'){
        return shape = highLevelBentuk[3]
    }
    if(randomBentuk == 'trapesium'){
        return shape = highLevelBentuk[4]
    }
    if(randomBentuk == 'jajarGenjang'){
        return shape = highLevelBentuk[5]
    }
}

imageMaper = () => {    
    return images = image.src = `/images/${randomBentuk}.png`    
}

// checking

bangunDatar = () => {
    if(randomBentuk == 'persegi' && randomPerintah == 'luas'){
        Lpersegi()
    }
    if(randomBentuk == 'persegi' && randomPerintah == 'keliling'){
        Kpersegi()
    }
    if(randomBentuk == 'persegiPanjang' && randomPerintah == 'luas'){
        LPP()
    }
    if(randomBentuk == 'persegiPanjang' && randomPerintah == 'keliling'){
        KPP()
    }
    if(randomBentuk == 'segitiga' && randomPerintah == 'luas'){
        Lsegitiga()
    }
    if(randomBentuk == 'segitiga' && randomPerintah == 'keliling'){
        Ksegitiga()
    }
    if(randomBentuk == 'lingkaran' && randomPerintah == 'luas'){
        Lcircle()
    }
    if(randomBentuk == 'lingkaran' && randomPerintah == 'keliling'){
        Kcircle()
    }
    if(randomBentuk == 'trapesium' && randomPerintah == 'luas'){
        Ltrapesium()
    }
    if(randomBentuk == 'trapesium' && randomPerintah == 'keliling'){
        Ktrapesium()
    }
    if(randomBentuk == 'jajarGenjang' && randomPerintah == 'luas'){
        Ljg()
    }
    if(randomBentuk == 'jajarGenjang' && randomPerintah == 'keliling'){
        Kjg()
    }
 
    
    x()

    for(var i = 0; i < whereUat.length; i++){
        while(whereUat[i] == answer){
            whereUat[i] = random()
        }
    }

    return whereUat[randomIndex] = answer
}

makeQuestion = () => {
    questions = []
    for(var i = 0; i < 10; i++){
        opt1 = random(),
        opt2 = random(),
        opt3 = random(),
        opt4 = random(),
        s = random(),
        makeTriangle()
        a = triangles[n][0],
        b = triangles[n][2],
        c = triangles[n][2],
        t = triangles[n][1],
        // trapesium
        makeTrapesium()
        makeJajarGenjang()
        // lingkaran
        u = Math.floor(Math.random() * 10),
        d = 2 * u
        p = random(),
        l = random()
        size = [`${s}cm`, `${p}cm dan ${l}cm`, `${a}cm, ${t}cm, ${b}cm, ${c}cm`, `${u}cm dan ${d}cm`, `${AB}cm, ${BC}cm, ${AD}cm, ${CD}cm dan ${z}cm`, `${r}cm, ${w}cm dan ${e}cm`],
        whereUat = [opt1, opt2, opt3, opt4]
        generateBentuk()
        generatePerintah()
        parameterIndex()
        sizeIndex()
        hlbIndex()
        bangunDatar()
        imageMaper()
        var obj = {
            'question': `Diketahui ${shape} dengan ${parindex} masing-masing sebesar ${sindex}. Hitunglah ${randomPerintah} ${shape} tersebut`, 
            'choice1' : `${whereUat[0]}`, 
            'choice2': `${whereUat[1]}`,
            'choice3': `${whereUat[2]}`,
            'choice4': `${whereUat[3]}`,
            'answerIndex' : `${randomIndex + 1}`,
            'images' : `${images}`
            }
            questions.push(obj)
    }
}

makeQuestion()
// Game

const SCORE_POINTS = 10,
      MAX_QUESTIONS = 10

startGame = () => {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end')
    }

    questionsCounter++
    progressText.innerText = `Question ${questionsCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionsCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
          currentQuestion = availableQuestions[questionsIndex]
          question.innerText = currentQuestion.question
          image.src = currentQuestion.images

          choices.forEach(choice => {
              const number = choice.dataset['number']
              choice.innerText = currentQuestion['choice' + number]
          })

          availableQuestions.splice(questionsIndex, 1)

          acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target,
              selectedAnswer = selectedChoice.dataset['number']
        
        let classToApply = selectedAnswer == currentQuestion.answerIndex ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
