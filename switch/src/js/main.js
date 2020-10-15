(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()
  /* Menu Toggle */
  const sideMenu = doc.getElementById('menu')
  const menuSwitch = doc.getElementById('menu-toggle')
  const closebtn = document.getElementById('closebtn')
  const contentBlock = doc.querySelector('.content')

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  if (menuSwitch) {
    window.addEventListener('load', displayMenu)
    menuSwitch.addEventListener('change', displayMenu)
  }

  function displayMenu () {
    let labelText = menuSwitch.parentNode.querySelector('.label-text')
    if (menuSwitch.checked) {
      sideMenu.style.display = 'none'
      sideMenu.style.width = '0'
      contentBlock.style.width = '100%'
      contentBlock.style.marginLeft = '0'
      body.classList.remove('menu-off')
      if (labelText) {
        labelText.innerHTML = 'off'
      }
    } else {
      sideMenu.style.display = 'block'
      sideMenu.style.width = '20em'
      contentBlock.style.marginLeft = '355px'
      contentBlock.style.width = 'calc(100vw - 355px)'
      body.classList.add('menu-off')
      if (labelText) {
        labelText.innerHTML = 'on'
      }
    }
  }

  closebtn.onclick = function () {
    sideMenu.style.display = 'none'
    sideMenu.style.width = '0'
    contentBlock.style.width = '100%'
    contentBlock.style.marginLeft = '0'
    menuSwitch.click()
  }

  function checkLights () {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'on'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'off'
      }
    }
  }
}())
