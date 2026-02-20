function checkPassword() {
    var password = document.getElementById("passwordInput").value;

    if(password === "Lobb Lobb") {
        document.getElementById("password-page").style.display = "none";
        document.getElementById("main-page").style.display = "block";

        document.getElementById("bgMusic").play();

        startTypewriter();
    } else {
        alert("Wrong password, Honey 🤍");
    }
}

const birthdayText = `The world doesn’t often create someone this gentle.

But on this day…
it created you.

Sumaiya, you are not just another birthday.
You are warmth in human form.
You are comfort in conversations.
You are that rare kind of soul
who cares for others so naturally
that people feel safe around you.

The random meet up of the 3rd February
was supposed to be ordinary.

Yet somehow,
it became one of my most memorable days.

Maybe it was destiny being subtle.
Maybe it was just your smile.

I don’t know what this year holds for you.
But I hope it holds moments that make you laugh loudly,
dream boldly,
and feel deeply loved.

And if life is kind to me,
maybe I get to stay close enough
to witness that beautiful smile more often. 🤍`;

let i = 0;

function startTypewriter() {
    if (i < birthdayText.length) {
        document.getElementById("typewriter").innerHTML += birthdayText.charAt(i);
        i++;
        setTimeout(startTypewriter, 35);
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
    }
}

function goNext() {
    window.location.href = "page2.html";
}

/* PAGE 2 TYPEWRITER */

const memoryText = `Some people come into life loudly.

You came quietly…
and still managed to change something.

Your care for others is not loud.
It’s soft.
Real.
Rare.

And that is exactly what makes you unforgettable.

No matter where life takes us,
the 3rd of February
will always remain special to me.

Because that’s the day
an ordinary moment turned extraordinary.
And this is what I also loved about you, 
How you makes ordinary moments into unforgatable memories 🤍`;

let j = 0;

function startTypewriter2() {
    if (document.getElementById("typewriter2")) {
        if (j < memoryText.length) {
            document.getElementById("typewriter2").innerHTML += memoryText.charAt(j);
            j++;
            setTimeout(startTypewriter2, 35);
        }
    }
}

if (document.getElementById("typewriter2")) {
    startTypewriter2();
    createHearts();
}

/* HEARTS ANIMATION */

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