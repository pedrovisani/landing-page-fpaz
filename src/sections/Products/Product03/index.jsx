import styles from '../Products.module.css';

function Product03({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab('')}
        className={`${styles['i-return']} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles['product-details']}>
        <div className="flex-column gap-28">
          <p className={styles['product-details-title']}>ANTECIPAÇÃO DO SAQUE FGTS</p>
          <div className={styles['product-details-description']}>
            <p>
              Antecipe hoje o seu saque-aniversário FGTS com rapidez, segurança e sem burocracia!
            </p>
            <p>
              A <strong>antecipação do FGTS</strong> é uma linha de crédito exclusiva para quem
              optou pelo saque-aniversário. Com ela, você pode acessar o valor futuro das suas
              parcelas anuais de forma imediata, sem precisar esperar o mês do saque. Assim, você
              utiliza o seu saldo disponível para realizar seus planos, quitar dívidas ou fazer
              novos investimentos.
            </p>
            <ol>
              <li>
                <h1>
                  <strong>Como funciona</strong>:
                </h1>
                <ul>
                  <li>
                    Você solicita a antecipação de até 10 parcelas futuras do seu saque-aniversário.
                  </li>
                  <li>
                    O valor é liberado diretamente na sua conta em poucos minutos, sujeito à
                    aprovação.
                  </li>
                  <li>
                    As parcelas são quitadas automaticamente com os valores futuros do FGTS, sem
                    afetar seu orçamento mensal.
                  </li>
                </ul>
              </li>
              <li>
                <h1>
                  <strong>O que é o saque-aniversário?</strong>
                </h1>
                <p>
                  Antes de entender a antecipação, é importante saber o que é o{' '}
                  <strong>saque-aniversário</strong>:
                </p>
                <ul>
                  <li>
                    É uma opção em que o trabalhador pode sacar parte do saldo do FGTS todo ano, no
                    mês do seu aniversário.
                  </li>
                  <li>
                    Quem opta pelo saque-aniversário abre mão do saque-rescisão (saque total em caso
                    de demissão sem justa causa), embora continue recebendo a multa de 40%
                    normalmente.
                  </li>
                  <p>
                    <strong>Para fazer a antecipação</strong>, é obrigatório ter aderido ao
                    saque-aniversário.
                  </p>
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
                  <li>Crédito rápido e sem burocracia: contratação 100% online.</li>
                  <li>Taxas de juros reduzidas: menores que empréstimos convencionais.</li>
                  <li>Sem consulta ao SPC ou Serasa: o saldo do FGTS é a garantia da operação.</li>
                  <li>Liberação imediata: dinheiro na conta após aprovação.</li>
                  <li>Pagamento automático: abatimento direto do FGTS, sem boletos.</li>
                </ul>
              </li>
              <li>
                <h1>
                  <strong>Requisitos</strong>:
                </h1>
                <ul>
                  <li>Ter saldo disponível no FGTS.</li>
                  <li>Ter optado pelo saque-aniversário.</li>
                  <li>
                    Autorizar a financeira a consultar seu saldo no aplicativo FGTS ou no site da
                    Caixa.
                  </li>
                  <li>Estar com o CPF regularizado.</li>
                </ul>
                <p>
                  Garanta seu dinheiro <strong>agora mesmo</strong> e conquiste seus objetivos com
                  mais liberdade e segurança!
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

export default Product03;
