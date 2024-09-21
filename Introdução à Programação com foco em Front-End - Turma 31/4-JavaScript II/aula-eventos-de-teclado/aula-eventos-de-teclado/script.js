const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

const linkPerfilDados = document.getElementById('link-perfil-dados')


 document.addEventListener('keyup', (e) =>{
  if (navPerfil.style.display == 'block'){
    if(e.code == 'Digit1'){
      linkPerfilDados.click()
    }
  }else if (e.code == 'Digit1'){
    navPerfil.style.display = 'block'
   }if (navPerfil.style.display = 'block'){
    if (e.code == 'Escape'){
      navPerfil.style.display ='none'
    } 
  
   }
 } )

 //document.addEventListener('keyup', (e) =>{
  //console.log(e.key)
  //console.log(e.code)//verificar qual tecla 
  //if(e.code == 'Digit1'){
    //console.log("abrindo o menu de perfil")
   // navPerfil.style.display = "block"
   // }
 // if(e.code == 'Escape'){
  //  navPerfil.style.display = "none"
 // }

//})
