import { useState } from 'react';
import styles from './Simulator.module.css';
import SelectProduct from './SelectProduct';

function Simulator() {
  const [productName, setProductName] = useState('Escolha o produto');

  const [simulatorData, setSimulatorData] = useState({
    value: 0,
    period: 0,
    rate: 1.8,
  });

  function handleChange(e) {
    setSimulatorData({ ...simulatorData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let c = simulatorData.value;
    const t = simulatorData.period;
    const i = simulatorData.rate;
    const l = [];

    while (l.length <= t) {
      const M = c * (1 + i / 100);
      l.push(M.toFixed(2));
      c = M;
    }

    // eslint-disable-next-line no-unused-vars
    const mapa = l.map((item, index) => {
      let indice = index + 1;
      let nome = item;

      return `${indice}º mês = ${nome}`;
    });
  }

  if (productName == 'Crédito consignado') {
    return (
      <section id="simulador" className="section main-bg">
        <div className={`${styles['simulator-container']} flex-center wh-100`}>
          <form onSubmit={handleSubmit} className={styles['simulator-form']}>
            <fieldset className={styles['fields-form']}>
              <legend className={styles['legend-form']}>FAÇA SUA SIMULAÇÃO</legend>
              <SelectProduct productName={productName} setProductName={setProductName} />
              <input
                onChange={handleChange}
                className={styles['input-form']}
                placeholder="Valor desejado: R$ 50.000"
                type="text"
                name="value"
              />
              <input
                onChange={handleChange}
                className={styles['input-form']}
                placeholder="Min: 6 meses Máx: 96 meses"
                min="6"
                max="96"
                type="number"
                name="period"
              />
              <input
                className={styles['input-form']}
                placeholder="Taxa de juros vigente (a.a.): 24,60%"
                name="juros"
                disabled
              />
              <div className={styles['result']}></div>
            </fieldset>
            <button type="submit">Simular</button>
          </form>
        </div>
      </section>
    );
  } else {
    return (
      <section id="simulador" className="section main-bg">
        <div className={`${styles['simulator-container']} flex-center wh-100`}>
          <form className={styles['simulator-form']}>
            <fieldset className={styles['fields-form']}>
              <legend className={styles['legend-form']}>FAÇA SUA SIMULAÇÃO</legend>
              <SelectProduct productName={productName} setProductName={setProductName} />
              <input
                className={styles['input-form']}
                placeholder="Valor desejado"
                type="text"
                name="valor"
              />
              <input
                className={styles['input-form']}
                placeholder="Min: 6 meses Máx: 96 meses"
                min="6"
                max="96"
                type="number"
                name="prazo"
              />
              <textarea className={styles['text-area-form']}></textarea>
            </fieldset>
            <button type="submit">Simular</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Simulator;
