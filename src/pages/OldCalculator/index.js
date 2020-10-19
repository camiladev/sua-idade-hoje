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
          <p>Hoje vocễ tem ... anos, ... meses e ... dias!</p>
          <p>Foram ... dias</p>
          <p>... horas</p>
          <p>... minutos</p>
          <p>Falta ... dias para o seu aniversário!</p>
      </div>
      <div className='desc'>
          <h2>Bem-Vindo</h2>
          <p>
            Para descobrir, exatamente quantos anos você tem ou outra pessoa,
             basta colocar a data de nascimento nos campos acima.
             Você também ficará sabendo quantos dias, horas e minutos já viveu até hoje. </p>
      </div>
    </div>
  );
}

export default OldCalculator;