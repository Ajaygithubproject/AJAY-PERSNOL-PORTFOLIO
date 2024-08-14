// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typeing effect
//let typed = new Typed('',{
  //  Strings: ['Web Developer'],
  //  typespeed:100,
   // backspeed:100,
   // backDelay:2000,
    //loop:true,

//})
//active link
let navlinks = document.querySelectorAll('nav ul li a')
//get all selection
let sections = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrolpos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrolpos > section.offsetTop && scrolpos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    }) ;
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzbj5sZkfyI0L442zc9iSpG0JHmCAFqJmZIeFm8BdvatoGE8ce-_7pEpa4pSV-QAMFB/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
