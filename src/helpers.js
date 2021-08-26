export const moveFocus = e => {   

  if ([38, 40].includes(e.keyCode)) {

    const currentElement = document.activeElement	
    const focusables = document.querySelectorAll(".focasable")
    const length = focusables.length
    let currentIndex

    for (var i=0; i<focusables.length; i++) { 
      if (focusables[i] == currentElement) { 
        currentIndex = i
        break;
      }
    }

    if (e.keyCode == 40) {
      currentIndex < length - 1 
      ? focusables[currentIndex + 1].focus() 
      : focusables[0].focus(); 
    } else if (e.keyCode == 38) {
      currentIndex > 0 
      ? focusables[currentIndex - 1].focus() 
      : focusables[length - 1].focus(); 
    }
  } else {
    
    let foundButton = document.getElementById(e.keyCode)
    if (foundButton) { foundButton.focus() }
  }
}

export const navigate = (e, page) => {
  if (e.keyCode == 72) {
    page('/')
  } else if (e.keyCode == 66) {
    history.back()
  }
}