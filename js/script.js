/*1․ ստեղծեք ֆունկցիա, որը կկարողանա գտնել եռանկյունու մակերեսը, և հաշվարկել կողմերի երկարությունը 
որը պետք է հավասար լինի 5ի, 6ի և 7
2․ ստեղծեք ֆունկցիա, որը պատահականության սկզբունքով կգեներացնի 1 – 10 թվերը, և յուզեռին կասի, 
որպեսզի յուզեռը գուշակի ֆունկցիայի կողմից գեներացված թիվը, բացի դա պետք է ունենաք երկու փոփոխական, 
առաջինում պետք է գրեք թե քանի անգամ է յուզեռը ճիշտ պատասխանել, իսկ երկրորդում թե քանի անգամ է սխալ 
պատասխանել 

3․ ստեղծեք ֆունկցիա, որը երկու կաշխատի այնպես, որ սթրինգի ամեն նոր բառի առաջին տառը սկսվի մեծատառով

4․ ստեղծեք ֆունկցիա, որը կկարողանա հասկանալ Հայերեն այբուբենը, ու նախադասությունների մեջից 
կառանձնացի ձայնավոր տառերը

5․ ստեղծեք ֆունկցիա, որը որպես արգումենտ կստանա զանգված, ու կստուգի զանգվածի բոլոր այթմները,
 ստեգուլ բացի նա պետք է ֆիլտրի ամեն ինչ և թողնի միայն դրական թվերը, ու եթե դրական թվերը կրկնվեն, 
 ապա գումարի իրար հետո ջնջի, կրկնողվերը ու որպես նոր արժեք դնի զանգվածի ամենավերջին

6․ ստեղծեք ֆունկցիա, որը պետք ա ստանա 2 արգումենտ, առաջինը սթրինգ, իսկ երկրորդը չափման միավոր, 
ու էդ ֆունկցիան ցանկացած տողի վրա օգտագործելով պետք ա տառերը կտրվեն ու վերադարձնի միայն թիվը, 
օրինակ “sadsaddsa156pxsadsd” պետք է վերադարձնի միայն 156 ու վերջից ավելացնի չափման միավորը

ՈՉ ՊԱՐՏԱԴԻՐ, ԲԱՐԴ
7․  ստեղծեք ֆունկցիա, որը որպես արգումենտ կստանա ինչ-որ տառեր, ու էդ տառերով ռանդոմ կերպով ձեզ 
կվերադարձնի բառեր (ցանկացած լեզվով)*/

//1 
function getTriangleArea(side1,side2,width){
	const a = (side1 + side2 + width)/ 2;
	const b = Math.sqrt(a * (a - side1) * (a - side2) * (a - width));
	return  `the length of sides = ${a * 2}  area = ${b}`;
}
console.log(getTriangleArea(5,6,7));

/*2․ ստեղծեք ֆունկցիա, որը պատահականության սկզբունքով կգեներացնի 1 – 10 թվերը, և յուզեռին կասի, 
որպեսզի յուզեռը գուշակի ֆունկցիայի կողմից գեներացված թիվը, բացի դա պետք է ունենաք երկու փոփոխական, 
առաջինում պետք է գրեք թե քանի անգամ է յուզեռը ճիշտ պատասխանել, իսկ երկրորդում թե քանի անգամ է սխալ 
պատասխանել */

function generateNum(){
	let userAnswer = 0;
	let question = 0;
	for(let i = 0; i < 1;){
     let player = prompt("Guess the number from 1 to 10");
	 if (player === null){
		return ` Player: ${userAnswer} System: ${question}`;
	 }
	 const num = Math.floor(Math.random()* 10);
	 alert("The guess number is" + " " + num);
      if(num === Number(player)){
		++userAnswer;
	  } else{
		++question;
	  }
	}
}
alert(generateNum());

/*3․ ստեղծեք ֆունկցիա, որը երկու կաշխատի այնպես, 
որ սթրինգի ամեն նոր բառի առաջին տառը 
սկսվի մեծատառով
*/ 

function myUpperCase(text) {
 const arr = [];
 const text1 = text.split(" ");
 for (let element of text1) {
	const firstLetter = element[0].toUpperCase() + element.slice(1);
	arr.push(firstLetter);
}
return arr.join(" ");
}
console.log(myUpperCase("It is too hot today"));

//4 ստեղծեք ֆունկցիա, որը կկարողանա հասկանալ Հայերեն այբուբենը, ու նախադասությունների մեջից 
//կառանձնացի ձայնավոր տառերը


function findTheVowels (text){
    const split = text.split("");
    const array = [];
    const vowels = ["ա","է", "ը", "ի", "օ", "ու"]
    split.forEach(element => {
        if(vowels.includes(element)){
            array.push(element);
        }
    });
    return array;
}
console.log(findTheVowels("Հուլիսի 24-ի երեկոյան ժամերին քաղաքի առանձին հատվածներում հնարավոր է կարճատև անձրև և ամպրոպ"));

//5
/ ստեղծեք ֆունկցիա, որը որպես արգումենտ կստանա 
զանգված, ու կստուգի զանգվածի բոլոր այթմները,
 ստեգուլ բացի նա պետք է ֆիլտրի ամեն ինչ և թողնի 
 միայն դրական թվերը, ու եթե դրական թվերը կրկնվեն, 
 ապա գումարի իրար հետո ջնջի, կրկնողվերը ու որպես 
 նոր արժեք դնի զանգվածի ամենավերջին






