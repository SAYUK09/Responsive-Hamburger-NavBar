    console.log("what the hell")
    const hamburger = document.getElementById('hamburger');
    const navUl = document.getElementById('nav-ul')
    console.log(hamburger)
    
    hamburger.addEventListener('click',()=>{
        navUl.classList.toggle('show')
    })


