let db;
const request = indexedDB.open('UserDatabase', 1);

request.onsuccess = function(event) {
  db = event.target.result;

  if(window.location.pathname.endsWith('quiz_1.html')) {
    const questions_1 = [
      {
        question: "面向过程的程序设计语言是()。",
        options: ["机器语言", "汇编语言", "高级语言", "第四代语言"],
        answer: "高级语言"
      },
      {
        question: "程序设计一般包含以下四个步骤，其中首先应该完成的是()。",
        options: ["设计数据结构和算法", "建立数学模型", "编写程序", "调试运行程序"],
        answer: "建立数学模型"
      },
      {
        question: "以下不是C语言的特点的是()。",
        options: ["语言简洁紧凑", "能够编制出功能复杂的程序", "C语言可以直接对硬件操作", "C语言移植性好"],
        answer: "能够编制出功能复杂的程序"
      },
      {
        question: "正确的C语言标识符是()。",
        options: ["_buy_2", "2_buy", "?_buy", "buy?"],
        answer: "_buy_2"
      },
      {
        question: "不属于C语言关键字的是()。",
        options: ["int", "break", "while", "character"],
        answer: "character"
      },
      {
        question: "一个C程序是由()。",
        options: ["一个主程序和若干子程序组成", "一个或多个函数组成", "若干过程组成", "若干子程序组成"],
        answer: "一个或多个函数组成"
      },
      {
        question: "下列说法中，错误的是()。",
        options: [
          "每个语句必须独占一行，语句的最后可以是一个分号，也可以是一个回车换行符号",
          "每个函数都有一个函数头和一个函数体，主函数也不例外",
          "主函数只能调用用户函数或系统函数，用户函数可以相互调用",
          "程序是由若干个函数组成的，但是必须有、而且只能有一个主函数"
        ],
        answer: "每个语句必须独占一行，语句的最后可以是一个分号，也可以是一个回车换行符号"
      },
      {
        question: "以下说法中正确的是()。",
        options: [
          "C语言程序总是从第一个定义的函数开始执行",
          "在C语言程序中，要调用的函数必须在main()函数中定义",
          "C语言程序总是从main()函数开始执行",
          "C语言程序中的main()函数必须放在程序的开始部分"
        ],
        answer: "C语言程序总是从main()函数开始执行"
      },
      {
        question: "若有以下定义，则正确的赋值语句是()。 int x,y; float z;",
        options: ["x=1，y=2,", "х=у=100", "x++;", "x=int(z);"],
        answer: "x++;"
      },
      {
        question: "下列哪个是C语言中合法的标识符？",
        options: ["1stVar", "_myVar", "var-name", "var name"],
        answer: "_myVar"
      }
    ];
        quizLoader('quiz_1', questions_1);
      }
    
      if(window.location.pathname.endsWith('quiz_2.html')) {
        const questions_2 = [
          {
              question: "下列哪个是C语言中用于声明浮点数的数据类型？",
              options: ["int", "char", "float", "bool"],
              answer: "float"
          },
          {
              question: "下列哪个是C语言中用于声明一个无符号整数（只能存储非负值）的关键字？",
              options: ["unsigned", "signed", "void", "enum"],
              answer: "unsigned"
          },
          {
              question: "在C语言中，sizeof(char)的结果通常是？",
              options: ["1", "2", "4", "取决于编译器"],
              answer: "1"
          },
          {
              question: "哪个数据类型在C语言中用于表示真值或假值（布尔值）？",
              options: ["bool", "true/false", "int", "logical"],
              answer: "bool"
          },
          {
              question: "在C语言中，long int、int和short int类型的变量占用的字节数关系通常是？",
              options: ["long int < int < short int", "short int < int < long int", "它们占用相同的字节数", "取决于编译器和平台"],
              answer: "取决于编译器和平台"
          },
          {
              question: "以下是一个C语言程序片段，用于打印一个整数的值。请填空，并选出正确的填空选项。\n#include <stdio.h>\nint main() {\n_______ num = 100; // 填空处应填写合适的数据类型\nprintf(\"%d\\n\", num);\nreturn 0;}",
              options: [
                  "int", 
                  "float", 
                  "char", 
                  "string"
              ],
              answer: "int"
          },
          {
              question: "以下能正确地定义整型变量a，b和c并为它们赋初值5的语句是()。",
              options: [
                  "int a = b = c = 5;", 
                  "int a, b, c = 5;", 
                  "a = 5, b = 5, c = 5;", 
                  "int a = 5, b = 5, c = 5;"
              ],
              answer: "int a = 5, b = 5, c = 5;"
          },
          {
              question: "下列程序的输出结果是( )。#include <stdio.h> \nint main(void){\nint a[10] = {0,1,2,3,4,5,6,7,8,9}, *p = a+3;\nprintf(\"%d\", p[2]);\nreturn 0;}",
              options: ["3", "4", "5", "非法"],
              answer: "5"
          },
          {
              question: "阅读以下C语言程序片段，下列说法正确的是（）。 int a=5; float b=a;",
              options: [
                  "不会发生任何转换，因为int和float是不同类型。",
                  "a的值会隐式转换为float类型，然后赋值给b。",
                  "b的类型会隐式转换为int类型，以匹配a的类型。",
                  "程序会编译失败，因为int和float类型不兼容。"
              ],
              answer: "a的值会隐式转换为float类型，然后赋值给b。"
          },
          {
              question: "阅读以下C语言程序，并选择程序输出的结果。\n#include <stdio.h>\nint main() {\nchar c = 'A' + 1;\nprintf(\"%c\\n\", c);\nreturn 0;}",
              options: ["A", "B", "66", "1"],
              answer: "B"
          }
      ];
      
        quizLoader('quiz_2', questions_2);
      }
    
      if(window.location.pathname.endsWith('quiz_3.html')) {
        const questions_3 = [
          {
            question: "以下哪个不是C语言合法的变量名？",
            options: ["myVar", "2ndVar", "_var", "var1"],
            answer: "2ndVar"
          },
          {
            question: "下列哪个关键字用于声明变量？",
            options: ["define", "int", "main", "printf"],
            answer: "int"
          },
          {
            question: "在C语言中，全局变量的作用域是？",
            options: ["仅限于定义它的函数内部", "限于定义它的文件内部", "跨多个文件", "跨整个程序"],
            answer: "跨整个程序"
          },
          {
            question: "下列关于C语言变量的说法错误的是？",
            options: ["变量必须先声明后使用", "变量的命名是区分大小写的", "变量在声明时可以不指定类型", "变量在内存中占用一定的存储空间"],
            answer: "变量在声明时可以不指定类型"
          },
          {
            question: "假设有以下代码片段，则result变量的值是多少？\nint x = 5, y = 10;\nint result;\nresult = x * y;",
            options: ["5", "10", "50", "编译错误"],
            answer: "50"
          },
          {
            question: "下列哪个是C语言中定义宏常量的预处理指令？",
            options: ["#include", "#define", "#if", "#endif"],
            answer: "#define"
          },
          {
            question: "下列哪个是合法的宏定义？",
            options: ["#define PI = 3.14", "#define PI 3.14", "#define PI \"3.14\"", "以上都是"],
            answer: "#define PI 3.14"
          },
          {
            question: "下列关于C语言中常量的说法错误的是？",
            options: ["常量在程序执行过程中其值不可改变", "常量可以直接参与表达式运算", "常量可以用变量名表示", "宏常量在预处理阶段被替换"],
            answer: "常量可以用变量名表示"
          },
          {
            question: "在C语言中，如何定义一个浮点数常量，表示π的值？",
            options: ["float PI = 3.14;", "#define PI 3.14", "const float PI = 3.14;", "const int PI = 3;"],
            answer: "#define PI 3.14"
          },
          {
            question: "阅读以下代码，并指出输出结果是什么（假设main函数中有相应的输出语句）？\n#define MAX 100\n#include<stdio.h>\nint main() {\n    printf(\"%d\\n\", MAX);\n    return 0;\n}",
            options: ["编译错误", "100", "字符串\"100\"", "未定义行为"],
            answer: "100"
          }
        ];
        quizLoader('quiz_3',questions_3);
      }
    
      if(window.location.pathname.endsWith('quiz_4.html')) {
        const questions_4 = [
          {
            question: "以下关于使用C语言实现输入输出的说法错误的是？",
            options: [
              "输入指从外部输入设备（如键盘、鼠标等）向计算机输入数据。",
              "C语言输入输出操作本质上是函数调用语句。",
              "C语言自身具备输入输出语句，可以直接实现输入输出功能。",
              "输出指将数据从计算机送到外部输出设备（如打印机、显示器等）。"
            ],
            answer: "C语言自身具备输入输出语句，可以直接实现输入输出功能。"
          },
          {
            question: "下列哪个函数用于在C语言中输出整数？",
            options: ["scanf()", "printf()", "getchar()", "gets()"],
            answer: "printf()"
          },
          {
            question: "使用printf()函数输出字符串\"Hello, World!\"，正确的代码是？",
            options: [
              "printf(\"Hello, World!\");",
              "printf(Hello, World!);",
              "print(\"Hello, World!\");",
              "printf(%s, \"Hello, World!\");"
            ],
            answer: "printf(\"Hello, World!\");"
          },
          {
            question: "下列哪个格式说明符用于输出浮点数？",
            options: ["%d", "%c", "%s", "%f"],
            answer: "%f"
          },
          {
            question: "假设有以下代码：\nint age = 25;\nprintf(\"Age: %d\\n\", age);\n其输出结果是？",
            options: ["Age: 25", "25", "Age: %d", "编译错误"],
            answer: "Age: 25"
          },
          {
            question: "使用scanf()函数从标准输入读取一个整数并存储在变量num中，正确的代码是？",
            options: [
              "scanf(\"%d\", num);",
              "scanf(\"%d\", &num);",
              "scanf(num, \"%d\");",
              "scanf(&num, \"%d\");"
            ],
            answer: "scanf(\"%d\", &num);"
          },
          {
            question: "#include <stdio.h>\nint main() {\n    int a, b;\n    printf(\"请输入两个整数：\");\n    scanf(\"%d %d\", &a, &b);\n    printf(\"您输入的两个整数是：%d 和 %d\\n\", a, b);\n    return 0;\n}\n运行上述程序，如果用户输入10 20，则输出将是？",
            options: [
              "请输入两个整数：10 20",
              "您输入的两个整数是：10 和 20",
              "请输入两个整数：您输入的两个整数是：10 和 20",
              "10 和 20"
            ],
            answer: "您输入的两个整数是：10 和 20"
          },
          {
            question: "当使用getchar()函数时，如果用户输入的是多个字符（例如\"abc\"后按回车），getchar()的第一次调用将返回什么？",
            options: ["'a'", "'abc'", "换行符（'\\n'）", "垃圾值（undefined）"],
            answer: "'a'"
          },
          {
            question: "puts函数用于将字符串输出到标准输出，并在字符串末尾自动添加什么？",
            options: ["空格", "换行符（'\\n'）", "制表符（'\\t'）", "没有任何额外字符"],
            answer: "换行符（'\\n'）"
          },
          {
            question: "以下针对scanf函数的叙述中，正确的是？",
            options: [
              "输入项可以为一实型常量，如scanf（\"%f\",3.5）",
              "只有格式控制，没有输入项，也能进行正确输入，如scanf（\"a=%d，b=%d\"）",
              "当输入数据时，必须指明变量的地址，如scanf（\"%f\"，&f）",
              
              "当输入一个实型数据时，格式控制部分应规定小数点后的位数，如scanf（\"%4.2f\",&f)"
            ],
            answer: "当输入数据时，必须指明变量的地址，如scanf（\"%f\"，&f）"
          }
        ];
        
        quizLoader('quiz_4', questions_4);
      }
    
      if(window.location.pathname.endsWith('quiz_5.html')) {
        const questions_5 = [
          {
            question: "C语言中，要求运算对象只能为整数的运算符是？",
            options: ["%", "/", ")", "*"],
            answer: "%"
          },
          {
            question: "下列哪个运算符用于检查两个整数是否相等？",
            options: ["=", "==", "!=", "==="],
            answer: "=="
          },
          {
            question: "在C语言中，自增运算符++放在变量前（前缀）和放在变量后（后缀）的区别是什么？",
            options: [
              "没有区别",
              "前缀形式先增加变量值再返回，后缀形式先返回变量原值再增加",
              "前缀形式用于整数，后缀形式用于浮点数",
              "后缀形式效率更高"
            ],
            answer: "前缀形式先增加变量值再返回，后缀形式先返回变量原值再增加"
          },
          {
            question: "逻辑与运算符&&和按位与运算符&在什么情况下行为相似，什么情况下行为不同？",
            options: [
              "它们总是行为相似",
              "当操作数都是整数时，行为相似；否则，不同",
              "当操作数都是真或假时，行为相似；否则，按位操作",
              "当且仅当操作数都为非零整数时，&&进行逻辑与，&进行按位与"
            ],
            answer: "当且仅当操作数都为非零整数时，&&进行逻辑与，&进行按位与"
          },
          {
            question: "下列哪个表达式的结果为假（0或非0）？",
            options: ["5 > 3", "!(5 == 5)", "4 < 4 || 5 > 5", "!(3 != 4)"],
            answer: "!(5 == 5)"
          },
          {
            question: "下列哪个运算符的优先级最高？",
            options: ["+ 和 -（算术运算符）", "* 和 /（算术运算符）", "=（赋值运算符）", "!（逻辑非运算符）"],
            answer: "!（逻辑非运算符）"
          },
          {
            question: "表达式 a = 5, b = 3, c = a + b; 中使用的逗号运算符 , 的作用是什么？",
            options: ["分隔语句", "顺序执行多个表达式，并将最后一个表达式的值赋给左侧的变量", "创建一个由多个表达式组成的复合表达式", "以上都不是"],
            answer: "创建一个由多个表达式组成的复合表达式"
          },
          {
            question: "阅读以下程序段，选择输出结果：\nint a = 5, b = 3;\nint c = a++ + b;\nprintf(\"%d, %d\\n\", c, a);",
            options: ["8, 5", "8, 6", "7, 5", "7, 6"],
            answer: "8, 6"
          },
          {
            question: "分析以下逻辑表达式的结果：\nint a = 3, b = 5, c = 0;\nc = (a > b) && (b < 10);\nprintf(\"%d\\n\", c);",
            options: ["0", "1", "3", "5"],
            answer: "0"
          },
          {
            question: "分析以下C语言程序，确定flag变量的最终值：\nint x = 5, y = 10;\nint flag = !(x > y) && (y % 2 == 0);\nprintf(\"%d\\n\", flag);",
            options: ["0", "1", "2", "编译错误"],
            answer: "1"
          }
        ];
        quizLoader('quiz_5', questions_5);
      }

      if(window.location.pathname.endsWith('quiz_6.html')) {
        const questions_6 = [
          {
            question: "在C语言中，if语句后面的表达式不能是以下哪一种？",
            options: ["逻辑表达式", "算数表达式", "关系表达式", "布尔类型的表达式"],
            answer: "算数表达式"
          },
          {
            question: "给定如下C语言代码片段，当grade的值为'B'时，以下哪个if语句会输出\"Good job!\"？\nchar grade = 'B';",
            options: [
              "if (grade == 'A') printf(\"Excellent!\");",
              "if (grade == 'B' || 'C') printf(\"Good job!\");",
              "if (grade == 'B') printf(\"Good job!\");",
              "if (grade >= 'A' && grade <= 'C') printf(\"Good job!\");"
            ],
            answer: "if (grade == 'B') printf(\"Good job!\");"
          },
          {
            question: "在C语言中，switch语句的表达式类型可以是？",
            options: ["整型或枚举类型", "浮点型", "字符串", "结构体"],
            answer: "整型或枚举类型"
          },
          {
            question: "以下哪个选项描述了switch语句中break语句的作用？",
            options: [
              "退出整个switch语句。",
              "退出当前case块，并继续执行下一个case块。",
              "退出当前case块，并跳出switch结构。",
              "退出整个函数。"
            ],
            answer: "退出当前case块，并跳出switch结构。"
          },
          {
            question: "在C语言中，switch语句的default部分的作用是？",
            options: ["强制所有case都执行", "表示当没有任何case匹配时执行的代码块", "必须放在switch语句的开头", "替代所有case的break语句"],
            answer: "表示当没有任何case匹配时执行的代码块"
          },
          {
            question: "关于C语言的三元运算符，哪个说法正确？",
            options: ["第一个表达式的结果必须是浮点类型。", "第一个表达式的结果必须是布尔类型。", "第一个表达式的结果必须是整数类型。", "以上均正确。"],
            answer: "第一个表达式的结果必须是布尔类型。"
          },
          {
            question: "当x=5, y=10时，表达式x > y ? x : y的结果是什么？",
            options: ["5", "10", "15", "0"],
            answer: "10"
          },
          {
            question: "关于C语言中的if...else语句，哪个说法是错误的？",
            options: ["if语句可以嵌套使用。", "else语句总是与最近的未配对的if语句相关联。", "if语句的条件部分必须是一个布尔值。", "else语句是可选的。"],
            answer: "else语句总是与最近的未配对的if语句相关联。"
          },
          {
            question: "如果x的值为-5，以下代码段的执行结果是什么？\nif (x > 0) {\n printf(\"Positive\\n\");\n} else if (x == 0) {\n printf(\"Zero\\n\");\n} else {\n printf(\"Negative\\n\");\n}",
            options: ["Positive", "Zero", "Negative", "编译错误"],
            answer: "Negative"
          },
          {
            question: "以下代码段中，z的值在哪些条件下会被设置为0？\nif (x > 0) {\n if (y > 0) {\n z = x + y;\n }\n} else {\n z = 0;\n}",
            options: ["仅当x <= 0时", "当x <= 0或y <= 0时", "当x > 0且y <= 0时", "当x和y都小于等于0时"],
            answer: "仅当x <= 0时"
          }
        ];
        quizLoader('quiz_6', questions_6);
      }


      if(window.location.pathname.endsWith('quiz_7.html')) {
        const questions_7 = [
          {
            question: "下列for循环的次数为：\nfor (i=0, x=0; !x && i<=5; i++)",
            options: ["5", "6", "1", "无限"],
            answer: "6",
          },
          {
            question: "下述关于循环体的描述中，哪个是错误的？",
            options: ["循环体中可以出现break语句和continue语句", "循环体中还可以出现循环语句", "循环体中不能出现goto语句", "循环体中可以出现开关语句"],
            answer: "循环体中不能出现goto语句",
          },
          {
            question: "有以下程序段：\nint n=0, p;\ndo {\n  scanf(\"%d\", &p);\n  n++;\n} while (p!=12345 && n<3);\n此处do-while循环的结束条件是：",
            options: ["p的值不等于12345并且n的值小于3", "p的值等于12345并且n的值大于等于3", "p的值不等于12345或者n的值小于3", "p的值等于12345或者n的值大于等于3"],
            answer: "p的值等于12345或者n的值大于等于3",
          },
          {
            question: "以下程序中，while循环的循环次数是：\nvoid main() {\n  int i=0;\n  while(i<10) {\n    if(i<1) continue;\n    if(i==5) break;\n    i++;\n  }\n}",
            options: ["1", "10", "6", "死循环，不能确定次数"],
            answer: "死循环，不能确定次数",
          },
          {
            question: "下列while循环的执行次数是：\nwhile(i=0)\ni--;",
            options: ["0", "1", "5", "死循环"],
            answer: "0",
          },
          {
            question: "在下列选项中，没有构成死循环的程序段是：",
            options: ["int i=100; while (1) { i=i%100+1; if (i>100) break; }", "for( ; ; );", "int k=1000; do {++k;} while (k>=1000);", "int s=36; while (s) --s;"],
            answer: "int s=36; while (s) --s;",
          },
          {
            question: "以下程序的输出结果是：\nmain() {\n  int a, b;\n  for(a=1, b=1; a<=100; a++) {\n    if (b>=10) break;\n    if (b%5==1) \n{ b+=5; continue; }\n  }\n  printf(\"%d\\n\", a);\n}",
            options: ["101", "6", "4", "3"],
            answer: "3",
          },
          {
            question: "以下程序的功能是:从键盘上输入若干个学生的成绩, 统计并输出最高成绩和最低成绩, 当输入负数时结束输入。\nmain()\n{float x,amax,amin;\nscanf(\"%f\",&x);\namax=x;\namin=x;\nwhile (________)\n{ if (x>amax) amax=x;\nif (________) amin=x;\nscanf(\"%f\",&x);}\nprintf(\"\\namax=%f\\namin=%f\\n\",amax,amin);} 则横线处应填：",
            options: ["x<=0和x>amin", "x>0和x<=amin", "x>0和x>amin", "x>=0和x<amin"],
            answer: "x>=0和x<amin",
          },
          {
            question: "函数pi的功能是根据以下近似公式求π值：(π*π)/6=1+1/(2*2)+1/(3*3)+..+1/(n*n)。\n#include <math.h>\nmain( )\n{ double s=0.0; long int i,n;\nscanf(\"%ld\",&n);\nfor(i=1;i<=n;i++)\ns=s+_______ ;\ns=(sqrt(6*s));\nprintf(\"s=%e\",s);} 请填空，完成求π的功能。",
            options: ["1/i*i", "1.0/i*i", "1.0/(i*i)", "1.0/(n*n)"],
            answer: "1.0/(i*i)",
          },
          {
            question: "设有以下程序：\nmain() {\n  int n1, n2;\n  scanf(\"%d\", &n2);\n  while (n2!=0) {\n    n1=n2%10;\n    n2=n2/10;\n    printf(\"%d\", n1);\n  }\n}\n程序运行后，如果从键盘上输入1298，则输出结果为：",
            options: ["892", "8921", "89", "921"],
            answer: "8921",
          }
        ];
        quizLoader('quiz_7', questions_7);
      }

      if(window.location.pathname.endsWith('quiz_8.html')) {
        const questions_8 = [
          {
            question: `有下列程序，执行后由键盘键入2时，s的值为：
        #define P (y*y+3*y) 
        void main() {
          int s, y;
          scanf("%d", &y);
          s = 3*P + 4*P;
          printf("s=%d\\n", s);
        }`,
            options: ["36", "40", "52", "70"],
            answer: "70",
          },
          {
            question: "在C程序中，main( )的位置",
            options: ["必须作为第一个函数", "必须作为最后一个函数", "可以任意", "必须放在它所调用的函数之后"],
            answer: "可以任意",
          },
          {
            question: "以下叙述中正确的是",
            options: ["构成C程序的基本单位是函数", "可以在一个函数中定义另一个函数", "main()函数必须放在其它函数之前", "所有被调函数一定要在调用之前进行定义"],
            answer: "构成C程序的基本单位是函数",
          },
          {
            question: "C语言规定，函数返回值的类型是由",
            options: ["return语句中的表达式类型所决定", "由被调用函数的类型所决定", "由主调函数中的实参数据类型所决定", "由被调函数中的形参数据类型所决定"],
            answer: "由被调用函数的类型所决定",
          },
          {
            question: `有以下函数定义：void fun(int n, double x) { …… } 若以下选项中的变量都已正确定义并赋值，则对函数fun的正确调用语句是`,
            options: ["fun(int y, double m);", "k=fun(10, 12.5);", "fun(x, n);", "void fun(n, x);"],
            answer: "fun(x, n);",
          },
          {
            question: `以下程序的运行结果是：
        #include <stdio.h> 
        main() {
          int k = 4, m = 1, p; 
          p = func(k, m); printf("%d,", p);
          p = func(k, m); printf("%d\\n", p);
        }
        func(int a, int b) {
          static int m = 0, i = 2; 
          i += m + 1; 
          m = i + a + b; 
          return m;
        }`,
            options: ["8,17,", "8,17", "8,8", "4,1"],
            answer: "8,17",
          },
          {
            question: `有如下程序：
        int func(int a, int b) {
          return (a + b);
        } 
        main() {
          int x = 2, y = 5, z = 8, r;
          r = func(func(x, y), z); 
          printf("%d\\n", r);
        }
    该程序的输出结果是`,
            options: ["12", "13", "14", "15"],
            answer: "15",
          },
          {
            question: `以下函数返回a数组中最小值所在的下标，在划线处应填入的是：
        fun(int a, int n) {
          int i, j = 0, p;
          p = j;
          for(i = j; i < n, i++)
            if(a[i] < a[p]) _______;
          return (p);
        }`,
            options: ["i = p", "a[p] = a[i]", "p = j", "p = i"],
            answer: "p = i",
          },
          {
            question: "以下正确的说法是：在C语言中",
            options: ["实参变量和与其对应的形参变量各占用独立的存储单元。", "实参变量和与其对应的形参变量共占用同一存储单元。","当实参变量和对应的形参变量同名时，才占用相同的存储单元。","形参变量是虚拟的，不占用存储单元。"],
            answer: "实参变量和与其对应的形参变量各占用独立的存储单元。",
          },
    {
      question: "以下正确的说法是：",
      options: ["函数的定义可以嵌套，但函数的调用不可以嵌套。", "函数的定义不可以嵌套，但函数的调用可嵌套。","函数的定义和调用均不可以嵌套。","函数的定义和调用均可以嵌套。"],
      answer: "函数的定义不可以嵌套，但函数的调用可嵌套。",
    }
        ];
        quizLoader('quiz_8', questions_8);
      }

      if(window.location.pathname.endsWith('quiz_9.html')) {
        const questions_9 = [
          {
            question: "下面哪种算法最适合对杂乱无章的数据进行排序？",
            options: ["选择排序", "冒泡排序", "快速排序", "插入排序"],
            answer: "快速排序",
          },
          {
            question: "一台计算机使用选择排序对400个数字排序花了400ms，若花费1600ms，大概能对多少个数字进行排序？",
            options: ["1200", "800", "1600", "3200"],
            answer: "800",
          },
          {
            question: "下列排序算法中，哪种算法的时间复杂度在最坏情况下是O(n^2)？",
            options: ["快速排序", "归并排序", "堆排序", "冒泡排序"],
            answer: "冒泡排序",
          },
          {
            question: "快速排序算法的基本思想是？",
            options: ["通过比较相邻元素的值，进行位置交换", "选定一个基准元素，通过一趟排序将待排序的数据分割成独立的两部分", "重复地选择基准值，将数组分成较小的和较大的两个子数组，直到子数组的大小为1", "以上都是"],
            answer: "重复地选择基准值，将数组分成较小的和较大的两个子数组，直到子数组的大小为1",
          },
          {
            question: "冒泡排序算法在每一轮排序中，至少可以确定多少个元素的最终位置？",
            options: ["0", "1", "2", "3"],
            answer: "1",
          },
          {
            question: "对序列（15，9，7，8，20，-1，4）进行排序，进行一趟排序后，数据的排列变为（4，9，-1，8，20，7，15），则采用的是______排序。",
            options: ["选择", "快速", "希尔", "冒泡"],
            answer: "希尔",
          },
          {
            question: "用直接插入排序对下面四个序列进行排序(由小到大)，元素比较次数最少的是",
            options: ["94,32,40,90,80,46,21,69", "32,40,21,46,69,94,90,80", "21,32,46,40,80,69,90,94", "90,69,80,46,21,32,94,40"],
            answer: "21,32,46,40,80,69,90,94",
          },
          {
            question: "选择排序算法在排序过程中，数组的最大值（或最小值）会在何时被放到其最终位置上？",
            options: ["每次迭代结束时", "排序开始前", "排序结束后", "首次迭代时"],
            answer: "每次迭代结束时",
          },
          {
            question: "希尔排序是通过什么方式来改进插入排序的？",
            options: ["允许元素在比较时跳跃式地移动", "使用堆数据结构", "引入快速排序的分区策略", "引入归并排序的合并策略"],
            answer: "允许元素在比较时跳跃式地移动",
          },
          {
            question: "在归并排序中，若待排序记录的个数为20，则共需要进行______趟归并。",
            options: ["4", "2", "10", "5"],
            answer: "5",
          }
        ];
        quizLoader('quiz_9', questions_9);
      }

      if(window.location.pathname.endsWith('quiz_10.html')) {
        const questions_10 = [
          {
            question: "下列哪个选项正确地描述了递归函数的基本特点？",
            options: ["函数内部直接调用自身。", "函数必须有返回值。", "函数调用自身时参数必须改变。", "递归函数只能用于计算阶乘。"],
            answer: "函数内部直接调用自身。",
          },
          {
            question: "在使用递归函数时，如果不当处理，可能导致什么问题？",
            options: ["栈溢出", "无限循环", "编译错误", "以上都不是"],
            answer: "栈溢出",
          },
          {
            question: "编写计算斐波那契数列第n项的函数时，哪种递归方式效率较低（假设n较大）？",
            options: ["直接递归（每次计算都重新计算子问题）", "记忆化递归（使用数组或哈希表存储已计算的结果）", "尾递归（在递归调用后没有其他操作）", "迭代"],
            answer: "直接递归（每次计算都重新计算子问题）",
          },
          {
            question: "递归函数的结束条件（基准情况）是什么？",
            options: ["函数调用自身的次数达到某个限制。", "函数返回特定值或不再调用自身。", "函数的参数类型改变。", "函数的返回类型改变。"],
            answer: "函数返回特定值或不再调用自身。",
          },
          {
            question: `分析以下C语言递归函数，它的功能是？
        int factorial(int n) {
            if (n == 0)
                return 1;
            else
                return n * factorial(n - 1);
        }`,
            options: ["计算n的阶乘", "计算n的平方", "计算n的逆序", "查找n在数组中的位置"],
            answer: "计算n的阶乘",
          },
          {
            question: `下列递归函数中的错误是？
        void printNumbers(int n) {
            if (n < 0)
                return;
            printNumbers(n - 1);
            printf("%d ", n);
        }`,
            options: ["递归没有基准情况", "基准情况处理错误", "函数逻辑正确，无错误", "递归调用顺序错误"],
            answer: "函数逻辑正确，无错误",
          },
          {
            question: `下列程序执行后，输出的结果是？
    #include <stdio.h>
      int cnt=0;
      int fib(int n){
      　　cnt++;
      　　if(n==0) 
      　　　　return 1; 
      　　else if(n==1) 
      　　　　return 2; 
      　　else 
      　　　　return fib(n-1)+fib(n-2);
    }
      void main()
      {
      　　fib(8);
      　　printf("%d",cnt);
      }`,
            options: [
              "67",
              "76",
      "134",
      "152"
            ],
            answer: "67",
          },
          {
            question: `给定以下递归函数用于计算n的阶乘（n!），哪个选项正确地描述了该函数的行为？
        int factorial(int n) {
            if (n == 0) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }`,
            options: [
              "当n为负数时，函数将返回正确的阶乘值。",
              "函数中的基准情况是n == 1，但这里写成了n == 0。",
              "函数能正确计算任意非负整数n的阶乘。",
              "函数在递归调用时使用了错误的参数（应为n + 1而非n - 1）。"
            ],
            answer: "函数能正确计算任意非负整数n的阶乘。",
          },
          {
            question: `观察以下代码，算出若调用函数Fun(2)则函数返回值是多少？
        int Fun(int n)
        {
        if(n==5)
          return 2;
        else
          return 2*Fun(n+1);
        }`,
            options: ["2", "4", "8", "16"],
            answer: "16",
          },
          {
            question: "下列选项关于递归说法错误的是",
            options: ["存在限制条件，当满足限制条件时，递归停止", "每次递归调用后越来越接近递归的条件", "递归可以无限制递归下去", "递归层次太深容易出现栈溢出"],
            answer: "递归可以无限制递归下去",
          }
        ];
        
        quizLoader('quiz_10', questions_10);
      }

      if(window.location.pathname.endsWith('quiz_11.html')) {
        const questions_11 = [
          {
            question: "C语言中，字符串的结束是通过什么来标识的？",
            options: [
              "字符串的最大长度",
              "字符串末尾的空字符（'\\0'）",
              "字符串末尾的换行符（'\\n'）",
              "字符串末尾的回车符（'\\r'）"
            ],
            answer: "字符串末尾的空字符（'\\0'）"
          },
          {
            question: "以下哪个函数用于比较两个字符串是否相等？",
            options: ["strlen()", "strcpy()", "strcmp()", "strcat()"],
            answer: "strcmp()"
          },
          {
            question: "在C语言中，如何声明一个包含5个字符串的数组，每个字符串最多可以包含20个字符？",
            options: [
              "char strings[5][20];",
              "char *strings[5];",
              "char strings[20][5];",
              "char strings[][20] = {\"Hello\", \"World\"};"
            ],
            answer: "char strings[5][20];"
          },
          {
            question: "在C语言中，字符串字面量（如\"hello\"）是如何存储的？",
            options: [
              "存储在栈上",
              "存储在堆上",
              "存储在静态存储区（如只读数据段）",
              "存储在全局变量区"
            ],
            answer: "存储在静态存储区（如只读数据段）"
          },
          {
            question: "以下哪个函数用于将源字符串复制到目标字符串中，包括空字符？",
            options: ["strcat()", "strcmp()", "strcpy()", "strlen()"],
            answer: "strcpy()"
          },
          {
            question: `以下程序执行后，变量len的值是多少？
    char str[] = "Hello, World!";
    int len = 0;
    while (str[len] != '\\0') {
      len++;
    }`,
            options: ["5", "12", "13", "0"],
            answer: "13"
          },
          {
            question: `以下程序将输出什么？
    char str1[] = "apple";
    char str2[] = "Apple";
    if (strcmp(str1, str2) == 0) {
          printf("Equal\\n");
    } else {
        printf("Not Equal\\n");
    }`,
            options: ["Equal", "Not Equal", "编译错误", "运行时错误"],
            answer: "Not Equal"
          },
          {
            question: `在下面的程序中， result字符串的最终内容是什么？
    char str1[] = "Hello,";
    char str2[] = "World!";
    char result[20];
    strcpy(result, str1);
    strcat(result, str2);`,
            options: ["Hello, ", "World!", "Hello, World!", "Hello, World!!!"],
            answer: "Hello, World!"
          },
          {
            question: `下面程序将输出什么？（注意位置是从1开始计数的）
    char str[] = "Hello, World!";
    char *found = strchr(str, 'W');
    if (found != NULL) {
        printf("Found 'W' at position %ld\\n", found - str + 1);
    } else {
        printf("Not found\\n");
    }`,
            options: ["Found 'W' at position 1", "Found 'W' at position 7", "Found 'W' at position 8", "Not found"],
            answer: "Found 'W' at position 7"
          },
          {
            question: "以下选项中，不能正确赋值的是",
            options: [
              "char s1[10];s1==\"Ctest\";",
              "char s2[ ]={'C','t','e','s','t'};",
              "char s3[20]=\"Ctest\";",
              "char *s4=\"Ctest\\n\";"
            ],
            answer: "char s1[10];s1==\"Ctest\";"
          }
        ];
        
        quizLoader('quiz_11', questions_11);
      }

      if(window.location.pathname.endsWith('quiz_12.html')) {
        const questions_12 = [
          {
            question: "以下哪个数组初始化方式是正确的？",
            options: [
              "int arr[5] = {1, 2, 3};",
              "int arr[5] = {1, 2, 3, 4, 5, 6};",
              "int arr[5]; arr = {1, 2, 3, 4, 5};",
              "int arr[5]; arr[0...4] = {1, 2, 3, 4, 5};"
            ],
            answer: "int arr[5] = {1, 2, 3};"
          },
          {
            question: "以下哪个表达式不能正确访问数组int arr[10];的第四个元素？",
            options: ["arr[3]", "*(arr + 3)", "3[arr]", "arr[10]"],
            answer: "arr[10]"
          },
          {
            question: "当数组作为函数参数传递时，实际上传递的是什么？",
            options: ["数组的全部元素", "数组的第一个元素的地址", "数组的长度", "数组的最后一个元素的地址"],
            answer: "数组的第一个元素的地址"
          },
          {
            question: "定义一个3行4列的整型二维数组，并初始化第一行的元素为1, 2, 3, 4，以下哪个定义是正确的？",
            options: [
              "int arr[3][4] = {1, 2, 3, 4};",
              "int arr[3][4] = {{1, 2, 3, 4}};",
              "int arr[3][4] = {{1, 2, 3, 4}, {}, {}};",
              "int arr[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};"
            ],
            answer: "int arr[3][4] = {{1, 2, 3, 4}};"
          },
          {
            question: "如何获取C语言中数组int arr[10];的大小（元素数量）？",
            options: [
              "使用sizeof(arr) / sizeof(arr[0])",
              "直接使用sizeof(arr)",
              "数组名arr本身就是大小",
              "数组大小在C语言中无法直接获取"
            ],
            answer: "使用sizeof(arr) / sizeof(arr[0])"
          },
          {
            question: `下列程序执行后的输出结果是__________。
    main()
    {
    int a,b[5];
    a=0; b[0]=3;
    printf("%d,%d\\n",b[0],b[1]);
    }`,
            options: ["3,0", "3  0", "0,3", "3,不定值"],
            answer: "3,不定值"
          },
          {
            question: "设有数组定义:char array[]=\"China\";则数组array所占的存储空间为________。",
            options: ["4个字节", "5个字节", "6个字节", "7个字节"],
            answer: "6个字节"
          },
          {
            question: `下面程序的功能是:计算1到10之间的奇数之和及偶数之和,划线处应填________。
    #include <stdio.h>main()
    { int a,b,c,i;
    a=b=c=0;
    for(i=0;i<=10;i+=2)
      { a+=i;
        ________;
        c+=b;  }
        printf("偶数之和=%d\\n",a);
        printf("奇数之和=%d\\n",c-11); 
    }`,
            options: ["c+=i", "b+=i", "b=i+1", "i=i+1"],
            answer: "b=i+1"
          },
          {
            question: `以下程序输出a数组中的最小值及其下标，在划线处应填入的是________。
    main( )
    { int i,p=0,a[10];
    for(i=0;i<10;i++)
      scanf("%d",&a[i]);
    for(i=1;i<10;i++)
      if(a[i]<a[p])_______________;
    printf("%d,%d\\n",a[p],p); 
    }`,
            options: ["i=p", "a[p]=a[i]", "p=j", "p=i"],
            answer: "p=i"
          },
          {
            question: "有如下说明:int a[10]={0,1,2,3,4,5,6,7,8,9};则数值不为9的表达式是________。",
            options: ["a[10-1]", "a[8]", "a[9]-0", "a[9]-a[0]"],
            answer: "a[8]"
          }
        ];
        quizLoader('quiz_12', questions_12);
      }

      if(window.location.pathname.endsWith('quiz_13.html')) {
        const questions_13 = [
          {
            question: "以下哪个声明创建了一个指向整数的指针变量ptr？",
            options: ["int ptr;", "int *ptr;", "*int ptr;", "int **ptr;"],
            answer: "int *ptr;"
          },
          {
            question: "给定int a = 5; int *ptr;，如何使ptr指向a？",
            options: ["ptr = a;", "ptr = &a;", "*ptr = &a;", "&ptr = a;"],
            answer: "ptr = &a;"
          },
          {
            question: "如果int *ptr = &a;（其中a是已定义的整数），则*ptr的值是？",
            options: ["变量的地址", "变量的值", "指针本身", "编译错误"],
            answer: "变量的值"
          },
          {
            question: "给定int arr[10]; int *ptr = arr;，ptr + 1指向哪个元素？",
            options: ["arr[0]", "arr[10]", "arr[1]", "编译错误"],
            answer: "arr[1]"
          },
          {
            question: "如何初始化一个指针变量，使其不指向任何对象？",
            options: ["int *ptr = 0;", "int *ptr = NULL;", "int *ptr = void;", "int *ptr;"],
            answer: "int *ptr = 0;"
          },
          {
            question: "在C语言中，数组名在表达式中通常被当作什么？",
            options: ["数组的最后一个元素的地址", "数组的长度", "数组本身", "数组第一个元素的地址"],
            answer: "数组第一个元素的地址"
          },
          {
            question: `给定以下C语言程序段：
    int a = 5;
    int *p = &a;
    int b = *p;
    关于此程序段，哪个说法是正确的？`,
            options: ["变量b的值为&a。", "变量p的值为5。", "变量b的值为5。", "变量a的地址无法从p获取。"],
            answer: "变量b的值为5。"
          },
          {
            question: `以下C语言函数的功能是？
    void modify(int *x) {
        *x = *x * 2;
    }`,
            options: [
              "接收一个整数，返回其两倍的值。",
              "接收一个整数的地址，将指向的整数值翻倍。",
              "接收一个整数，并打印其两倍的值。",
              "接收两个整数，返回它们的和。"
            ],
            answer: "接收一个整数的地址，将指向的整数值翻倍。"
          },
          {
            question: `下面程序段的运行结果是
    char *s="abcde";
    s+=2;
    printf("%d", s);`,
            options: ["cde", "字符'c'", "字符'c'的地址", "无确定的输出结果"],
            answer: "字符'c'的地址"
          },
          {
            question: `下面程序的功能是从输入的十个字符串中找出最长的那个串。请在________处填空。
    #include "stdio.h"
    #include "string.h"
    #define N 10
    main()
    {
    char s[N][81], * t;
    int j;
      for (j=0; j<N; j++)
       gets (s[j]);
    t= *s;
      for (j=1; j<N; j++)
       if(strlen(t)<strlen(s[j]))   ________;
         printf("the max length of ten strings is: %d, %s\\n", strlen(t), t);
    }`,
            options: ["t=s[j]", "t=&s[j]", "t= s++", "t=s[j][0]"],
            answer: "t=s[j]"
          }
        ];
        quizLoader('quiz_13', questions_13);
      }

      if(window.location.pathname.endsWith('quiz_14.html')) {
        const questions_14 = [
          {
            question: "下列关于C语言结构体的描述，哪个是正确的？",
            options: [
              "结构体是一种自定义的数据类型，它允许你将不同类型的数据项组合成一个单一的类型。",
              "结构体变量一旦定义，其内部成员的类型和数量就不能再改变。",
              "结构体是一种函数，用于处理多个相关变量。",
              "结构体成员可以通过直接访问其变量名来访问，而不需要使用结构体变量名作为前缀。"
            ],
            answer: "结构体是一种自定义的数据类型，它允许你将不同类型的数据项组合成一个单一的类型。"
          },
          {
            question: "在C语言中，如果你有一个指向结构体的指针，并且想要修改该结构体中某个成员的值，你应该怎么做？",
            options: [
              "直接通过结构体指针来修改，无需解引用。",
              "首先解引用结构体指针，然后使用.操作符来访问和修改成员。",
              "使用->操作符来直接访问和修改成员。",
              "将结构体指针转换为数组，然后通过索引来修改成员。"
            ],
            answer: "使用->操作符来直接访问和修改成员。"
          },
          {
            question: `给定以下C语言结构体定义和变量初始化：
    struct Student {
        int id;
      char name[50];
      float score;
    };
    struct Student s1 = {1, "Alice", 92.5};
    若要访问s1的id成员，应使用哪种语法？`,
            options: [
              "s1.id",
              "s1->id",
              "Student.s1.id",
              "(*s1).id"
            ],
            answer: "s1.id"
          },
          {
            question: `定义以下结构体类型
    structs
    {
    int a; 
    char b; 
    float f;
    }
    则语句printf("%d",sizeof(structs))的输出结果为`,
            options: ["3", "7", "6", "4"],
            answer: "7"
          },
          {
            question: "当定义一个结构体变量时，系统为它分配的内存空间是",
            options: [
              "结构中一个成员所需的内存容量",
              "结构中第一个成员所需的内存容量",
              "结构体中占内存容量最大者所需的容量",
              "结构中各成员所需内存容量之和"
            ],
            answer: "结构中各成员所需内存容量之和"
          },
          {
            question: `定义以下结构体类型
    struct student
    {
    char name[10];
    int score[50];
    float average; 
    }
    stud1; 
    则stud1占用内存的字节数是`,
            options: ["64", "114", "228", "7"],
            answer: "114"
          },
          {
            question: "以下哪项是C语言中正确定义结构体并使用typedef为其创建别名的语法？",
            options: [
              "typedef struct { int a; float b; } MyStruct;",
              "typedef struct MyStruct { int a; float b; };",
              "struct MyStruct typedef { int a; float b; };",
              "typedef struct MyStruct { int a; float b; } *MyStructPtr;"
            ],
            answer: "typedef struct { int a; float b; } MyStruct;"
          },
          {
            question: `假设有如下结构体和typedef定义：
    typedef struct {
        int id;
        char name[50];
    } Employee;
    下面哪个选项是创建Employee类型变量并初始化的正确方式？`,
            options: [
              "Employee emp = {1, \"John Doe\"};",
              "Employee *emp = {1, \"John Doe\"};",
              "struct Employee emp = {1, \"John Doe\"};",
              "typedef Employee e; Employee e = {1, \"John Doe\"};"
            ],
            answer: "Employee emp = {1, \"John Doe\"};"
          },
          {
            question: "下列有关typedef的叙述不正确的是",
            options: [
              "用typedef可以定义各种类型名，但不能用来定义变量",
              "typedef和#define都是在预编译时处理的",
              "用typedef只是将已存在的类型用一个新的标识符来代表",
              "使用typedef有利于程序的通用和移植"
            ],
            answer: "typedef和#define都是在预编译时处理的"
          },
          {
            question: `设有以下语句：
      typedef struct TT
      {char c; int a[4];} CIN;
      则下面叙述中正确的是`,
            options: [
              "CIN是struct TT类型的变量",
              "TT是struct类型的变量",
              "可以用TT定义结构体变量",
              "可以用CIN定义结构体变量"
            ],
            answer: "可以用CIN定义结构体变量"
          }
        ];
        
        quizLoader('quiz_14', questions_14);
      }

      if(window.location.pathname.endsWith('quiz_15.html')) {
        const questions_15 = [
          {
            question: "在C语言中，用于打开文件并准备读写的函数是？",
            options: [
              "fopen()",
              "read()",
              "write()",
              "close()"
            ],
            answer: "fopen()"
          },
          {
            question: "当你使用fopen()函数以只读模式打开一个文件时，应使用的模式字符串是？",
            options: [
              "\"r\"",
              "\"w\"",
              "\"a\"",
              "\"rb+\""
            ],
            answer: "\"r\""
          },
          {
            question: "如果在文件读写过程中，需要确定文件是否成功打开，应检查fopen()函数的返回值是",
            options: [
              "文件的实际内容",
              "文件的大小",
              "NULL",
              "文件的路径"
            ],
            answer: "NULL"
          },
          {
            question: "哪个函数用于从文件中读取数据到数组中？",
            options: [
              "fgets()",
              "fputc()",
              "fprintf()",
              "fseek()"
            ],
            answer: "fgets()"
          },
          {
            question: "当使用fwrite()函数向文件写入数据时，如果写入成功，该函数返回什么？",
            options: [
              "写入的字节数",
              "文件的当前位置",
              "总是返回1",
              "文件的总大小"
            ],
            answer: "写入的字节数"
          },
          {
            question: "若要关闭一个已打开的文件，应使用哪个函数？",
            options: [
              "fclose()",
              "fclose_file()",
              "end_file()",
              "close_file()"
            ],
            answer: "fclose()"
          },
          {
            question: "在C语言中，用于以二进制形式打开文件进行读取的函数是？",
            options: [
              "fopen(\"file.dat\", \"r\")",
              "fopen(\"file.dat\", \"rb\")",
              "fread()",
              "fopen(\"file.dat\", \"w\")"
            ],
            answer: "fopen(\"file.dat\", \"rb\")"
          },
          {
            question: "如果想要以追加模式打开一个二进制文件以写入更多数据，应使用哪种模式字符串？",
            options: [
              "\"r+\"",
              "\"rb+\"",
              "\"a\"",
              "\"ab\""
            ],
            answer: "\"ab\""
          },
          {
            question: `下面程序段执行后的输出结果是
    #include <stdio.h>
    printf("%d",NULL);`,
            options: [
              "1",
              "-1",
              "2",
              "0"
            ],
            answer: "0"
          },
          {
            question: `下面程序执行后的输出结果是
    #include<stdio.h>
      int main()
      {
      FILE*fp;
      int i=20,j=30,k,n;
      fp=fopen("d1.dat","w");
      fprintf(fp,"%d\\n",i);
      fprintf(fp,"%d\\n",j);
      fclose(fp);
      fp=fopen("d1.dat","r");
      fscanf(fp,"%d%d",&k,&n);
      printf("%d %d\\n",k,n);
      fclose(fp);
      return 0;
      }`,
            options: [
              "20 50",
              "30 20",
              "30 50",
              "20 30"
            ],
            answer: "20 30"
          }
        ];
        
        quizLoader('quiz_15', questions_15);
      }
    
};

function quizLoader(quiz_name, questions) {
  if (!db) {
    console.error('Database not initialized. Please try again.');
    return;
  }

  const quizContainer = document.getElementById('quizContainer');
  const submitButton = document.getElementById('submitQuiz');

  function displayQuestions() {
    if (!checkUserLoggedIn()) {
      return; // If not logged in, stop execution
    }
    quizContainer.innerHTML = '';

    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

      q.options.forEach(option => {
        const escapedOption = option.replace(/"/g, '&quot;'); // Escapa comillas dobles
        const optionId = `q${index}_option_${escapedOption}`;
      
        questionDiv.innerHTML += `
          <input type="radio" id="${optionId}" name="q${index}" value="${escapedOption}">
          <label for="${optionId}">${option}</label><br>
        `;
      });

      quizContainer.appendChild(questionDiv);
    });
  }

  function allQuestionsAnswered() {
    const unansweredQuestions = [];
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (!selectedOption) {
        unansweredQuestions.push(index);
      }
    });
    return unansweredQuestions;
  }

  function showUnansweredQuestions() {
    const unansweredQuestions = allQuestionsAnswered();
    if (unansweredQuestions.length > 0) {
      alert(`请回答所有问题。以下问题未回答：${unansweredQuestions.map(index => index + 1).join(', ')}`);

      document.querySelectorAll('.question').forEach((questionDiv, index) => {
        const existingLabels = questionDiv.querySelectorAll('span');
        existingLabels.forEach(label => label.remove());

        if (unansweredQuestions.includes(index)) {
          const notAnsweredLabel = document.createElement('span');
          notAnsweredLabel.textContent = '(你没做过)';
          notAnsweredLabel.style.color = 'red';
          notAnsweredLabel.style.fontWeight = 'bold';
          questionDiv.appendChild(notAnsweredLabel);
        }
      });
    }
  }

  submitButton.onclick = function() {
    showUnansweredQuestions();

    const unansweredQuestions = allQuestionsAnswered();
    if (unansweredQuestions.length > 0) {
      return; // Stop further execution if there are unanswered questions
    }

    let score = 0;
    let totalQuestions = questions.length;

    questions.forEach((q, index) => {
      const options = document.querySelectorAll(`input[name="q${index}"]`); // Obtener todos los elementos de opción para la pregunta actual
      options.forEach(option => {
        const existingResult = option.parentNode.querySelector('span'); // Buscar un <span> en el nodo padre
        if (existingResult) {
          existingResult.remove(); // Eliminar el <span> existente
        }
      });
    });

    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      const result = document.createElement('span');
      

      
      if (selectedOption && selectedOption.value.trim() === q.answer.trim()) {
        score++;
        result.innerHTML = '(对的)';
        result.style.color = 'green';
      }
      else{
        console.log(selectedOption.value.trim());
        console.log(q.answer.trim());
        result.innerHTML = '(不对)';
        result.style.color = 'red';
      }
      result.style.fontSize = '15px';
      selectedOption.parentNode.appendChild(result);

    });
    document.getElementById("score").innerHTML = `score ${score}/10`;
    const username = localStorage.getItem('username');
    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');
    const request = objectStore.get(username);

    request.onsuccess = function(event) {
      const user = request.result;

      if (!user.quizzes) user.quizzes = {};

      if (user.quizzes[quiz_name] === false) {
        user.experience += score * 10;
        user.quizzes[quiz_name] = true;

        const updateRequest = objectStore.put(user);

        updateRequest.onsuccess = function() {
          alert(`你已经正确回答了 ${score} 道题，共 ${totalQuestions} 道题！你获得了 ${score * 10} 点经验值。`);
        };

        updateRequest.onerror = function() {
          console.error('更新失败: ', updateRequest.error);
        };
      } else {
        alert('你已经完成过这个测验了，经验值无法再次更新。');
        
      }

      if (score >= 6) {
        const nextLevelElement = document.getElementById('level');
        const nextLevel = nextLevelElement.textContent.trim();
        var path = window.location.pathname;
            // 从路径中提取文件名
        var fileName = path.substring(path.lastIndexOf('/') + 1);
        const story_link = document.getElementById('story_link');
        story_link.innerHTML = '剧情解锁(点击)';
        story_link.style.color = 'red';
        story_link.href = `story/${ fileName }`;


        button_next = document.getElementById("next_quiz");
          button_next.href = `quiz_${parseInt(user.lessonCompleted)+2}.html`;
          button_next.innerHTML = 'newest level';

        if (user.levelFollower && !user.levelFollower[nextLevel]) {
          user.levelFollower[nextLevel] = true;
          user.lessonCompleted = parseInt(user.lessonCompleted) + 1;
          const updateRequest = objectStore.put(user);


          

          
          updateRequest.onsuccess = function() {
            alert(`恭喜！你已解锁下一等级 ${nextLevel}!`);

          };

          updateRequest.onerror = function() {
            console.error('解锁下一等级失败: ', updateRequest.error);
          };
        }
      } else {
        alert(`你未通过测试。你的得分是 ${score}。再试一次。`);
        document.getElementById("score").innerHTML = `score ${score}/10`;
      }
    };

    request.onerror = function() {
      console.error('加载用户数据失败: ', request.error);
    };
  };

  displayQuestions();
}

function checkUserLoggedIn() {
  const username = localStorage.getItem('username');
  if (!username) {
    alert('请先登录！'); // Prompt user to log in
    window.location.href = '../../index.html'; // Redirect to login page
    return false;
  }
  return true;
}
