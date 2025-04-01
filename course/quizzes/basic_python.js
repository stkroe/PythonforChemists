// JavaScript for Python Quiz in basic_python.qmd
document.addEventListener('DOMContentLoaded', function() {
    // Quiz data
    const pythonQuiz = [
        {
            question: "What do you think <pre>print('Hello, World!')</pre> will do?",
            options: [
                "'Hello, World!' will be appear to the console",
                "An error will be thrown",
                "A file named Hello, World! will be printed via the printer",
                "A 'Hello, World!' will printed via the printer"
            ],
            answer: 0
        },
        {
            question: "What is a string?",
            options: [
                "A list of numbers",
                "A list of characters",
                "A number",
                "A memory location"
            ],
            answer: 1
        },
        {
            question: "How do assign a value to a variable in Python?",
            options: [
                "x is 5",
                "x = 5",
                "5 -> x",
                "x -> 5"
                
            ],
            answer: 1
        },
        {
            question: "How to store a list of numbers in Python?",
            options: [
                "x = [1, 2, 3]",
                "x = 1, 2, 3",
                "x = {1, 2, 3}",
                "x = (1, 2, 3)"
            ],
            answer: 0
        },
        {
            question: "What this code snippet means: " +
                      "<pre>if x > 5:</pre>" +
                      "<pre>   print('x is greater than 5')</pre>",
            options: [
                "If x is greater than 5, print 'x is greater than 5'",
                "If x is less than 5, print 'x is greater than 5'",
                "If x is equal to 5, print 'x is greater than 5'",
                "If x is greater than 5, print 'x is less than 5'"
            ],
            answer: 0
        },
    ];

    // Find the quiz container
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    // Create quiz HTML
    let quizHTML = '<div class="quiz-wrapper">';
    
    // Add each question
    pythonQuiz.forEach((q, qIndex) => {
        quizHTML += `
            <div class="question" id="question-${qIndex}">
                <h3>Question ${qIndex + 1}</h3>
                <p>${q.question.replace(/\n/g, '<br>')}</p>
                <div class="options">
        `;
        
        // Add options
        q.options.forEach((option, oIndex) => {
            quizHTML += `
                <div class="option">
                    <input type="radio" id="q${qIndex}-o${oIndex}" name="q${qIndex}" value="${oIndex}">
                    <label for="q${qIndex}-o${oIndex}">${option}</label>
                </div>
            `;
        });
        
        quizHTML += `
                </div>
                <div class="feedback" id="feedback-${qIndex}"></div>
            </div>
        `;
    });
    
    // Add submit button
    quizHTML += `
        <button id="submit-quiz" class="quiz-button">Check Answers</button>
        <div id="quiz-results" class="results"></div>
    </div>`;
    
    // Insert quiz into container
    quizContainer.innerHTML = quizHTML;
    
    // Add event listener to submit button
    document.getElementById('submit-quiz').addEventListener('click', function() {
        let score = 0;
        
        // Check each question
        pythonQuiz.forEach((q, qIndex) => {
            const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);
            const feedbackElement = document.getElementById(`feedback-${qIndex}`);
            
            if (!selectedOption) {
                feedbackElement.textContent = "Please select an answer.";
                feedbackElement.className = "feedback warning";
                return;
            }
            
            if (parseInt(selectedOption.value) === q.answer) {
                score++;
                feedbackElement.textContent = "Correct!";
                feedbackElement.className = "feedback correct";
            } else {
                feedbackElement.textContent = "Incorrect. The correct answer is: " + q.options[q.answer];
                feedbackElement.className = "feedback incorrect";
            }
        });
        
        // Display results
        const resultsElement = document.getElementById('quiz-results');
        resultsElement.textContent = `You scored ${score} out of ${pythonQuiz.length}.`;
        resultsElement.className = "results show";
        
        // Show all answers
        pythonQuiz.forEach((q, qIndex) => {
            const questionElement = document.getElementById(`question-${qIndex}`);
            questionElement.classList.add('answered');
        });
    });
});