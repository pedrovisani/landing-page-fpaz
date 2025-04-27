import styles from "../Products.module.css";

function Product03({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab("")}
        className={`${styles["i-return"]} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles["product-details"]}>
        <div className="flex-column gap-20">
          <p className={styles["product-details-title"]}>
            ANTECIPAÇÃO DO SAQUE FGTS
          </p>
          <p className={styles["product-details-description"]}>
            <p>
              A antecipação do saque FGTS é uma operação financeira em que o
              trabalhador usa o valor que tem direito a sacar futuramente do seu
              Fundo de Garantia do Tempo de Serviço (FGTS) como garantia para
              obter um crédito imediato junto a uma instituição financeira. É
              como um "empréstimo" que já tem o saldo do FGTS como pagamento
              assegurado, o que resulta em juros mais baixos em comparação a
              outras modalidades de crédito.
            </p>
            <ul>
              <li>
                <b>Como funciona</b>:{" "}
                <ul>
                  <li>
                    O trabalhador precisa estar habilitado para o
                    saque-aniversário do FGTS.
                  </li>
                  <li>
                    Ele solicita a antecipação em um banco ou instituição
                    financeira que ofereça esse serviço.
                  </li>
                  <li>
                    O banco adianta o valor de uma ou mais parcelas futuras do
                    saque-aniversário.
                  </li>
                  <li>
                    O pagamento da dívida acontece automaticamente: quando o
                    saque-aniversário cair, o FGTS libera o valor diretamente
                    para o banco, sem necessidade de o trabalhador realizar
                    depósitos.
                  </li>
                </ul>
              </li>
              <li>
                <b>O que é o saque-aniversário?</b>:{" "}
                <p>
                  Antes de entender a antecipação, é importante saber o que é o{" "}
                  <b>saque-aniversário</b>:
                </p>
                <ul>
                  <li>
                    É uma opção em que o trabalhador pode sacar parte do saldo
                    do FGTS todo ano, no mês do seu aniversário.
                  </li>
                  <li>
                    Quem opta pelo saque-aniversário abre mão do saque-rescisão
                    (saque total em caso de demissão sem justa causa), embora
                    continue recebendo a multa de 40% normalmente.
                  </li>
                  <p>
                    <b>Para fazer a antecipação</b>, é obrigatório ter aderido ao
                    saque-aniversário.
                  </p>
                </ul>
              </li>
              <li>
                <b>Quem Pode Contratar</b>: Servidores públicos (municipais,
                estaduais ou federais). Aposentados e pensionistas do INSS.
                Trabalhadores de empresas privadas que possuem convênio com o
                banco. Em alguns casos, militares também têm condições
                específicas de contratação.
              </li>
              <li>
                <b>Principais Características</b>: Desconto automático: Como o
                pagamento é garantido diretamente na fonte (salário ou
                benefício), as instituições oferecem juros mais baixos.
              </li>
              <li>
                <b>Limite de margem consignável</b>: Existe um teto para o valor
                da parcela mensal, chamado margem consignável. Em geral, ela é
                de 30% a 35% da renda líquida do tomador, dependendo da
                categoria (por exemplo, para aposentados do INSS, pode chegar a
                35%, sendo 5% exclusivos para cartão consignado).
              </li>
              <li>
                <b>Prazos longos</b>: Os prazos para pagamento podem chegar a 84
                meses (7 anos), dependendo do perfil do contratante e da
                instituição.
              </li>{" "}
              <li>
                <b>Menos burocracia</b>: Em geral, a aprovação é mais rápida,
                porque o risco para o banco é baixo.
              </li>{" "}
              <li>
                <b>Vantagens do Crédito Consignado</b>: Juros baixos:
                Normalmente, são as menores taxas do mercado para empréstimos
                pessoais. Facilidade de aprovação: Mesmo quem tem restrições no
                nome (negativado) pode conseguir o crédito. Organização
                financeira: O desconto automático ajuda a manter o controle dos
                pagamentos.
              </li>{" "}
              <li>
                <b>Desvantagens e Riscos</b>: Comprometimento de renda: Uma
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
                <b>ATENÇÃO ESPECIAL</b>: Sempre verifique a taxa de juros anual
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

export default Product03;
