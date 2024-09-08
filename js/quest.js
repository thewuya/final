checkUserLoggedIn()
// Define the quiz questions and answers
const quizzes = {
    easy: [
        { id: 1, question: "C语言中'int'表示什么？", answers: ["整数", "整数数组", "中间值", "输入"], correct: 0 },
        { id: 2, question: "如何在C语言中声明一个变量？", answers: ["类型 变量名;", "变量名:类型;", "var 变量名;", "declare 变量名;"], correct: 0 },
        { id: 3, question: "C语言中'int'类型的大小是多少？", answers: ["2字节", "4字节", "8字节", "1字节"], correct: 1 },
        { id: 4, question: "C语言中使用哪个符号表示单行注释？", answers: ["//", "#", "/*", "--"], correct: 0 },
        { id: 5, question: "在C语言中如何正确包含一个库文件？", answers: ["#include <library.h>", "import library;", "use library;", "include library;"], correct: 0 },
        { id: 6, question: "以下哪种循环至少会执行一次？", answers: ["for", "while", "do-while", "foreach"], correct: 2 },
        { id: 7, question: "在main()函数中，'return 0;'表示什么？", answers: ["程序以错误结束", "程序成功结束", "返回主函数", "以上都不是"], correct: 1 },
        { id: 8, question: "哪个操作符用于获取变量的地址？", answers: ["&", "*", "@", "#"], correct: 0 },
        { id: 9, question: "C语言中哪一个是逻辑与操作符？", answers: ["&&", "||", "!", "&"], correct: 0 },
        { id: 10, question: "如何声明一个指向整数的指针？", answers: ["int* ptr;", "int ptr;", "pointer int;", "int &ptr;"], correct: 0 }
    ],
    medium: [
        { id: 21, question: "C语言中'3/2'的结果是什么？", answers: ["1", "1.5", "2", "0"], correct: 0 },
        { id: 22, question: "哪个函数用于获取字符串的长度？", answers: ["strlen()", "length()", "size()", "strlength()"], correct: 0 },
        { id: 23, question: "在C语言中，如何定义一个宏？", answers: ["#define", "macro", "#macro", "def"], correct: 0 },
        { id: 24, question: "如何在C语言中释放已动态分配的内存？", answers: ["free()", "delete()", "remove()", "release()"], correct: 0 },
        { id: 25, question: "以下哪个不是C语言中的数据类型？", answers: ["float", "int", "string", "char"], correct: 2 },
        { id: 26, question: "以下哪个操作符用于按位或操作？", answers: ["|", "&", "^", "||"], correct: 0 },
        { id: 27, question: "C语言中如何定义一个结构体？", answers: ["struct", "structure", "class", "object"], correct: 0 },
        { id: 28, question: "以下哪个不属于循环结构？", answers: ["for", "while", "if", "do-while"], correct: 2 },
        { id: 29, question: "如何定义一个常量？", answers: ["const", "define", "constant", "static"], correct: 0 },
        { id: 30, question: "指针变量的值是什么？", answers: ["地址", "数据类型", "变量名", "函数名"], correct: 0 }
    ],
    hard: [
        { id: 41, question: "C语言中'static'关键字的作用是什么？", answers: ["定义静态变量", "创建常量", "分配内存", "使函数私有"], correct: 0 },
        { id: 42, question: "如何在C语言中动态分配内存？", answers: ["malloc()", "alloc()", "new", "create()"], correct: 0 },
        { id: 43, question: "C语言中的'volatile'关键字有什么作用？", answers: ["防止编译器优化", "定义常量", "静态分配内存", "声明指针"], correct: 0 },
        { id: 44, question: "以下哪个函数用于格式化输出？", answers: ["sprintf()", "scanf()", "gets()", "puts()"], correct: 0 },
        { id: 45, question: "如何在C语言中声明一个多维数组？", answers: ["int arr[2][3];", "int arr{2,3};", "array int arr(2,3);", "int arr(2,3);"], correct: 0 },
        { id: 46, question: "如何在C语言中实现函数指针？", answers: ["int (*ptr)(int);", "func ptr;", "int ptr(int);", "function<int> ptr;"], correct: 0 },
        { id: 47, question: "以下哪个不是C语言的内存分配函数？", answers: ["malloc()", "calloc()", "realloc()", "assign()"], correct: 3 },
        { id: 48, question: "如何在C语言中创建一个链表节点？", answers: ["struct Node { int data; struct Node* next; };", "class Node { int data; Node next; };", "typedef int Node;", "node<int> Node;"], correct: 0 },
        { id: 49, question: "C语言中使用什么来避免重复包含头文件？", answers: ["#ifndef", "#if", "#define_once", "#pragma"], correct: 0 },
        { id: 50, question: "C语言中的内联函数使用什么关键字？", answers: ["inline", "inlined", "function", "macro"], correct: 0 }
    ]
};


const questions = [...quizzes.easy, ...quizzes.medium, ...quizzes.hard];
let currentQuestionIndex = 0;
let userExperience = 0;
let timer;
let db;

// Open the IndexedDB
const request = indexedDB.open('UserDatabase', 1);

request.onsuccess = function(event) {
    db = event.target.result;
    // Shuffle questions randomly at the start
    shuffleQuestions();
    loadQuestion(currentQuestionIndex);
};

function shuffleQuestions() {
    // Shuffle the questions array
    questions.sort(() => Math.random() - 0.5);
}

function loadQuestion(index) {
    const questionData = questions[index];
    document.getElementById('question').innerText = questionData.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    let answers = [...questionData.answers];
    answers = answers.sort(() => Math.random() - 0.5); // Shuffle answers

    answers.forEach((answer, i) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(i, questionData.correct));
        answersDiv.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 9;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            updateExperience(userExperience);
            alert('Time is out');
            window.location.href = 'ranking.html';
        }
    }, 1000);
}

function checkAnswer(selectedIndex, correctIndex) {
    clearInterval(timer);
    if (selectedIndex === correctIndex) {
        userExperience += 2;  // Gain 2 points for a correct answer
        alert('Correct! You gained 2 points.');
        updateExperience(userExperience);
    } else {
        alert('You lost.');
        window.location.href = 'ranking.html';
        return; // End the quiz if the answer is incorrect
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        alert('Quiz completed!');
        // Redirect or show a summary page
    }
}

function updateExperience(points) {
    const username = localStorage.getItem('username');
    if (!username) {
        console.error('No username found in session storage.');
        return;
    }
    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');
    const request = objectStore.get(username);

    request.onsuccess = function(event) {
        const user = event.target.result;

        if (!user) {
            console.error('User not found in the database.');
            return;
        }

        // Update experience based on the provided points
        user.experience += points;

        const updateRequest = objectStore.put(user);

        updateRequest.onsuccess = function() {
            console.log('Experience updated.');
        };

        updateRequest.onerror = function() {
            console.error('Error updating experience.');
        };
    };

    transaction.onerror = function() {
        console.error('Error accessing the database.');
    };
}

function checkUserLoggedIn() {
    const username = localStorage.getItem('username');
    if (!username) {
        alert('请先登录！'); // Prompt user to log in
        window.location.href = 'log_in.html'; // Redirect to login page
        return false;
    }
    return true;
  }