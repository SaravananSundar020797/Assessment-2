import {ONE3D} from "./one3d";


ONE3D.init("one3d", "http://localhost:5173/" + "one3d/assets/", `SUV`, `SUV`, {
  showDefaultLoader: true,
  color: "RedCrystalMetallic",
  }).then((successData) => {
  console.log(successData)
  }).catch((error) => {
  console.log(error)
  });
  
  
  let btnOne = document.getElementById("interiorView");
  let btnTwo = document.getElementById("exteriorView");
  let btnThree = document.getElementById("backseatView");
  let btnFour = document.getElementById("frontseatView");

  btnOne.addEventListener("click",()=>{
    ONE3D.interiorView()
        .then((success) => {
        console.log(success)
        btnOne.style.display = 'none';
          btnTwo.style.display = 'block';
          btnThree.style.display = 'block';
          btnFour.style.display = 'none';
          
        })
        .catch((error) => {
        console.log(error)
        });
  })

  btnTwo.addEventListener("click",()=>{
    ONE3D.exteriorView()
  .then((success) => {
    btnOne.style.display = `block`
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
      console.log(success);
  })
  .catch((error) => {
      console.error(error);
  });

  })

  btnThree.addEventListener("click",()=>{
    ONE3D.backseatView()
  .then((success) => {
    
    btnOne.style.display = 'none';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'none';
    btnFour.style.display = 'block';
      console.log(success);
  })
  .catch((error) => {
      console.error(error);
  });

  })

  btnFour.addEventListener("click",()=>{
    ONE3D.frontseatView()
  .then((success) => {
    btnOne.style.display = `none`
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'none';
      console.log(success);
  })
  .catch((error) => {
      console.error(error);
  });

  })

  


