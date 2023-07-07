function toggleList() {
    var list = document.getElementById("myList");
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
    } else {
        list.style.maxHeight = list.scrollHeight + "px";
    }
}

let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        span.classList.add("com");
    }
    else {
        span.classList.remove("com");
    }
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function searchProduct() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var products = document.getElementsByClassName("product");
    var notFoundMessage = document.getElementById("notFoundMessage");
    var foundMatch = false;

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].querySelector("h3").textContent.toLowerCase();
        var productDiv = products[i];

        if (productName.includes(searchInput)) {
            productDiv.style.display = "flex";
            foundMatch = true;
        } else {
            productDiv.style.display = "none";
        }
    }

    if (foundMatch) {
        notFoundMessage.style.display = "none";
    } else {
        notFoundMessage.style.display = "flex";
    }
}

document.getElementById("popupButton").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
