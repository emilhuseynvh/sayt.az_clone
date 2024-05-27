const hamburgerMenu = document.querySelector('#hamburger-menu')
const statikCommon = document.querySelector('#statik-common')
const commonCommon = document.querySelector('#common-common')
const seoCommon = document.querySelector('#seo-common')
const additionCommon = document.querySelector('#addition-common')
const ecommerceCommon = document.querySelector('#ecommerce-common')
const logoCommon = document.querySelector('#logo-common')

function ham(x){
    x ? hamburgerMenu.classList.remove('translate-x-[300%]') : hamburgerMenu.classList.add('translate-x-[300%]')
}
let product = [
    [
        {
            id: 1,
            name: 'Bloq',
            price: 200

        },
        {
            id: 2,
            name: 'Responsive',
            price: 100

        },
        {
            id: 3,
            name: 'Mesajlaşma',
            price: 50

        },
        {
            id: 4,
            name: 'Qalereya',
            price: 100

        },
        {
            id: 5,
            name: 'Saytda Axtarış',
            price: 100

        },
        {
            id: 6,
            name: 'Rezervasyon',
            price: 400

        },
        {
            id: 7,
            name: 'Analitika / İzləmə',
            price: 50

        },
        {
            id: 8,
            name: 'Üzv girişi /‍‍‍ Profillər',
            price: 400

        },
        {
            id: 9,
            name: 'Forum',
            price: 400

        },
        {
            id: 10,
            name: 'Canlı Söhbət',
            price: 50

        },
        {
            id: 11,
            name: 'Əlaqə Forması',
            price: 100

        },
        {
            id: 12,
            name: 'Xəritə Məlumatı / Geolocation',
            price: 100

        },
        {
            id: 13,
            name: 'Sosial Media inteqrasiyası',
            price: 50

        },
        {
            id: 14,
            name: 'Admin Panel',
            price: 300

        },
    ],
    [
        {
            id:1,
            name: 'Başlıqlar & Meta',
            price: 200
        },
        {
            id:2,
            name: 'Açar söz',
            price: 300
        },
        {
            id:3,
            name: '+20 Qabaqcıl Texnika',
            price: 300
        },
        {
            id:4,
            name: 'Başlıq Teqləri',
            price: 100
        },
        {
            id: 5,
            name: 'Sitemap',
            price: 100
        },
    ],
    [
        {
            id: 1,
            name: 'Ödəniş',
            price: 200
        },
        {
            id: 2,
            name: 'Səbət',
            price: 500
        },
        {
            id: 3,
            name: 'Məhsullar',
            price: 300
        },
        {
            id: 4,
            name: 'Bəyəndiklərim',
            price: 300
        },
        {
            id: 5,
            name: 'Filtr',
            price: 300
        },
        {
            id: 6,
            name: 'Məhsul Haqqında',
            price: 200
        },
    ]
]

// FETCH
let DATA = []
fetch('https://raw.githubusercontent.com/emilhuseynvh/sayt.az_data/main/script.json')
res => res.json()
data=> DATA.push(data)

// Checkbox
let count = 0;
const statik = document.querySelector('#statik')
let sum = 0
let secOne = []
let secTwo = []
const xercThree = document.querySelector('#xerc-three')
const electronElementLi = document.querySelectorAll('#electron-element li div div')
let secThree = []
let sumElectron = 0
let statikLast = 0
function checkbox(r, nm){
    statik.innerHTML = ''
    const checkboxAfter = document.querySelectorAll('#checkbox-after')
    const checkboxElement = document.querySelectorAll('#checkbox-element')
    checkboxAfter[r].classList.toggle('left-0.5')
    checkboxAfter[r].classList.toggle('right-0.5')
    checkboxElement[r].classList.toggle('bgg')
    count++
        
       if(r < 14) { checkboxAfter[r].classList.contains('right-0.5') ?  secOne.push(product[0][r].price) : secOne.push(-product[0][r].price);
            statikLast -= -secOne[secOne.length -1]
            statik.innerHTML = ' ₼ ' + statikLast
            additionCommon.innerHTML = ' ₼ ' + statikLast
            calc()
        }
         else   if(r >= 14) {
                xercThree.innerHTML = ''      
                electronElementLi[r - 14].classList.contains('right-0.5') ?  sumElectron -= -product[2][r - 14].price : sumElectron += -product[2][r - 14].price
                xercThree.innerHTML = ' ₼ ' + sumElectron
                ecommerceCommon.innerHTML = ' ₼ ' + sumElectron 
                calc()
            }
            
        }
const xercFirst = document.getElementById('xerc-first')
const pageInput = document.getElementById('page-input')
const designInput = document.getElementById('design-input')
let pageLast = 0
function page(){
     pageLast = pageInput.value + ' səhifə' + ' / ' + '₼ ' + (pageInput.value *100 * designInput.value)
     xercFirst.innerHTML = pageLast
     statikCommon.innerHTML = ' ₼ ' + pageInput.value *100 * designInput.value
     calc()
}
const xercSec = document.querySelector('#xerc-sec')
const checkSec = document.querySelectorAll('#xercc li')
let sumSearch = 0
function checkFunc(f){
    xercSec.innerHTML = ''
    checkSec[f].classList.toggle('example')
    checkSec[f].classList.contains('example') ?  secTwo.push(product[1][f].price) : secTwo.push(-product[1][f].price)
    sumSearch -= -secTwo[secTwo.length -1]
    xercSec.innerHTML =  ' ₼ ' + sumSearch
    seoCommon.innerHTML =  ' ₼ ' + sumSearch
    calc()
    

}
const logoInput = document.querySelector('#logo-input')
const ramazan = document.querySelector('#ramazan')
let sumLogo = ''
function logo(){
    sumLogo = logoInput.value * 100 
    ramazan.innerHTML =  ' ₼ ' +  sumLogo
    logoCommon.innerHTML =  ' ₼ ' +   sumLogo
    calc()
}
let son = 0
function calc() {
    commonCommon.innerHTML = ''
    if(((sumLogo - -sumElectron - -sumSearch - -(pageInput.value *100 * designInput.value) - -statikLast)) > 450)  son = (sumLogo - -sumElectron - -sumSearch - -(pageInput.value *100 * designInput.value) - -statikLast)
    else son = 450
    commonCommon.innerHTML = ' ₼ ' + son
}




