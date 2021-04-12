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






// ตัวแปร var let const(obj แก้ข้อมูลด้านในได้)
var variable_value              //ไม่กำหนดค่า จะเป็น undefined
let let_value                   //ค่าที่กำหนดใน function จะไม่ส่งผลต่อตัวแปรด้านนอก block scope
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

// Arrow function
displaysum = () => {
    let inputVal = 100
    let sumVal = sumNumber(inputVal)
    console.log('ผลรวมของ 1 ถึง', inputVal, 'เท่ากับ', sumVal)
}

// Rest Operator (array)
const addUser=(name,... city)=>{
    return name + " " + city
}
console.log(addUser("Name","Bangkok","Rayong"));






//Array
let emptyArray = new Array()
let users = [ 
    {name: "Eve", age: 24}, 
    {name: "Adam", age: 48}, 
    {name: "Chris", age: 18}, 
    {name: "Danny", age: 30},
 ]
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

// Forloop เข้าถึงสมาชิก array 
for(i=0; i<list.length; i++){
    console.log("forloop array ตัวที่", (i+1), 'คือ', list[i])
}

// ForEach นำสมาชิกแต่ละตัวมาผ่าน function
// array.forEach(function)
list.forEach((member) => {
    console.log("foreach " + member)   
});

// Map คล้าย foreach แต่ return ค่าได้เป็น array
const mapresult = list.map((member) => {
    return "Map " + member
})
console.log(mapresult)

// Filter ใช้คัดกรองสมาชิกที่ตรงเงื่อนไข ค่าได้เป็น array
 const filterresult = users.filter((user) => {
   return user.age > 25
 })
 console.log("Filter ", filterresult)

// Find คล้าย filter แต่เฉพาะตัวแรกที่ตรงเงื่อนไข ค่าได้เป็น array
const findresult = users.find((user) => {
    return user.age > 25
})
console.log("Find ", findresult);

// Every & Some ตรวจเงื่อนไขทุกตัวเชื่อมด้วย && หรือ || แล้ว return true false
const everyresult = users.every((user) => {
    return user.age > 25
})
const someresult = users.some((user) => {
    return user.age > 25 
})
console.log("Every( && )", everyresult, "Some( || )", someresult);

// Reduce (ค่าสะสม,ค่าปัจจุบัน) มาเข้า function
// ตัวอย่าง ค่าเริ่มคือ 0 และ function รวมอายุ array.reduce((ค่าสะสม,ค่าปัจจุบัน))
const reduceresult = users.reduce((sum,user) => {
    return sum + user.age
},0)
console.log("Reduce", reduceresult);

// ตัวอย่างการใช้งานร่วมกัน
let numbers = [20, 30, 40, 60]
const result = numbers
    .filter((number) => number > 30)
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number)
console.log("Filter + Map + Reduce", result)

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
list3 = JSON.parse(JSON.stringify(list))     // การ clone(copy) ระดับลึก ถึง array, obj ด้านในอีกที (list3 เปลี่ยน list ไม่เปลี่ยน)
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

// Class (ประเภทข้อมูล) สร้างแม่แบบเพื่อไปสร้าง Object หลาย ๆ ตัว
// การใช้งาน เช่น Class วงกลม constructor(r) Method สำหรับคำนวณพื้นที่ เส้นรอบวง
class User {

    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
    }
    getFullname(){
        return this.name + " " + this.lastname
    }
}
let user1 = new User("Arthur","Convin")
console.log(user1.getFullname())

// Inheritance สืบทอดคุณสมบัติ จาก class อื่น (ต้องกำหนด constructor ของตัวเองถ้ามีการเพิ่ม Property เข้ามา)
class Admin extends User {
    
    constructor(name,lastname,permission){
        super(name,lastname)
        this.permission = permission
    }
    Introduce(){
        let msg = this.getFullname() + " " + this.permission
        console.log(msg)
    }
}
let admin1 = new Admin("Admin1","Front-end","Can edit content")
admin1.Introduce()






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