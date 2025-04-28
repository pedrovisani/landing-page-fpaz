import styles from '../Products.module.css';

function Product01({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab('')}
        className={`${styles['i-return']} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles['product-details']}>
        <div className="flex-column gap-28">
          <p className={styles['product-details-title']}>CRÉDITO CONSIGNADO</p>
          <div className={styles['product-details-description']}>
            <p>A solução de crédito com as melhores condições para você!</p>
            <p>
              O <strong>crédito consignado</strong> é uma modalidade de empréstimo em que as
              parcelas são descontadas diretamente da folha de pagamento ou do benefício do
              solicitante, o que proporciona taxas de juros mais baixas, prazos estendidos e
              aprovação facilitada.
            </p>
            <ol>
              <li>
                <h1>
                  <strong>Como funciona</strong>:
                </h1>
                <ul>
                  <li>Você contrata o crédito consignado de forma simples e rápida.</li>
                  <li>
                    As parcelas são automaticamente descontadas do seu salário, aposentadoria ou
                    pensão.
                  </li>
                  <li>Não é necessário fiador, nem consulta ao SPC/Serasa na maioria dos casos.</li>
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
                  <li>
                    Taxas reduzidas: por ter garantia de pagamento, o consignado oferece juros mais
                    baixos que outras modalidades de crédito.
                  </li>
                  <li>Parcelas fixas: saiba exatamente quanto vai pagar, sem surpresas.</li>
                  <li>
                    Prazos estendidos: possibilidade de parcelamento em até 96 vezes, conforme o
                    convênio.
                  </li>
                  <li>Acesso facilitado: ideal para quem busca crédito rápido e sem burocracia.</li>
                  <li>Liberação rápida: recursos disponíveis em pouco tempo após a aprovação.</li>
                </ul>
                <p>
                  O crédito consignado é a escolha ideal para quem busca segurança, economia e
                  praticidade na hora de realizar projetos, quitar dívidas ou investir em novos
                  planos.
                </p>
              </li>
            </ol>
          </div>
          <button>Faça uma simulação</button>
        </div>
      </div>
    </div>
  );
}

export default Product01;
