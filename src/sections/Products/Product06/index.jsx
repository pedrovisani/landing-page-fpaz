import { Link } from 'react-router-dom';
import styles from '../Products.module.css';

function Product06({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab('')}
        className={`${styles['i-return']} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles['product-details']}>
        <div className="flex-column gap-28">
          <p className={styles['product-details-title']}>CARTÃO DE CRÉDITO CONSIGNADO</p>
          <div className={styles['product-details-description']}>
            <p>A liberdade do cartão de crédito com as vantagens do desconto direto em folha!</p>
            <p>
              O <strong>cartão de crédito consignado</strong> é uma opção prática e econômica para
              quem deseja fazer compras, sacar dinheiro ou ter um limite extra, com a segurança do
              desconto automático da fatura mínimo diretamente no salário ou benefício.
            </p>
            <ol>
              <li>
                <h1>
                  <strong>Como funciona</strong>:
                </h1>
                <ul>
                  <li>Você utiliza o cartão normalmente para compras em lojas físicas e online.</li>
                  <li>
                    O valor mínimo da fatura é descontado automaticamente da sua folha de pagamento
                    ou benefício.
                  </li>
                  <li>
                    O restante da fatura pode ser pago de forma opcional, diretamente pelo cliente.
                  </li>
                </ul>
              </li>
              <li>
                <h1>
                  <strong>Quem pode contratar?</strong>
                </h1>{' '}
                <ul>
                  <li>Aposentados e pensionistas do INSS.</li>
                  <li>Servidores públicos federais, estaduais e municipais.</li>
                  <li>Trabalhadores de empresas privadas conveniadas.</li>
                </ul>
              </li>
              <li>
                <h1>
                  <strong>Vantagens</strong>:
                </h1>
                <ul>
                  <li>Sem consulta ao SPC/Serasa: mais facilidade de aprovação.</li>
                  <li>
                    Taxas de juros reduzidas: muito menores do que as dos cartões tradicionais.
                  </li>
                  <li>Sem anuidade: você não paga taxa para manter seu cartão ativo.</li>
                  <li>Saque em dinheiro: possibilidade de sacar parte do limite disponível.</li>
                  <li>
                    Limite elevado: limites superiores aos oferecidos em cartões convencionais.
                  </li>
                  <li>
                    Uso nacional e internacional: faça compras no Brasil e no exterior com
                    praticidade.
                  </li>
                </ul>
                <p>
                  Com o cartão de crédito consignado, você tem mais poder de compra, menos juros e
                  toda a flexibilidade de um cartão tradicional, sem comprometer seu orçamento.
                </p>
              </li>
            </ol>
          </div>
          <button
            onClick={() => {
              window.open('https://wa.me/5581991167312', '_blank', 'noopener,noreferrer');
            }}
            className="flex-center flex-row gap-8"
          >
            <h1>Fale com um consultor</h1>
            <i className="icon-wpp h-100"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product06;
