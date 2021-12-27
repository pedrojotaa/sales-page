document.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
})

function updatePost(){
    fetch('http://localhost:3000/api/all')
        .then(res => {
            return res.json()
        }).then(json => {

            let postElements = ''
             
            let posts = JSON.parse(json)

            posts.forEach((post) => {

                let postElement = `<div class="container-products" id="${post.icon + idProduct()}">
                                        <img src="./img/${post.icon}.jpg" alt="${post.icon}" class="cap skeleton">
                                        <p class="desc">${post.title}</p>
                                        <p class="old-price">R$${post.oldprice}</p>
                                        <p class="price">R$${post.price}</p>
                                    </div>`
                postElements += postElement
            })
            let mural = document.querySelector('.carousel')
            mural.innerHTML = postElements
        })
}

function idProduct(){
    return Math.random().toString(36).substr(2, 9)
}

let carousel = document.querySelector('.carousel')

function rightbtn(){
    carousel.scrollLeft += carousel.offsetWidth
}

function leftbtn(){
    carousel.scrollLeft -= carousel.offsetWidth
}