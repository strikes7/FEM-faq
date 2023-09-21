const contractExpandElements = document.querySelectorAll(".faq__question");
let previousExpandedElement;

contractExpandElements.forEach((currentElement) => {
  currentElement.addEventListener("click", () =>{
  if(previousExpandedElement === currentElement){
    return
  }

  if(previousExpandedElement){
    previousExpandedElement.classList.toggle("expanded");
  }
  
  currentElement.classList.toggle("expanded");
  previousExpandedElement = currentElement;
  })
});
