const question = document.querySelector('#question'),
    choices = Array.from(document.querySelectorAll('.choice-text')),
    progressText = document.querySelector('#progressText'),
    scoreText = document.querySelector('#score'),
    progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {},
    acceptingAnswers = true,
    score = 0,
    questionCounter = 0,
    availableQuestions = [],
    questions = []

// THE FUN PART

random = () => {
    return Math.floor(Math.random() * 15)
}
 
let num1 = 1,
    num2 = 1,
    opt1 = 1,
    opt2 = 1,
    opt3 = 1,
    opt4 = 1,
    operations = ['*', '/', '+', '-', 'pangkat'],
    operator = '/',
    answer = 0,
    whereUat = []

    randomOperator = () => {
        return Math.floor(Math.random() * operations.length)
    }
    
    x = () => {
        return randomIndex = Math.floor(Math.random() * 4)
    }


// BASIC MATH FUNCTIONS 

add = () => {
    return answer = num1 + num2
}

substract = () => {
    return answer = num1 - num2
}

divide = () => {
    return answer = num1 / num2 
}

multiply = () => {
    return answer = num1 * num2
}

pangkat = () => {
    num1 = Math.floor(Math.random() * 5)
    num2 = Math.floor(Math.random() * 5)
    return answer = Math.pow(num1, num2)
}

kabataku = () => {
    if(operator == '*'){
        multiply()
    }
    if(operator == '/'){
        divide()
    }
    if(operator == '+'){
        add()
    }
    if(operator == '-'){
        substract()
    }
    if(operator == 'pangkat'){
        pangkat()
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
    questions = [];
    for(var i = 0; i < 10; i++){
        num1 = random(),
        num2 = random(),
        opt1 = random(),
        opt2 = random(),
        opt3 = random(),
        opt4 = random(),
        whereUat = [opt1, opt2, opt3, opt4],
        operator = operations[randomOperator()]
        kabataku()
        console.log(randomIndex)
        var obj = {
        'question': `Berapakah ${num1} ${operator} ${num2} ?`, 
        'choice1' : `${whereUat[0]}`, 
        'choice2': `${whereUat[1]}`,
        'choice3': `${whereUat[2]}`,
        'choice4': `${whereUat[3]}`,
        'answerIndex' : `${randomIndex + 1}`
        }
        // console.log(randomIndex)
        questions.push(obj)
    }
}

makeQuestion();

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
        return window.location.assign('end')
    }

    questionsCounter++
    progressText.innerText = `Question ${questionsCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionsCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
          currentQuestion = availableQuestions[questionsIndex]
          question.innerText = currentQuestion.question

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