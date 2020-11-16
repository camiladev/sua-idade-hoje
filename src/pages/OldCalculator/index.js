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
    
    //Pega data atual
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

    //calcula a quantidade de dias vividos desde o nascimento até hoje
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
   
//verifica se o mês do aniversário já passou no ano atual
// console.log("mes atual ", monthNow);
    for(var month = 1 ; month <= monthNow; month ++){
      // console.log("calcmes ", month, " mes aniver ", birthdayMonth );
      if(month === birthdayMonth){
        // console.log(" mesmo mes ", month, " mes aniver ", birthdayMonth );
        if(birthdayMonth === monthNow){
          for(var d = 1 ; d <= now.getDate()+1; d ++){
            if(d === birthdayDay){
              past = true;
            }
          }

        }else{
          past = true;
        }
      }
    }

  console.log("past ", past);
    var calc = 0;
    var y = 0;
    
    //se o mês já passou
    if(past){
    y = now.getFullYear() - birthday.getFullYear();
    setYearsOld(y);
    
    calc = ((now.getFullYear() - birthdayThisYear.getFullYear())*12);
    calc = calc + (monthNow - birthdayMonth);
    setMonthOld(calc);
  }else{
    //se não passou
  
    y = now.getFullYear() - (birthday.getFullYear()+1);
    setYearsOld(y);

    
    calc = ((now.getFullYear() - beginYear.getFullYear())*12);
    calc = calc + (monthNow - birthdayMonth);
    setMonthOld(calc);
  }  
  
  //calcula quantos dias falta para o proximo aniversário
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
            <div className='anuncio'>
              <a href='https://www.hostg.xyz/aff_c?offer_id=12&aff_id=55912'>
                <div className='banner'></div>
              </a>
            </div>
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