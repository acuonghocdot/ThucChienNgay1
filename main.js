var url = "http://localhost:3000/comments"

var arrayTitle = new Array()
var Url1;
async function GetUrl() {
    try {
        const reporise = await fetch(url);
        if (!reporise.ok) {
            throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }
        const Value = await reporise.json();
        Value.map(TiTle => {
            if (url + '/ ' + TiTle.id == Url1) {
                console.log("A")
            } else {

                arrayTitle.push(`
                    <div id = id_${TiTle.id}>
                        <h1 id= "TextName">${TiTle.TiTleName}</h1>
                        <p id ="TextContent">${TiTle.Titlebody}</p>
                        <button onclick = Delete(${TiTle.id})>DeleTe</button>
                        <button onclick = ListenApi(${TiTle.id})>Edit</button>

                    </div>
               `)
            }
        })
        tExtContent(arrayTitle)
    }
    catch (error) {
        console.error("Lỗi:", error);
    }
}
GetUrl()

async function CreateApi() {
    const TiTleName = await document.getElementById("MyName").value
    const Titlebody = await document.getElementById("Text").value
    const CreateName = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify({
            TiTleName: TiTleName,
            Titlebody: Titlebody,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}

async function Delete(id) {
    console.log(url + '/' + id)
    const putMethod = {
        method: 'DELETE',
    }
    fetch(url + '/' + id, putMethod)
        .then(reposie => {
            reposie.json()
        })


}

async function ListenApi(id) {
    var divMap = document.getElementById(`id_${id}`)
    var TextName = divMap.getElementsByTagName("h1")[0].textContent;
    var TextBody = divMap.getElementsByTagName("p")[0].textContent;
    console.log(typeof TextName, typeof TextBody)
    divMap.innerHTML = `
            <h1 id= "TextName">${TextName}</h1>
            <p id ="TextContent">${TextBody}</p>
            <select  id ="Opption_${id}">
                <option>TextName</option>
                <option>TextBody</option>
            </select>
            <input id ="Text_${id}" type="text">
            <button onclick="LisTenControl(${id})">Save</button>
         `
}
async function LisTenControl(id) {
    var ValueInput = document.getElementById(`Opption_${id}`).value // Get Opption Value
    var TextInput = document.getElementById(`Text_${id}`).value // Get Value Input
    var divMap = document.getElementById(`id_${id}`) // Get Div id
    if (ValueInput == "TextName") {
        var TextName = divMap.getElementsByTagName("h1")[0].textContent; // Get TextName
        var TextBody = divMap.getElementsByTagName("p")[0].textContent; // GetTextBody
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                TiTleName: TextInput,
                Titlebody: TextBody,
            }),
        };
        fetch(url + '/' + id, requestOptions)

    } else if (ValueInput == "TextBody") {
        var TextName = divMap.getElementsByTagName("h1")[0].textContent; // Get TextName
        console.log(TextName)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                TiTleName: TextName,
                Titlebody: TextInput,
            }),

        };
        console.log(TextName, TextInput)
        fetch(url + '/' + id, requestOptions)
    }

}

function tExtContent(TiTle) {
    var Text = document.getElementById("View_Book")
    Text.innerHTML = TiTle.join("")

}
