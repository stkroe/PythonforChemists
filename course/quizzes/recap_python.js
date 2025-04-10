// JavaScript for Python Quiz in basic_python.qmd
document.addEventListener('DOMContentLoaded', function() {
    // Quiz data
    const pythonQuiz = [
        {
            question: "How would you print a float with 4 decimal places and 2 spaces before the decimal? x = 3.1415926",
            options: [
                "<pre>print(f'{x:  .4f}')</pre>",
                "<pre>print(f'{x:6.4f}')</pre>",
                "<pre>print(f'{x:8.4f})</pre>",
                "<pre>print(f'{x:2.4f}')</pre>"
            ],
            answer: 2
        },
        {
            question: "What is the result of int(3.1415926)?",
            options: [
                "3.1415926",
                "3",
                "4",
                "None"
            ],
            answer: 1
        },

        {
            question: "Which statement is wrong?",
            options: [
                 "Numpy is a library for numerical computing in Python.",
                 "With the command `import numpy as np`the library  `numpy`is imported and gives the alias 'np'.",
                 "array() is included in the python standard library and we <b>do not need to import it</b>.",
                 "If I want to use the datatype `darray`I have import the numpy library and use the command `np.array([])`to create a numpy arary.",
                 "All functions from the library can be accessed using this alias e.g. `np.array()`. This means `array()` is a function from the numpy library and can be used in our code.",          
            ],
            answer: 2
        },
        {
            question: "Which commmand is wrong?",
            options: [
                "<pre>import numpy as np</pre>" + 
                "<pre>x = np.array([1, 2, 3],[2, 3, 4])</pre>",
                "<pre>import numpy as np</pre>" + 
                "<pre>x = np.array([[1, 2, 3],[2, 3, 4]], dtype='int')</pre>",
                "<pre>import numpy as np</pre>" + 
                "<pre>x = np.array([1, 2, 3], dtype='float')</pre>",
                "<pre>import numpy as np</pre>" + 
                "<pre>x = np.array(1,2,3)</pre>",
            ],
            answer: 3
        },
        { 
            question: "What is a `float`?",
            options: [
                "A datatype for decimal numbers.",
                "A datatype for whole numbers.",
                "A datatype for strings.",
                "A datatype for lists."
            ],
            answer: 0
        },
        {
            question: "What is the result of <pre>x = 3.1415926</pre>?\n<pre>print(f'{x:.4f}')</pre>",
            options: [
                "3.1415",
                "3.14159",
                "3.14",
                "3.142"
            ],
            answer: 0
        },
        {
            question: "Which is the variable in the following code?\n<pre>x = np.array([1, 2, 3],[2, 3, 4])</pre>",
            options: [
                "np",
                "array",
                "x",
                "[1, 2, 3],[2, 3, 4]"
            ],
            answer: 2
        },
        { 
            question: "How do I comment in Python?",
            options: [
                "Using <pre>//</pre>",
                "Using <pre>#</pre>",
                "Using <pre>/* */</pre>",
                "Using <pre><!-- --></pre>"
            ],
            answer: 1
        },
        {
            question: "Which statement is wrong?\n" +
            "<pre>def my_function(x):</pre>" +
            "<pre>   return x + 1</pre>" +
            "<pre>result = my_function(3)</pre>", 
            options: [
                "x is a parameter of `my_function`",
                "`my_function` is a function",
                "`result` is a variable",
                "`my_function` is a variable",
                "`my_function(3)` returns 4 ",
                "`result` is equal 4",
            ],
            answer: 3
        },

        {
            question: "Which value has <pre>x</pre> after the following code?\n" +
            "<pre>x = 1</pre>" +
            "<pre>def my_function(x):</pre>" +
            "<pre>   x = x + 1</pre>" +
            "<pre>my_function(x)</pre>" +
            "<pre>print(x)</pre>",
            options: [
                "1",
                "2",
                "None",
                "0"
            ],
            answer: 0
        },

        {
            question: "What does global and local variable mean?",
            options: [
                "Global variables are accessible from anywhere in the code, local variables are only accessible within the function.",
                "Local variables are accessible from anywhere in the code, global variables are only accessible within the function.",
                "Global variables are only accessible within the function, local variables are accessible from anywhere in the code.",
                "There is no difference."
            ],
            answer: 0

        },
        {
            question: "Which kind of variable is `x` at the start of the code block and which kind in the function?"+            "<pre>x = 1</pre>" +
            "<pre>def my_function(x):</pre>" +
            "<pre>   x = x + 1</pre>" +
            "<pre>my_function(x)</pre>" +
            "<pre>print(x)</pre>",
            options: [
                "At the start: local, in the function: global",
                "At the start: global, in the function: local",
                "At the start: local, in the function: local",
                "At the start: global, in the function: global"
            ],
            answer: 1
        },
        {
            question: "How do I create a list in Python?",
            options: [
                "Using [] brackets.",
                "Using {} brackets.",
                "Using () brackets.",
                "Using <> brackets."
            ],
            answer: 0
        },

        {
            question: "What is the end result of the following code?\n" +
            "<pre>my_list = [1, 2, 3]</pre>" +
            "<pre>my_list.append(4)</pre>" +
            "<pre>print(my_list)</pre>" +
            "<pre>my_list.remove(2)</pre>" +
            "<pre>print(my_list)</pre>",
            options: [
                "[1, 2, 3, 4]",
                "[1, 4]",
                "[1, 3, 4]",
                "[1, 2, 4]",
                
            ],
            answer: 2
        },

        {
            question: "What is the result of the following code?\n" +
            "<pre> a = np.arange(0,10,2)</pre>" +
            "<pre> for i in a:</pre>" +
            "<pre>     if i == 4:</pre>" +
            "<pre>         continue</pre>" +
            "<pre>print(i, end=' ')</pre>",
            options: [
                "0 2 4 6 8",
                "0 2 4",
                "0 2 6 8",
                "0 2"
            ],
            answer: 2,

        },
      
        {
            question: "What is the result of the following code?\n" +
            "<pre> i = 0 </pre>" +
            "<pre> while (i < 10):</pre>" +
            "<pre>     if i == 4:</pre>" +
            "<pre>         break</pre>" +
            "<pre>     i += 2</pre>" +
            "<pre>     print(i, end=' ')</pre>",
            options: [
                "2 4",
                "0 2 4",
                "0 2 4 6 8",
                "0 2 6 8"
            ],
            answer: 0
        },
        {
            question: "Which elements do you get with the following code?\n" +
            "<pre> my_array = np.array([1, 2, 3, 4, 5, 6, 7]) </pre>" +
            "<pre> my_array[2:5]</pre>",
            options: [
                "[2, 3, 4]",
                "[3, 4, 5]",
                "[2, 3, 4, 5]",
                "[3, 4, 5, 6]"
            ],
            answer: 2
        },
        {
            question: "How you get the all elements beginning with the element 3?\n" +
            "<pre> my_array = np.array([1, 2, 3, 4, 5, 6, 7]) </pre>",
            options: [
                "my_array[3:]",
                "my_array[2:]",
                "my_array[:3]",
                "my_array[:2]"
            ],
            answer: 1
        },
        {
            question: "How do I create a scatter plot in Python?",
            options: [
                "Using <pre>plt.scatter()</pre>",
                "Using <pre>plt.bubble()</pre>",
                "Using <pre>plt.bar()</pre>",
                "Using <pre>plt.hist()</pre>"
            ],
            answer: 0
        },
        {
            question: "How do I show a plot in Python?",
            options: [
                "Using <pre>plt.display()</pre>",
                "Using <pre>plt.plot()</pre>",
                "Using <pre>plt.show()</pre>",
                "Using <pre>plt.draw()</pre>"
            ],
            answer: 2
        },
        {   question: "What is the natural logarithm function in NumPy?",
            options: [
                "np.log()",
                "np.ln()",
                "np.logarithm()",
                "np.natural_log()"
            ],
            answer: 0
        }
      
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
                 <button class="check-answer" data-question="${qIndex}">Check Answer</button>
                 <div class="feedback" id="feedback-${qIndex}"></div>
             </div>
         `;
     });
     
     quizHTML += '</div>';

     // Insert quiz into container
    quizContainer.innerHTML = quizHTML;

    // Add event listeners to "Check Answer" buttons
    document.querySelectorAll('.check-answer').forEach(button => {
        button.addEventListener('click', function() {
            const questionIndex = parseInt(this.getAttribute('data-question'));
            const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);
            const feedbackElement = document.getElementById(`feedback-${questionIndex}`);
            
            if (!selectedOption) {
                feedbackElement.textContent = "Please select an answer.";
                feedbackElement.className = "feedback warning";
                return;
            }
            
            if (parseInt(selectedOption.value) === pythonQuiz[questionIndex].answer) {
                feedbackElement.textContent = "Correct!";
                feedbackElement.className = "feedback correct";
            } else {
                feedbackElement.textContent = "Incorrect. The correct answer is: " + pythonQuiz[questionIndex].options[pythonQuiz[questionIndex].answer];
                feedbackElement.className = "feedback incorrect";
            }
        });
    });
});