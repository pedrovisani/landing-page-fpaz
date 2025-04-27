import styles from "../Products.module.css";

function Product01({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab("")}
        className={`${styles["i-return"]} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles["product-details"]}>
        <div className="flex-column gap-20">
          <p className={styles["product-details-title"]}>CRÉDITO CONSIGNADO</p>
          <p className={styles["product-details-description"]}>
            <p>
              O <strong>crédito consignado</strong> é uma modalidade de empréstimo pessoal em que
              as parcelas são descontadas automaticamente da folha de pagamento
              ou do benefício do tomador. Por isso, ele costuma apresentar taxas
              de juros menores que outros tipos de empréstimo, já que o risco de
              inadimplência é consideravelmente mais baixo para as instituições
              financeiras.
            </p>
            <ul>
              <li>
                <strong>Como funciona</strong>: O interessado solicita o crédito
                consignado a um banco ou financeira. Uma vez aprovado, o valor é
                liberado na conta do tomador. As parcelas mensais do empréstimo
                são debitadas diretamente do salário, aposentadoria ou pensão,
                antes mesmo do valor chegar à conta do cliente.
              </li>
              <li>
                <strong>Quem Pode Contratar</strong>: Servidores públicos (municipais,
                estaduais ou federais). Aposentados e pensionistas do INSS.
                Trabalhadores de empresas privadas que possuem convênio com o
                banco. Em alguns casos, militares também têm condições
                específicas de contratação.
              </li>
              <li>
                <strong>Principais Características</strong>: Desconto automático: Como o
                pagamento é garantido diretamente na fonte (salário ou
                benefício), as instituições oferecem juros mais baixos.
              </li>
              <li>
                <strong>Limite de margem consignável</strong>: Existe um teto para o valor
                da parcela mensal, chamado margem consignável. Em geral, ela é
                de 30% a 35% da renda líquida do tomador, dependendo da
                categoria (por exemplo, para aposentados do INSS, pode chegar a
                35%, sendo 5% exclusivos para cartão consignado).
              </li>
              <li>
                <strong>Prazos longos</strong>: Os prazos para pagamento podem chegar a 84
                meses (7 anos), dependendo do perfil do contratante e da
                instituição.
              </li>{" "}
              <li>
                <strong>Menos burocracia</strong>: Em geral, a aprovação é mais rápida,
                porque o risco para o banco é baixo.
              </li>{" "}
              <li>
                <strong>Vantagens do Crédito Consignado</strong>: Juros baixos:
                Normalmente, são as menores taxas do mercado para empréstimos
                pessoais. Facilidade de aprovação: Mesmo quem tem restrições no
                nome (negativado) pode conseguir o crédito. Organização
                financeira: O desconto automático ajuda a manter o controle dos
                pagamentos.
              </li>{" "}
              <li>
                <strong>Desvantagens e Riscos</strong>: Comprometimento de renda: Uma
                parcela fixa é descontada todo mês, reduzindo a margem de
                manobra financeira. Endividamento: A facilidade de acesso pode
                levar a contratações irresponsáveis. Dependência de emprego: No
                caso de trabalhadores da iniciativa privada, a perda do emprego
                pode gerar problemas para o pagamento do saldo devedor.
                Renovação compulsiva: Muitas vezes, os tomadores renovam
                empréstimos antes de terminar o contrato anterior, aumentando a
                dívida.
              </li>{" "}
              <li>
                <strong>ATENÇÃO ESPECIAL</strong>: Sempre verifique a taxa de juros anual
                (CET – Custo Efetivo Total). Evite intermediários que cobram
                taxas para "facilitar" o processo. Não aceite ofertas de crédito
                sem analisar bem as condições.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product01;
