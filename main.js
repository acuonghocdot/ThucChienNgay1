var url = "http://localhost:3000/comments"

var arrayTitle = new Array()

async function GetUrl() {
    try {
        const reporise = await fetch(url);
        if (!reporise.ok) {
            throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
        }
        const Value = await reporise.json();
        Value.map(TiTle => {
            arrayTitle.push(`
               
                <h1>${TiTle.body}</h1>
                <p>${TiTle.postId}</p>
                <button onclick = Delete(${TiTle.id})>DeleTe</button>
            `)
        })
        tExtContent(arrayTitle)
    }
    catch (error) {
        console.error("Lỗi:", error);
    }
}
GetUrl()

async function CreateApi() {
    const Titlebody = await document.getElementById("MyName").value
    const TiTlepostId = await document.getElementById("Text").value
    const CreateName = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify({
            body: Titlebody,
            postId: TiTlepostId,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    await CreateName.json();
    GetAPi();
}

async function Delete(id) {

    const putMethod = {
        method: 'DELETE', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        // body: JSON.stringify(url) // We send data in JSON format
    }
    fetch(url + '/' + id, putMethod)
        .then(reposie => {
            reposie.json()
        })
        .then(GetUrl())

}

function tExtContent(TiTle) {
    var Text = document.getElementById("View_Book")
    Text.innerHTML = TiTle.join("")

}

