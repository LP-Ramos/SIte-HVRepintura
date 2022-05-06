function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
}

hover(document.getElementById("btnTelefone"), e => {
    e.target.classList.add("btnTelefone-hover")
  }, e => {
    e.target.classList.remove("btnTelefone-hover")
});

hover(document.getElementById("btnWhatsapp"), e => {
    e.target.classList.add("btnWhatsapp-hover")
  }, e => {
    e.target.classList.remove("btnWhatsapp-hover")
});

hover(document.getElementById("btnInstagram"), e => {
    e.target.classList.add("btnInstagram-hover")
  }, e => {
    e.target.classList.remove("btnInstagram-hover")
});

hover(document.getElementById("btnEmail"), e => {
    e.target.classList.add("btnEmail-hover")
  }, e => {
    e.target.classList.remove("btnEmail-hover")
});