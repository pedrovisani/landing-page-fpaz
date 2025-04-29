import styles from './Simulator.module.css';

function Simulator() {
  return (
    <section id="simulador" className="section main-bg">
      <div className={`${styles['simulator-container']} wh-100`}>
        <h1>Compromisso com o nosso cliente</h1>
      </div>
    </section>
  );
}

export default Simulator;
