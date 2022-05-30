let modalForm;

/* 111 Мобильное меню */
let hamburger = document.querySelector('.hamburger');
let mobMenu = document.querySelector('.mob-menu');
let mobMenuClose = document.querySelector('.mob-menu__close')

if (hamburger && mobMenu && mobMenuClose){
    hamburger.onclick = function(){
        mobMenu.classList.add('open');
    }

    mobMenuClose.onclick = function(){
        mobMenu.classList.remove('open');
    }

    let mobMenuLinks = document.querySelectorAll('.mob-l-list__link');


    mobMenuLinks.forEach( (link) => {

        link.onclick = function(){
            mobMenuClose.click();
        }
    })

    
    window.addEventListener('resize', function(event){
        let contentWidth = document.documentElement.clientWidth;

        if ( contentWidth > 1024 ){
            mobMenuClose.click();
        }
    })

}





/* /Мобильное меню */



/*  222  Модальные окна*/

let options = {
    //zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    //displayFog: 'block', //Значение по умолчанию flex
    //displayModal: 'flex', //Значение по умолчанию block
    showModalAnimationName: 'fadeInBottom', 
    closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['modal__close'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeIn',
    closeFogAnimationName: 'fadeOut',
    showFogAnimationDuration: 300,
    closeFogAnimationDuration: 300,

    documentScrolled: false, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}

let flexModal = {
    //zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    //displayFog: 'block', //Значение по умолчанию flex
    displayModal: 'flex', //Значение по умолчанию block
    showModalAnimationName: 'fadeInBottom', 
    closeModalAnimationName: 'fadeOutTop', 
    closeClasses: ['modal__close'], 
    //closeModalOnFogClick: false, 
    showModalAnimationDuration: 800,
    //closeModalAnimationDuration: 300,
    showFogAnimationName: 'fadeIn',
    closeFogAnimationName: 'fadeOut',
    showFogAnimationDuration: 300,
    closeFogAnimationDuration: 300,

    documentScrolled: false, 
    //onModalClose: function(){console.log('modal close');},
    //onModalOpen: function(){console.log('modal open');}

}

let btnCallsModal = document.querySelectorAll('.call-modal')


btnCallsModal.forEach( (btn) =>{
    btn.onclick = function(){
        modalForm = new easyModal('modal', flexModal);
    }
})


    
let mForm = document.querySelector('.m-form');

mForm.onsubmit = function(event){
  event.preventDefault();
  
  let uName = this.querySelector('input[name = "name"]');
  let uPhone = this.querySelector('input[name = "phone"]');
  
  
  let data_body = "name=" + uName.value + '&phone=' +  uPhone.value; 

  
  console.log(data_body);
  fetch("telegram.php", { 
    method: "POST",
    body: data_body,   
    headers:{"content-type": "application/x-www-form-urlencoded"} 
    })
    
  .then( (response) => {
          if (response.status !== 200) {           
              return Promise.reject();
              
          }   
          uName.value = '';
          uPhone.value = '';
                   
          modalForm.closeModal();
          
          return response.text()
    })
    .then(i => console.log(i))
    .catch(() => {console.log('ошибка')
    
  });
  


}



/* / Модальные окна  */



/* 444 Маски */


let phoneMasks = document.querySelectorAll("input[name='phone']");

phoneMasks.forEach( (input) => {
    IMask(
        input, {
          mask: '+{7}(000)000-00-00'
      });
})

  

/* / Маски */