var data = [
    { id: 1, title: "card title1", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores!" },
    { id: 2, title: "card title2", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores!" },
    { id: 3, title: "card title3", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores!" },
    { id: 4, title: "card title4", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores!" },
    { id: 5, title: "card title5", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores!" }
]

window.onload = function () {
    var cf = document.createElement("div");
    cf.classList.add("container");
    var row = document.createElement("div");
    row.classList.add("row");
    document.body.prepend(cf);
    var btn1 = document.createElement("button")
    btn1.className = "p-3 rounded-circle mx-1 blue col-auto mt-5"
    btn1.setAttribute("onclick", "blueBtn()")
    var btn2 = document.createElement("button")
    btn2.className = "p-3 rounded-circle mx-1 yellow col-auto mt-5"
    btn2.setAttribute("onclick", "yellowBtn()")

    cf.append(btn1, btn2, row)

    for (let i = 0; i < data.length; i++) {
        document.getElementsByClassName("row")[0].innerHTML += `
             <div class="col-md-4" id="card-${i + 1}">
            <div class="card card-body rounded-3 blue-bg mt-3">
                <h5 class="text-white">
                    ${data[i].title}
                </h5>
                <div class="row align-items-center">
                    <p class="text-white col-8">
                    ${data[i].desc}
                    </p>
                    <button id="btn-${i + 1}" class="btn-danger btn col-auto p-2 mb-4" onclick="deleteCard(this)">delete</button>
                </div>
            </div>
        </div>`
    }

    //solution 1
    //onclick="document.getElementById('card-${i + 1}').remove();"

    //solution 2
    // var buttons = row.querySelectorAll("button");
    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', function (e) {
    //         var cardIndex = e.target.id.substring(4);
    //         document.getElementById("card-" + cardIndex).remove();
    //     })
    // }
}

//solution 3
function deleteCard(e) {
    debugger
    console.log("hello")
    // var cardIndex = e.target.id.substring(4);
    //  document.getElementById("card-" + cardIndex).remove();
    e.parentElement.closest(".col-md-4").remove();
}

function yellowBtn() {
    var foundColor = document.querySelectorAll(".blue-bg");
    for (let i = 0; i < foundColor.length; i++) {
        foundColor[i].classList.add("yellow-bg");
        foundColor[i].classList.remove("blue-bg");
    }
}
function blueBtn() {
    var foundColor = document.querySelectorAll(".yellow-bg");
    for (let i = 0; i < foundColor.length; i++) {
        foundColor[i].classList.add("blue-bg");
        foundColor[i].classList.remove("yellow-bg");
    }
}