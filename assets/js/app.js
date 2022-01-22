// My Profile
const myProfileConfig = document.querySelector('.fun-profile');
const btnMyProfileConfig = document.querySelector('#ShowProfileConfig');

// My Profile
const myNotify = document.querySelector('.fun-notify');
const btnMyNotify = document.querySelector('#ShowNotifys');

// My Profile
const myMessages = document.querySelector('.fun-messages');
const btnMyMessages = document.querySelector('#ShowMessages');

const show = (value) => value.classList.toggle('show');
    // let valueSplit = value.className.split(' ');

    // if (valueSplit[1]) {

    //     value.classList.remove('show');

    // } else {

    //     value.classList.add('show');

    // }

// }

// show(myProfileConfig)

btnMyProfileConfig.addEventListener('click', () => show(myProfileConfig) );
btnMyNotify.addEventListener('click', () => show(myNotify) );
btnMyMessages.addEventListener('click', () => show(myMessages) );

// console.log(myProfileConfig.className);

// const verify = (value) => {
//     let valueSplit = value.className.split(' ');

//     console.log(valueSplit[1]);

//     if (valueSplit[1]) {
//         console.log("si");
//     } else {
//         console.log("no");
//     }
// }

// verify(myProfileConfig)

/**
 * ERRORES POR VER XD TODO BUGEADO, TODO FEO
 */