import React from 'react';
import '../OldCalculator/index.css';

function OldCalculator() {
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
                <form onSubmit={()=>alert('Enviando...')}>
                  
                  <div className='inputs'>
                      <input
                          className='day' 
                          type='text'
                          label='Dia'
                          name='day'
                          value='Dia'
                      />
                      <input
                          className='month' 
                          type='text'
                          label='Mês'
                          name='month'
                          value='Mês'
                      />
                      <input
                          className='year' 
                          type='text'
                          label='Ano'
                          name='year'
                          value='Ano'
                      />

                  </div>

                

                      <button type='submit' value='calcular'>Calcular</button>
                </form>
            </div>
            <div className='result'>
              <div className="result-container">
                  <p>Hoje vocễ tem ... anos, ... meses e ... dias!</p>
                  <div>
                    <p>Até hoje você já viveu:</p>
                    <p>... dias</p>
                    <p>... horas</p>
                    <p>... minutos</p>

                  </div>
                  <p className="birthday">Falta ... dias para o seu aniversário!</p>
              </div>
            </div>
            <div className='desc'>
              <div className="desc-container">
                  <h2>Seja Bem-Vindo</h2>
                  <p>
                    Para descobrir, exatamente quantos anos você tem,
                    basta colocar a data de nascimento nos campos acima.
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