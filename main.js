// let xhttp = new XMLHttpRequest();


// xhttp.onreadystatechange = function(){
//     if(this.readyState==4 && this.status==200){
//         myfunc(this.responseText)
//     }
// }
// xhttp.open('GET', 'https://www.automarine.ru/')
// xhttp.send()
// function myfunc(data){
//     console.log(data);
// }

// fetch('http://127.0.0.1:5500/')
// .then(data => {
//     console.log(data);
// })

// fetch("http://127.0.0.1:5500/")
// .then(data => {
//     console.log(data);
//     console.log(data.text());
// })

// fetch("http://127.0.0.1:5500/")
// .then(data => {
//     console.log(data);
//     data.text().then(data2 => {
//         console.log(data2);
//     })
// })

// fetch("http://127.0.0.1:5500/")
// .then(data => {
//     console.log(data);
//     return data.text()
// })
// .then(data => {
//     console.log(data);
// })

// fetch("http://127.0.0.1:5500/")
// .then(data => data.text())
// .then(data =>{
//     console.log(data);
// })

// let a=new Promise((resolve, reject) => {
//     fetch("http://127.0.0.1:5500/")
//     .then(data =>{
//         resolve(data.text())
//     })
// })

let a=new Promise ((resolve, reject) =>{
    fetch("http://127.0.0.1:5500/")
    .then(data =>{
        resolve(data.text())
    })
})
a.then(data =>{
    console.log(data);
})

let b=new Promise ((resolve, reject) =>{
    fetch("http://127.0.0.1:5500/")
    .then(data =>{
        resolve(data.text())
    })
})
b.then(data =>{
    console.log(data);
})

Promise.all([a,b]).then(data=>{
    console.log(data);
})