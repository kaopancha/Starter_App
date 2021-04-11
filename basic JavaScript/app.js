// การแสดงผล
// document.write("<h1>Basic JavaScript Learning</h1>")
console.log("Basic JavaScript Learning")
console.error("ไม่พบไฟล์")
console.warn("เจอข้อผิดพลาด")
// console.log(`list ${list[0]} list2 : ${list2[0]} list3 : ${list3[0]}`) แบบต่อข้อความ
// alert("Basic JavaScript Learning")

//Confirm (OK, Cancle)
function deleteData(){
    let result = confirm('คุณต้องการลบข้อมูลหรือไม่')
    if(result){
        console.log('ลบข้อมูลเรียบร้อย')
    }else{
        console.log('ยกเลิกการลบข้อมูล')
    }
}

// ตัวแปร
var variable_value              //ไม่กำหนดค่า จะเป็น undefined
let let_value                   //ค่าที่กำหนดใน function จะไม่ส่งผลต่อตัวแปรด้านนอก
const const_value = "constant"  //ค่าคงที่ เปลี่ยนไม่ได้
console.log("Before :", const_value, let_value)
let_value = 20
console.log("After : " + let_value)

// null ไม่มีค่า คำนวณไม่ได้ เปรียบเทียบเป็น false
// underfined ตัวแปรไม่ได้กำหนดค่า
// NaN -> Not a Number จากนำข้อความไปคำนวณกับตัวเลข

// ชนิดตัวแปร
let number_val = 20
let string_val = '20'
let boolean_val = true
console.log('type of', typeof(number_val), typeof(string_val), typeof(boolean_val))

// แปลงชนิดข้อมูล
let StrNum = '20.15'
let StrtoInt = parseInt(StrNum)
let StrtoFloat = parseFloat(StrNum)
let StrtoNum = +StrNum
let NumtoStr = StrtoNum+""
let NumtoStr2 = StrtoNum.toString()

// + - * / %(หารเอาเศษ) **(ยกกำลัง) == != > < &&(AND) ||(OR) !(NOT)
// a++ ใช้ก่อนเพิ่ม 1 ค่า --a ลบก่อน 1 ค่าค่อยนำไปใช้
// += -= และอื่น ๆ
// ลำดับ ()   ++,--   *,/,%   +,-   <,<=,>=,>   ==,!=    &&,||    =,+=,-=,อื่นๆ(ขวาไปซ้ายเฉพาะกลุ่มนี้)

// if condition ซ้อนได้ไม่ควรเยอะเกินไป
let score = 70
if(score > 80){console.log('A')}
else if(score > 70){console.log('B')}
else if(score > 60){console.log('C')}

// ternary operator ลดรูป if else
pass = score>50 ? "ผ่าน" : "ไม่ผ่าน"
console.log("if else ลดรูป",pass)

// switch case
let month = 1
switch(month){
    case 1 : console.log('Jan')
        break
    case 2 : console.log('Feb')
        break
    default : console.log('ไม่พบข้อมูล')
}

// Loop (break จะหลุดจาก loop / continue จะหยุดทำแล้วไปเริ่ม loop รอบถัดไป)
let count = 1
// while ไม่รู้รอบ
while(count <= 5){
    console.log('while รอบที่', count)
    if(count == 4){
        break
    }
    count++
}
// for รู้จำนวนรอบแน่นอน
for(i=1; i<=5; i++){
    if(i == 3) continue
    console.log('for รอบที่', i)
}
// do...while ลองทำก่อน 1 รอบ เช่น เช็ค connect
do{
    console.log('do...while รอบที่', count)
    count--
}
while(count >= 1)

// function กลุ่มคำสั่ง แบบธรรมดา แบบรับค่า(กำหนดค่า default ได้) แบบ return ค่า
function showHello(){
    alert('Hello จาก function showHello()')
}
function sumNumber(lastNum=50){
    let sumNum = 0
    for(i=1; i<=lastNum; i++){
        sumNum += i
    }
    return sumNum
}
function displaySum(){
    let inputVal = 100
    let sumVal = sumNumber(inputVal)
    console.log('ผลรวมของ 1 ถึง', inputVal, 'เท่ากับ', sumVal)
}

//Array
let emptyArray = new Array()
let list = ['Banana', 10, {price: 500}, ['Green', 'Yellow'],]
list[0] = 'Apple'
console.log(list)
console.log('จำนวนสมาชิก array :', list.length, 'ตัวแรกคือ :', list[0], 'ตัวสุดท้ายคือ :', list[list.length-1])
console.log('เรียง', list.sort())
console.log('เรียงย้อนกลับ', list.reverse())
list.sort()
/*
list.length       จำนวนสมาชิกใน array
list.push(i)      เพิ่มสมาชิกค่าตัวแปร i ต่อท้าย 
list.pop()        เอาสมาชิกท้ายออก
list.shift()      เอาสมาชิกตัวแรกออก
list.unshift(i)   แทรกค่าตัวแปร i ด้านหน้าตัวแรก
list.splice(start, deleteCount, item1, item2)
    start ตำแหน่งเริ่มต้นที่ต้องการตัด    deleteCount จำนวนที่ตัด
    item1 item2 ตัวที่ต้องการแทรก(ถ้ามี)
    list.splice(1,2)   เริ่มลบที่ตำแหน่ง 1 ลบ 2 ตัว
    list.splice(2,0,'Apple') จำนวนลบ = 0 แทรก Apple ในตำแหน่งที่ 2 
*/

// ใช้ forloop เข้าถึงสมาชิก array 
for(i=0; i<list.length; i++){
    console.log("forloop array ตัวที่", (i+1), 'คือ', list[i])
}

// ใช้ foreach เข้าถึงสมาชิก array
list.forEach(getmember);
function getmember(member){
    console.log('สมาชิก array', member)
}

// รวม Array
let arrayFruit = ['apple', 'banana']
let arrayVeget = ['potato', 'tomato']
let cart = arrayFruit.concat(arrayVeget)
console.log('รวม Array ผลไม้/ผัก ', cart)

// แปลง array เป็น string มีตัวคั่นระหว่างสมาชิก
let strArray = list.join(' | ')
console.log(strArray)

// JSON แปลง array เป็น string
text = JSON.stringify(list)
list = JSON.parse(text)
let list2 = list                             // list2 ชี้ไปที่ list    
list2[0] = 'Melon'                           // list ถูกเปลี่ยนไปด้วย
list3 = JSON.parse(JSON.stringify(list))     // การ clone ระดับลึก ถึง array, obj ด้านในอีกที (list3 เปลี่ยน list ไม่เปลี่ยน)
list3[0] = 'Apple'

//การเปรียบเทียบค่า array
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
console.log(arr1 === arr2);           // false เทียบค่า address ที่เก็บข้อมูล ซึ่งไม่ตรงกัน
console.log(arr1str === arr2str);     // true การเทียบค่าสมาชิก ใช้ JSON 

// Object ตัวแปรเดียวหลายค่า ซ้อน object / function ใน obj (method)
let userObj = {
    username:"arthur",
    password:"1234",
    email:"arthur@hotmail.com",
    score: {
        math: 80,
        science: 70,
    },
    getUser:function(){
        return this.username + " " + this.email
    },
}
console.log('ชื่อและอีเมล์', userObj.getUser(), 'คะแนนวิทยาศาสตร์', userObj.score.science)

// HTML DOM (Document Object Model) โครงสร้างต้นไม้ tag ภายใน คือ element
// เข้าถึง HTML element
let getbyTag = document.getElementsByTagName('button')
let getbyID = document.getElementById('title1')
let getbySelector = document.querySelector('#title1')
function changeText(){
    document.getElementById('title1').innerHTML = "<strong>เปลี่ยนข้อความเรียบร้อย</strong>"
    // เปลี่ยน style
    getbyID.style.backgroundColor="Black"
    // set Attribute
    getbyID.setAttribute('class','changeclass1 changeclass2')
}

// DOM Node
const textAll = document.querySelectorAll('p')
console.log(textAll[0], textAll[1].innerHTML)

// เพิ่ม/ลบ/แทนที่ Node ลูก(Child)
let childCount = 1
const menu = document.getElementById('menu')
function addItem(){
    const item = document.createElement('li')
    item.innerText = "Item " + (childCount)
    item.id = "item-" + (childCount++)
    menu.appendChild(item)
}
function removeItem(){
    if(menu.childElementCount <= 0)
    {
        alert('ไม่มี Item เหลืออยู่ใน menu')
    }else{
        let itemID = "item-" + (--childCount)
        const item = document.getElementById(itemID)
        menu.removeChild(item)
    }
}
function replaceItem(){
    const item = document.getElementById('item-1')
    const newItem = document.createElement('li')
    newItem.innerText = "Replace Item"
    newItem.id = 'item-1'
    menu.replaceChild(newItem,item)
}

// DOM CSS เพิ่ม/ลบ/สลับ(เปิด,ปิด) class
const css_box = document.getElementById('dom-css-box')
function addDarkmode(){
    css_box.classList.add('darkmode')
}
function removeDarkmode(){
    css_box.classList.remove('darkmode')
}
function switchMode(){
    css_box.classList.toggle('darkmode')

    // ตัวอย่างการใช้งาน เปรียบเทียบ
    if(css_box.classList.contains('darkmode')){
        css_box.style.color = "yellow"
    }else{
        css_box.style.color = "blue"
    }
}

// DOM Event ตัวอย่าง
function highlight(obj){
    obj.style.backgroundColor = "yellow"
}
function unhighlight(obj){
    obj.style.backgroundColor = "black"
}

// EventListener คล้าย DOM Event แต่เขียนใน JS ทั้งหมด สะดวกกว่าไปแทรกใน HTML
const menulan = document.getElementById('menu-lan')
menulan.addEventListener('change',getMenulan)

function getMenulan(){
    console.log(menulan.value)
}