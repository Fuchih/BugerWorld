//Facebook login API ---------------
window.fbAsyncInit = function () {
  FB.init({
    appId: '550144832925914',
    cookie: true,
    xfbml: true,
    version: 'v11.0'
  })
  FB.AppEvents.logPageView()
}
;(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk')

const fbLogin = document.querySelector('#facebook-btn')

fbLogin.onclick = function () {
  FB.getLoginStatus(function (response) {
    if (response.authResponse) {
      FB.api('/me', { fields: 'id,name,email' })
    } else {
      FB.login(
        function (response) {
          if (response.authResponse) {
            FB.api('/me', { fields: 'id,name,email' })
          }
        },
        { scope: 'email' }
      )
    }
  })
}
//Google login API ---------------
const googleLogin = document.querySelector('#google-btn')

const startApp = function () {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: '132846187738-rac0vjasgm3nihp7lf51i4sr8qidv4ed.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin'
    })
    attachSignin(googleLogin)
  })
}

function attachSignin(element) {
  auth2.attachClickHandler(element, {})
}

startApp()

googleLogin.onclick = () => {
  startApp()
}

// navigation Bar transform ----------------------
const bar = document.querySelector('.bar-container')
const nav = document.querySelector('nav')
const bodyContainer = document.querySelector('.body-container')
let menu = 1

bar.addEventListener('click', function () {
  this.classList.toggle('change')
  if (menu === 1) {
    nav.style.transform = 'translateX(0)'
    bodyContainer.style.transform = 'translateX(30%)'
    menu = 0
  } else {
    nav.style.transform = 'translateX(-200%)'
    bodyContainer.style.transform = 'translateX(0)'
    menu = 1
  }
})

//Login ----------------------
const mask = document.querySelector('.mask')
const login = document.querySelector('.login-btn')
const loginContainer = document.querySelector('.login-container')
const loginClose = document.querySelector('.close')

login.addEventListener('click', function () {
  mask.style.display = 'block'
  loginContainer.style.display = 'block'
})

mask.onclick = function () {
  loginContainer.style.display = 'none'
  this.style.display = 'none'
}

loginClose.onclick = function () {
  loginContainer.style.display = 'none'
  mask.style.display = 'none'
}
