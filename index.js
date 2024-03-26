

gsap.to(".time", {
  translateX: "-105%",
  ease: "none",
  scrollTrigger: {
    trigger: ".timeline",
    pin: true,
    scrub: 1,
    end: "+=" + (window.innerHeight * 10)
  }
});


let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

    