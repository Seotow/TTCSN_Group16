const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listItems = $$('.list-item')
for(const item of listItems){
    item.onclick = () => {
        $('.list-item.active').classList.remove('active')
        item.classList.add('active')
    }

}

// const toggle = $('.toggle')
// const navigation = $('.navigation')
// const main = $('.main')

// toggle.onclick = () => {
//     navigation.classList.toggle('active')
//     main.classList.toggle('active')
// }
