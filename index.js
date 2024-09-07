// Promise
// fulfilled resolve
// reject
// pending

// AJAX 
// function getData(url) {
//     const xml = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         try {
//             xml.addEventListener("readystatechange", () => {
//                 if (xml.readyState === 4 && xml.status == 200) {
//                     resolve(JSON.parse(xml.responseText))
//                 }
//             })
//         } catch (err) {
//             reject(err)
//         }
//         xml.open("GET", url)
//         xml.send()
//     })
// }

// getData("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//         let box = document.getElementById("box")
//         res.forEach((item) => {
//             if (item.title.includes("est")) {
//                 box.innerHTML += item.title + "<br>"

//             }
//         })

//     })
//     .catch((err) => console.log(err))


// CRUD
// create
// read
// update
// delete

// FETCH
// GET
// function getData(url) {
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//            let result = data.find((item) => item.id == 11)
//             console.log(result);
//         })
//         .catch((err) => console.log(err))
// }
// getData("https://jsonplaceholder.typicode.com/posts")

// Post
// CRUD - Create
// function getData(url) {
//     let data = {
//         "title": "HamburgIT",
//         "price": "99999",
//         "time": "12:00",
//         "name": "Mehman",
//         "surname": "Aliyev",
//         "age": 35
//     }
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }
// getData("https://655f2b37879575426b44b8f7.mockapi.io/productss")

// UPDATE
// function getData(url, id) {
//     let data = {
//         "title": "HamburgIT",
//         "name": "Mehman",
//         "id": id,
//         "surname": "Shamilov",
//         "age": 35
//     }
//     fetch(url, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }
// getData("https://655f2b37879575426b44b8f7.mockapi.io/productss",8)

// DELETE
// function dataDelete(url,id) {
//     fetch(url + "/" + id, {
//         method: "DELETE",
//     })
// }

// dataDelete("https://655f2b37879575426b44b8f7.mockapi.io/productss", 8)

// axios get
// const getData = (url) => {
//     axios.get(url)
//     .then((res) => console.log(res.data))
// }
// getData("https://655f2b37879575426b44b8f7.mockapi.io/productss")

// const postData = (url, data) => {
//     axios.patch(url, {name:"ALI"})
// }
// const postData = (url, data) => {
//     axios.post(url, data)
// }
// let data = {
//     name: "Nermin",
//     surname: "Serifova",
//     color: "green"
// }
// postData("https://655f2b37879575426b44b8f7.mockapi.io/productss", data)

// Delete
// const deleteFunc = (id) =>{
//     axios.delete(`https://655f2b37879575426b44b8f7.mockapi.io/productss/${id}`)
// }
// deleteFunc(2)



