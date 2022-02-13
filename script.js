fetch("https://cataas.com/api/cats")
    .then(data => data.json())
    .then(cats => load(cats));

function load(cats) {
    var catlist = document.createElement("div");
    catlist.className = "container"
    catlist.id = "catlist"
    cats.forEach((cat) => {
        var a = document.createElement('div');
        a.innerHTML = `
    <img src="https://cataas.com/cat/${cat.id}" style="height:100px;width:100px;object-fit:cover"></img><br><br>
    <div style="text-align:left;color:gray">Created on:${new Date(cat.created_at).toDateString()}</div>
               <div style="text-align:left;color:gray">Tags:${cat.tags}</div>
            
    `
        catlist.append(a);
    })
    document.body.append(catlist);
}

function search() {
    document.querySelector("#catlist").remove();
    const s = document.querySelector(".x").value;
    console.log("searching");

    fetch(`https://cataas.com/api/cats?tags=${s}`, {
            method: "GET"
        })
        .then(data => data.json())
        .then(users => load(users));

    function load(users) {
        var catlist = document.createElement("div");
        catlist.className = "container"
        catlist.id = "catlist"
        users.forEach((cat) => {
            var a = document.createElement("div");
            a.id = 'cat';
            a.innerHTML = `
            <div class="popup" onclick="myFunction()"><input type="image" class="popup" id="img" src="https://cataas.com/cat/${cat.id}"> 
            <span class="popuptext" id="myPopup"><img src="https://cataas.com/cat/${cat.id}" style="width:150px;height:150px;border-radius:50%"></span><div>
            <div>
               <div>Created on:${new Date(cat.created_at).toDateString()}</div>
               <div>Tags:${cat.tags}</div>
            </div>`


            console.log(a);
            catlist.append(a);
        })
        document.body.append(catlist);
    }

}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.id = "f";
    popup.classList.toggle("show");
}

