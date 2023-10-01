var url = "http://localhost:3000/comments"
var View_Book = document.getElementById("View_Book")
GetUrl();
async function GetUrl() {
    try {
        const reposire = await fetch(url)
        if (!reposire.ok) {
            throw new Error("ConSole.lo")
        }
        const arrayreposie = await reposire.json()
        await draw(arrayreposie)

    } catch (error) {
        console.log(error)
    }
}
async function draw(reposies) {
    try {
        const commentHtml = await reposies.map(comments => {
            return `
            <div id = tag_${comments.id}>
            <h1 class = text_${comments.id}>${comments.TiTleName}</h1>
            <p class = htmlelement_${comments.id}>${comments.Titlebody}</p>
            <button class = btn_${comments.id} onclick = Delete(${comments.id})>Delete</button>
            <button onclick = "Setting(${comments.id})">Chinh Sua</button>

            </div>  
            `
        }).join("")
        View_Book.innerHTML = commentHtml
    } catch (error) {
        console.log(error)
    }
}

async function CreateApi() {
    var TiTleNames = document.getElementById("MyName").value
    var Titlebodys = document.getElementById("Text").value
    const fetchMethod = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer-when-downgrade",
        body: JSON.stringify({
            TiTleName: TiTleNames,
            Titlebody: Titlebodys
        })
    }
    try {
        const reposire = await fetch("http://localhost:3000/comments", fetchMethod);
        if (!reposire.ok) {
            throw new Error("fetch url Error")
        }
        const responseJson = await reposire.json();
        console.log(responseJson);

    } catch (error) {
        console.log("Lỗi CreateApi:", error);
    }
}



async function Delete(id) {
    const methodDelete = {
        method: "DELETE",

    }

    await fetch(`${url}/${id}`, methodDelete)

}

async function Setting(id) {
    let ViewOpption = document.getElementById(`tag_${id}`)
    let Textheader = ViewOpption.getElementsByClassName(`text_${id}`)[0].innerHTML
    let htmlelement = ViewOpption.getElementsByClassName(`htmlelement_${id}`)[0].innerHTML
    console.log(ViewOpption, Textheader)
    ViewOpption.innerHTML = `
       <div id = tag_${id}>
            <h1 class = text_${id}>${Textheader}</h1>
            <p class = htmlelement_${id}>${htmlelement}</p>
            <select id = option_${id}>
            <option>Tieeu DE</option >  
            <option>Noi Dung</option >    
            </select>
            <input id = ${id}></input  >
            <button onclick = "SaveContent(${id})">SaveContent</button>
            </div>  
           
    `

}
async function SaveContent(id) {
    let Content = await document.getElementById(`${id}`).value
    let option = await document.getElementById(`option_${id}`).value;
    let ViewOpption = document.getElementById(`tag_${id}`)

    if (option == 'Tieeu DE') {
        let htmlelement = ViewOpption.getElementsByClassName(`htmlelement_${id}`)[0].innerHTML
        const methodPust = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                TiTleName: Content,
                Titlebody: htmlelement
            })
        }
        await fetch(`${url}/${id}`, methodPust)

    } else if (option == 'Noi Dung') {
        let Text = ViewOpption.getElementsByClassName(`text_${id}`)[0].innerHTML
        const methodPust = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                TiTleName: Text,
                Titlebody: Content
            })
        }
        await fetch(`${url}/${id}`, methodPust)
    }

}



