function testFunc() {
    const slider = document.getElementById('ex2').value.split(",");
    var keywords = [];
  
    if ($(collapsible).attr("aria-expanded") === 'true') {
        keywords = [
            document.getElementById("new-dm").value,
            document.getElementById("rpg-pillar").value,
            document.getElementById("villain").value,
            document.getElementById("theme").value,
            document.getElementById("adv-subtype").value,
            document.getElementById("world-scale").value,
            document.getElementById("plane-world").value,
            document.getElementById("book-type").value,
            document.getElementById("mechanic").value
        ];
    }
  
    const inputs = {
        'min-player-level': parseInt(slider[0]),
        'max-player-level': parseInt(slider[1]),
        'adventure-type': document.getElementById("adv-type").value,
        'dm-difficulty': document.getElementById("dm-diff").value,
        'player-difficulty': document.getElementById("player-diff").value,
        'location': document.getElementById("location").value,
        'published-year': parseInt(document.getElementById("year").value),
        'keywords': keywords
    }

    console.log(inputs);
    let inputsString = JSON.stringify(inputs);
    console.log(inputsString);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log(xhr.responseText);
        }
    }
    xhr.open("POST", "http://127.0.0.1:3000/");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(inputsString);
}