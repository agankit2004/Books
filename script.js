function search() {
    let input = document.getElementById('input').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('options');
    let physics = document.getElementById('Physics')
    let chemistry = document.getElementById('Chemistry')
    let maths = document.getElementById('Maths')
  
    for (i = 0; i < x.length; i++) {
      if (!x[0].innerHTML.toLowerCase().includes(input)) {
            physics.style.display="none"
      }
      else {
        physics.style.display=""
      }
      if(!x[1].innerHTML.toLowerCase().includes(input)) {
        chemistry.style.display="none"
     }
     else {
        chemistry.style.display=""
      }
      if(!x[2].innerHTML.toLowerCase().includes(input)) {
        maths.style.display="none"
      }
      else {
        maths.style.display=""
      }
    }
  }
