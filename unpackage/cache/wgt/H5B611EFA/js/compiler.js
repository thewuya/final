const problems = [
    {
        description: "编写一个 C 函数，打印 'Hello, World!'。",
        expectedOutput: "Hello, World!\n"
    },
    {
        description: "编写一个 C 函数，打印从 1 到 5 的数字，每行一个。",
        expectedOutput: "1\n2\n3\n4\n5\n"
    },
    {
        description: "编写一个 C 函数，计算 2 和 3 的和并打印结果。",
        expectedOutput: "5\n"
    },
    {
        description: "编写一个 C 函数，打印斐波那契数列的前 3 个数字。",
        expectedOutput: "0\n1\n1\n"
    },
    {
        description: "编写一个 C 函数，打印大写的 'Hola Mundo'。",
        expectedOutput: "HOLA MUNDO\n"
    },
    {
        description: "编写一个 C 函数，打印数字 4 的平方。",
        expectedOutput: "16\n"
    },
    {
        description: "编写一个 C 函数，打印数字 3 从 1 到 5 的乘法表。",
        expectedOutput: "3\n6\n9\n12\n15\n"
    },
    {
        description: "编写一个 C 函数，打印从 1 到 10 的所有偶数。",
        expectedOutput: "2\n4\n6\n8\n10\n"
    },
    {
        description: "编写一个 C 函数，打印字符 '@' 五次在一行。",
        expectedOutput: "@@@@@\n"
    },
    {
        description: "编写一个 C 函数，打印 10 除以 2 的结果。",
        expectedOutput: "5\n"
    },
    {
        description: "编写一个 C 函数，打印高度为 5 的直角三角形星号图形。",
        expectedOutput: "*\n**\n***\n****\n*****\n"
    },
    {
        description: "编写一个 C 函数，打印边长为 4 的星号正方形。",
        expectedOutput: "****\n****\n****\n****\n"
    },
    {
        description: "编写一个 C 函数，打印高度为 3 的星号金字塔。",
        expectedOutput: "  *\n ***\n*****\n"
    },
    {
        description: "编写一个 C 函数，打印 3 行 6 列的星号矩形。",
        expectedOutput: "******\n******\n******\n"
    },
    {
        description: "编写一个 C 函数，打印高度为 4 的倒三角形星号图形。",
        expectedOutput: "****\n***\n**\n*\n"
    },
    // 新增的图形题目
    {
        description: "编写一个 C 函数，打印一个边长为 5 的菱形图形。",
        expectedOutput: "  *\n ***\n*****\n ***\n  *\n"
    },
    {
        description: "编写一个 C 函数，打印一个边长为 6 的实心正方形。",
        expectedOutput: "******\n******\n******\n******\n******\n******\n"
    },
    {
        description: "编写一个 C 函数，打印一个边长为 7 的实心三角形。",
        expectedOutput: "*\n**\n***\n****\n*****\n******\n*******\n"
    },
    {
        description: "编写一个 C 函数，打印一个边长为 5 的星号梯形。",
        expectedOutput: "*****\n****\n***\n**\n*\n"
    },
    {
        description: "编写一个 C 函数，打印一个边长为 4 的交错星号图形。",
        expectedOutput: "* * * *\n * * *\n  * *\n   *\n"
    }
];

let expectedOutput;
let db;
let isCodeSubmitted = false; // Track if the code has been submitted

// Open the IndexedDB
const request = indexedDB.open('UserDatabase', 1);

request.onsuccess = function(event) {
    db = event.target.result;
    if (!checkUserLoggedIn()) {
        return; // 如果用户未登录，则停止执行
    }
};

request.onerror = function(event) {
    console.error('Error opening IndexedDB:', event.target.errorCode);
};

// 随机选择一个题目并显示它的函数
function loadRandomProblem() {
    const randomIndex = Math.floor(Math.random() * problems.length);
    const problem = problems[randomIndex];
    document.getElementById('editor').value = '';
    document.getElementById('problem-description').textContent = problem.description;

    // 替换 \n 为 ↵
    const formattedOutput = problem.expectedOutput.replace(/\n/g, '↵<br>');
    document.getElementById('expected-output').innerHTML = "预期输出:<br>" + formattedOutput;

    expectedOutput = problem.expectedOutput;
    isCodeSubmitted = false; // 为新题目重置提交状态
}

// 确保页面加载时随机题目会被加载
window.onload = function() {
    loadRandomProblem();
};

async function compileCode() {

    if (isCodeSubmitted) {
        alert('您已经提交了这个代码。请选择其他题目。');
        return; // 防止重复提交
    }

    const code = document.getElementById('editor').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = "编译中...";

    try {
        const response = await fetch('https://wandbox.org/api/compile.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                compiler: "gcc-head",
                code: code,
                options: "warning,gnu++1y",
                stdin: "",
                "compiler-option-raw": "",
                "runtime-option-raw": ""
            })
        });

        const result = await response.json();
        if (result.program_message) {
            const userOutput = result.program_message;
            outputElement.textContent = "输出:\n" + userOutput;

            // 比较用户输出与预期输出
            if (userOutput === expectedOutput) {
                outputElement.textContent += "\n正确！输出与预期一致。";
                updateUserExperience(1); // 增加 1 点经验
                alert("经验+1");
                isCodeSubmitted = true; // 标记代码已提交
            } else {
                outputElement.textContent += "\n错误。请再试一次。";
            }
        } else if (result.compiler_error) {
            outputElement.textContent = "编译错误:\n" + result.compiler_error;
        } else {
            outputElement.textContent = "未知错误。";
        }
    } catch (error) {
        outputElement.textContent = "此功能需要网络连接: " + error.message;
    }
}

function checkUserLoggedIn() {
    const username = localStorage.getItem('username');;
    if (!username) {
        alert('请先登录！'); // 提示用户登录
        window.location.href = 'log_in.html'; // 重定向到登录页面
        return false;
    }
    return true;
}

function updateUserExperience(points) {
    const username = localStorage.getItem('username');
    if (!username) {
        console.error('未在会话存储中找到用户名。');
        return;
    }
    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');
    const request = objectStore.get(username);

    request.onsuccess = function(event) {
        const user = event.target.result;

        if (!user) {
            console.error('在数据库中未找到用户。');
            return;
        }

        // 根据提供的点数更新经验
        user.experience = (user.experience || 0) + points; // 确保经验已初始化

        const updateRequest = objectStore.put(user);

        updateRequest.onsuccess = function() {
            console.log('经验已更新。');
        };

        updateRequest.onerror = function() {
            console.error('更新经验时出错。');
        };
    };

    transaction.onerror = function() {
        console.error('访问数据库时出错。');
    };
}

function downloadCode() {
    const code = document.getElementById('editor').value;
    const blob = new Blob([code], { type: 'text/x-csrc' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'codigo.c';
    a.click();
    URL.revokeObjectURL(url);
}
