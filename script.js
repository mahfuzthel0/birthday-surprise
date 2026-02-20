function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    
    if(password === "Lobb Lobb") {
        document.getElementById("password-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";
        startTypewriter();
        createHearts();
    } else {
        alert("Wrong password, Honey 🤍");
    }
}

const text = `The random meet up of the 3rd February...
Yet somehow, it became one of the most memorable days.

I still don’t know how such a simple moment turned into something so special.
Maybe it was your smile.
Maybe it was your presence.
Or maybe… it was just you.

You have this rare way of caring for others —
so naturally, so purely —
that the world feels softer around you.

You may not notice it,
but your kindness leaves marks on hearts.

If today feels brighter,
it’s because you exist in it.

And honestly…
I’m just grateful that I got to meet you. 🤍`;

let i = 0;

function startTypewriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(startTypewriter, 40);
    }
}

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}