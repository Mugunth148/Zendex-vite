import './Preloader.scss'


function Preloader() {

    function startLoader() {
        let counterElement = document.querySelector(".counter");
        let currentValue = 0;
       
        function updateCounter() {
         if(currentValue == 100) {
          return;
         }
      
         currentValue += Math.floor(Math.random() * 20) + 1;
      
         if(currentValue > 100) {
          currentValue = 100;
         } 
      
         counterElement.textContent = currentValue;
      
         let delay = Math.floor(Math.random() * 200) + 50;
         setTimeout(updateCounter, delay);
        } 
      
        updateCounter();
      }
      
 function stopLoader(currentValue) {
        let overlay = document.querySelector(".overlay");

        if(currentValue == 100) {
          overlay.classList.toggle("active");
         return;
        }else {
          return
        }
        
 }

        startLoader();
        stopLoader();



  return (
    <>
    <h1 className="counter">0</h1>
    <div className="overlay">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    </>
  )
}

export default Preloader
