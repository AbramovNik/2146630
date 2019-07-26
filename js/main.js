


window.onload = function () {
    var btn = document.getElementById("button");
    btn.addEventListener("click", addComment);

    function addComment() {
        var feedback = document.createElement("div");
        var text = document.getElementById("comment").value;
        feedback.className = "feedback";
        feedback.innerHTML = text;
        if (text == "") {
            alert("Введите сообщение");
        } else {
            var parentElem = document.getElementById("feedback-wrapp");
            parentElem.appendChild(feedback);
        }
    }
}