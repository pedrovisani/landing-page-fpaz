import styles from "../Products.module.css";

function Product02({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab("")}
        className={`${styles["i-return"]} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles["product-details"]}>
        <div className="flex-column gap-28">
          <p className={styles["product-details-title"]}>
            CRÉDITO PESSOAL
          </p>
          <div className={styles["product-details-description"]}>
            <p>
              Conquiste seu crédito de forma rápida, com juros reduzidos e
              prazos mais longos, oferecendo seu imóvel ou veículo como
              garantia, ou aproveite condições especiais se já for correntista
              de um banco conveniado!
            </p>

            <p>
              O <strong>Crédito com Garantia de Imóvel ou Automóvel</strong>{" "}
              permite obter crédito com taxas de juros menores e prazos
              estendidos, oferecendo seu imóvel ou veículo como garantia. Já o{" "}
              <strong>Crédito para Correntistas de Bancos Específicos</strong>{" "}
              proporciona um crédito rápido, com taxas reduzidas e aprovação
              facilitada para quem já é cliente do banco parceiro.
            </p>

            <ol>
              <li>
                <h1>
                  <strong>Como funciona:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>
                      Crédito com Garantia de Imóvel ou Automóvel:
                    </strong>{" "}
                    Você oferece seu imóvel ou veículo como garantia e, com
                    isso, consegue taxas de juros mais baixas e prazos mais
                    longos.
                  </li>
                  <li>
                    <strong>
                      Crédito para Correntistas de Bancos Específicos:
                    </strong>{" "}
                    Aprovado com base no seu relacionamento com o banco, com
                    menos burocracia e condições mais vantajosas.
                  </li>
                  <li>
                    <strong>Parcelamento Flexível:</strong> Ambas as opções
                    oferecem parcelamento flexível, de acordo com suas
                    necessidades financeiras.
                  </li>
                  <li>
                    <strong>Destinação do Crédito:</strong> O crédito pode ser
                    utilizado para quitar dívidas, realizar reformas,
                    investimentos e outros fins.
                  </li>
                </ul>
              </li>

              <li>
                <h1>
                  <strong>Vantagens:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Taxas de juros reduzidas:</strong> Menores do que em
                    outras modalidades de crédito, com juros reduzidos devido à
                    garantia do bem ou ao relacionamento bancário.
                  </li>
                  <li>
                    <strong>Prazos mais longos:</strong> Permite parcelar em até
                    180 meses no caso do crédito com garantia de imóvel ou
                    automóvel.
                  </li>
                  <li>
                    <strong>Facilidade de aprovação:</strong> O crédito para
                    correntistas oferece aprovação mais ágil e com menos
                    burocracia.
                  </li>
                  <li>
                    <strong>Crédito de maior valor:</strong> Possibilidade de
                    obter um valor mais alto com o crédito com garantia de
                    imóvel ou automóvel.
                  </li>
                </ul>
              </li>

              <li>
                <h1>
                  <strong>Quem pode contratar:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>
                      Crédito com Garantia de Imóvel ou Automóvel:
                    </strong>{" "}
                    Proprietários de imóveis ou veículos com documentação
                    regular e que desejam crédito de maior valor e melhores
                    condições.
                  </li>
                  <li>
                    <strong>
                      Crédito para Correntistas de Bancos Específicos:
                    </strong>{" "}
                    Correntistas de bancos conveniados que buscam uma solução
                    rápida e com condições diferenciadas.
                  </li>
                </ul>
              </li>

              <p>
                O <strong>Crédito com Garantia de Imóvel ou Automóvel</strong> é
                ideal para quem busca um valor maior, com prazos longos e taxas
                acessíveis. Já o{" "}
                <strong>Crédito para Correntistas de Bancos Específicos</strong>{" "}
                oferece um crédito rápido, com aprovação facilitada, perfeito
                para quem precisa de uma solução ágil e com boas condições.
              </p>
            </ol>
          </div>

          <button>Faça sua simulação</button>
        </div>
      </div>
    </div>
  );
}

export default Product02;
