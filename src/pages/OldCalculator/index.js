import React, { useState } from 'react';
import '../OldCalculator/index.css';

function OldCalculator() {
  const [date_birthday, setDateBirthday] = useState('');
  const [days, setDays] = useState(0); // total dias vividos
  const [hours, setHours] = useState(0);// total horas vividos
  const [minutes, setMinutes] = useState(0); // total minutos vividos
  const [countDay, setCountDay] = useState(0); // total dias dentro do mes
  const [yearsOld, setYearsOld] = useState(0); //Idade
  const [monthOld, setMonthOld] = useState(0); // // total meses vividos no ano
  const [daysLeft, setDaysLeft] = useState(0); // // quantidade de dias para o proximo aniversário
  
  

  function handleDateBirthday(event){
    event.preventDefault(); // apos envio do formulario evita q a pagina recarregue

    //verifica se data esta vazia
    console.log('data ', date_birthday);
    if(date_birthday===""){
      alert("Por favor informe uma data!");
      return;
    }

    const day = 24*60*60*1000;
    
    var now = new Date();
    var monthNow = now.getMonth()+1;
    var dayNow = now.getDate();
    var mlsNow = now.getTime();

   //Atribui a data informada em formato date
    var birthday = new Date();
    birthday.setFullYear(date_birthday.split('-')[0]);
    birthday.setMonth(date_birthday.split('-')[1] - 1);
    birthday.setDate(date_birthday.split('-')[2]);

    //verifica se data é menor que a atual
    if(birthday.getFullYear() > now.getFullYear()){
      alert("A data de nascimento deve ser menor que a data atual!");
      return;
    }


    var birthdayMonth = birthday.getMonth()+1;
    var birthdayDay = birthday.getDate();
    var mlsBirthday = birthday.getTime();

    var dif = mlsNow - mlsBirthday;
    var qtdDays = dif/day; // Quatidade de dias
    setDays(qtdDays.toFixed(2));

    var diffMilissegundos = now - birthday;
    var diffSegundos = diffMilissegundos / 1000;
    var diffMinutos = diffSegundos / 60; // Quantidade de Minutos
    setMinutes(diffMinutos.toFixed(2));
    var diffHoras = diffMinutos / 60; // Quantidade de horas
    setHours(diffHoras.toFixed(2));

    
    setCountDay(dayNow);//dias passados no mes atual

    //data do ultimo aniversário
    var beginYear = new Date(birthdayMonth +"/"+ birthdayDay+"/"+ (now.getFullYear()-1));
       

    var birthdayThisYear = new Date(birthdayMonth +"/"+birthdayDay +"/"+ now.getFullYear());
    var past = false; 
    var countD = 0; 

    if((monthNow === birthdayMonth)&&(dayNow > birthdayDay)){
        countD = dayNow - birthdayDay;
        setCountDay(countD);
    }
   

    for(var month = 1 ; month <= now.getMonth()+1; month ++){
      if(month === birthdayMonth){
        for(var d = 1 ; d <= now.getDate()+1; d ++){
          if(d === birthdayDay){
            past = true;
          }
        }
      }
    }

    // var beginYearPast = new Date('01/01/'+(now.getFullYear()-1))
    var calc = 0;
    var y = 0;
    // var daysYear = 0;
    
    if(past){
    y = now.getFullYear() - birthday.getFullYear();
    setYearsOld(y);
    // daysYear = (now - birthdayThisYear)/day;
    
    calc = ((now.getFullYear() - birthdayThisYear.getFullYear())*12);
    calc = calc + (monthNow - birthdayMonth);
    setMonthOld(calc);
  }else{
    y = now.getFullYear() - (birthday.getFullYear()+1);
    setYearsOld(y);
    // daysYear = (now - beginYear)/day;
    
    calc = ((now.getFullYear() - beginYear.getFullYear())*12);
    calc = calc + (monthNow - birthdayMonth);
    setMonthOld(calc);
  }  
  
  var as = parseInt(birthday.getFullYear()+y+1);
  var diff = Date.UTC(as, birthdayMonth-1,birthdayDay,0,0,0) - Date.UTC(now.getFullYear(), monthNow-1,dayNow,0,0,0);
  var datee = diff/day;
  setDaysLeft(datee);
  
    
  }

  return (
    <div className="content">
      <header>
     
        <div className="content-header">
          <h1>Idade Hoje</h1>
          <p>
              Calcule sua idade completa com meses e dias!
          </p>

        </div>
        
      </header>
      <main>
        <div className="main-container">
            
            <div className='form-birthday'>
                <label>Informe sua data de nascimento:</label>
                <form onSubmit={handleDateBirthday}>
                  
                      <input
                          className='date' 
                          type='date'
                          name='date'
                          value={date_birthday}
                          onChange={ event => setDateBirthday( event.target.value ) }
                      /> 
                      <div className="button">
                          <button type='submit' value='calcular'>Calcular</button>
                      
                      </div>                     
                </form>
            </div>
            <div className="result">
              <div className="result-container">
                  <p>Hoje você tem {yearsOld} anos, {monthOld} meses e {countDay} dias!</p>
                  <div>
                    <p>Até hoje você já viveu:</p>
                    <p>{days} dias</p>
                    <p>{hours} horas</p>
                    <p>{minutes} minutos</p>

                  </div>
                  <p className="birthday">Falta {daysLeft} dias para o seu aniversário!</p>
              </div>
            </div>
            <div className='desc'>
              <div className="desc-container">
                  <h2>Seja Bem-Vindo</h2>
                  <p>
                    Para descobrir, exatamente quantos anos você tem,
                    basta colocar a data de nascimento nos campos acima e clicar no botão calcular.
                  </p>
                  <br />
                  <p>
                    Você também ficará sabendo quantos dias, horas e minutos que você já viveu até hoje. 
                  </p>

              </div>
            </div>
       
        </div>

      </main>
      
    </div>
  );
}

export default OldCalculator;