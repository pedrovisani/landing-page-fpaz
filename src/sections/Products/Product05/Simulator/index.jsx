import { useState } from 'react';
import { clearFormat, coinFormat } from './monetaryFunctions.js';
import styles from './Simulator.module.css';
import SelectProduct from './SelectProduct/index.jsx';

function Simulator() {
  const coinMonthlyCost = [0.018, 0.02, 0.04, 0.05, 0.0246];
  const capitalExample = ['50.000', '100.000', '30.000', '0.00', '8.000'];
  const minPeriodPayment = [6, 30, 30, 9, 6];
  const maxPeriodPayment = [96, 180, 180, 40, 72];

  const [product, setProduct] = useState({ id: null, name: 'Escolha o produto' });

  const [simulatorData, setSimulatorData] = useState({
    capital: 0,
    period: 0,
  });

  const [monthlyExpense, setMonthlyExpense] = useState('0,00');
  const [totalServices, setTotalServices] = useState('0,00');
  const [paidServices, setPaidServices] = useState('0,00');

  const [simulationDetails, setSimulationDetails] = useState(false);

  const coinCost = Number.isFinite(coinMonthlyCost[product.id])
    ? (coinMonthlyCost[product.id] * 100).toFixed(2)
    : '0.00';

  const mPp = minPeriodPayment[product.id];
  const mxPp = maxPeriodPayment[product.id];

  function handleChange(e) {
    setSimulatorData({ ...simulatorData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const c = clearFormat(simulatorData.capital);
    const n = simulatorData.period;

    const p =
      (c * coinMonthlyCost[product.id]) / (1 - Math.pow(1 + coinMonthlyCost[product.id], -n));
    const t = p * n;
    const tj = t - c;

    setMonthlyExpense(coinFormat.format(p));
    setTotalServices(coinFormat.format(t));
    setPaidServices(coinFormat.format(tj));
    setSimulationDetails(true);
  }

  if (!simulationDetails) {
    return (
      <div className={`${styles['simulator-container']} flex-center wh-100`}>
        <form onSubmit={handleSubmit} className={styles['simulator-form']}>
          <fieldset className={styles['fields-form']}>
            <legend className={styles['legend-form']}>FAÇA SUA SIMULAÇÃO</legend>
            <SelectProduct product={product} setProduct={setProduct} />
            <label htmlFor="capital">Valor desejado (R$)</label>
            <input
              onChange={handleChange}
              className={styles['input-form']}
              placeholder={`Ex: ${capitalExample[product.id] || '10.000'}`}
              type="text"
              name="capital"
              required
            />
            <label htmlFor="period">Prazo (Meses)</label>
            <input
              onChange={handleChange}
              className={styles['input-form']}
              placeholder={`Min: ${mPp || 'X'} meses Máx: ${mxPp || 'X'} meses`}
              min={`${mPp || 0}`}
              max={`${mxPp || 0}`}
              type="number"
              name="period"
              required
            />
            <label htmlFor="coin-cost">Taxa de juros vigente (%)</label>
            <input
              className={styles['input-form']}
              placeholder={`${coinCost} (a.m.)`}
              name="coin-cost"
              type="text"
              disabled
            />
          </fieldset>
          <button type="submit">Simular</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={`${styles['simulator-container']} flex-center wh-100`}>
        <form onSubmit={handleSubmit} className={styles['simulator-form']}>
          <fieldset className={styles['fields-form']}>
            <legend className={styles['legend-form']}>FAÇA SUA SIMULAÇÃO</legend>
            <SelectProduct product={product} setProduct={setProduct} />
            <label htmlFor="capital">Valor desejado (R$)</label>
            <input
              onChange={handleChange}
              className={styles['input-form']}
              placeholder={`R$ ${capitalExample[product.id]}`}
              type="text"
              name="capital"
              required
            />
            <label htmlFor="period">Prazo (Meses)</label>
            <input
              onChange={handleChange}
              className={styles['input-form']}
              placeholder={`Min: ${mPp} meses Máx: ${mxPp} meses`}
              min={`${mPp || 0}`}
              max={`${mxPp || 0}`}
              type="number"
              name="period"
              required
            />
            <label htmlFor="coin-cost">Taxa de juros vigente (%)</label>
            <input
              className={styles['input-form']}
              placeholder={`${coinCost} (a.m.)`}
              name="coin-cost"
              disabled
            />
            <label htmlFor="installment">Parcela mensal (PRICE)</label>
            <input
              className={styles['input-form']}
              value={monthlyExpense}
              placeholder="Valor da parcela"
              name="installment"
              disabled
            />
            <label htmlFor="paid-total">Total com juros</label>
            <input
              className={styles['input-form']}
              value={totalServices}
              placeholder="Total com juros"
              name="paid-total"
              disabled
            />
            <label htmlFor="paid-service">Juros pagos</label>
            <input
              className={styles['input-form']}
              value={paidServices}
              placeholder="Juros pagos"
              name="paid-service"
              disabled
            />
          </fieldset>
          <button type="submit">Simular</button>
        </form>
      </div>
    );
  }
}

export default Simulator;
