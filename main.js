const links=document.querySelectorAll('.side_links')
function openSlideMenu(){
    document.getElementById('side-menu').style.width ='200px';
    for(const link of links){
        link.style.display ='block';
    }
}

function closeSlideMenu(){
    for(const link of links){
        link.style.display ='none';
    }
    document.getElementById('side-menu').style.width ='0px';
}

for(const link of links){
    link.addEventListener('click',()=>{
        closeSlideMenu();
    })
}

AOS.init();

var typed = new Typed('.job', {
    strings: ["Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer","Video Editor", "3D VFX Artist", "Freelancer"],
    typeSpeed: 60,
    backSpeed:60,
    loop:true
  });