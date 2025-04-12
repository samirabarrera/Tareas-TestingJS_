/*     
Utilice la abreviatura del valor de la propiedad y 
refactorice la función de fábrica en el siguiente
código: */

const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // Para comprobar que shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)