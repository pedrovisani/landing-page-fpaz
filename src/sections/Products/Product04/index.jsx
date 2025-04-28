import styles from '../Products.module.css';

function Product04({ setProductTab }) {
  return (
    <div className="flex-end-center wh-100 pr">
      <i
        onClick={() => setProductTab('')}
        className={`${styles['i-return']} flex-center i-p icon-arrow-left`}
      ></i>
      <div className={styles['product-details']}>
        <div className="flex-column gap-28">
          <p className={styles['product-details-title']}>
            FINANCIAMENTO DE VEÍCULOS IMÓVEIS E MAQUINÁRIO AGRÍCOLA
          </p>
          <div className={styles['product-details-description']}>
            <p>
              Realize seus planos com o financiamento ideal para adquirir seu veículo, imóvel ou
              maquinário agrícola, com condições flexíveis e taxas competitivas!
            </p>

            <p>
              O <strong>Financiamento de Veículos, Imóveis e Maquinário Agrícola</strong> oferece
              crédito para a aquisição de bens de alto valor, com prazos alongados, parcelas que
              cabem no seu bolso e opções adaptadas ao seu perfil e necessidade.
            </p>

            <ol>
              <li>
                <h1>
                  <strong>Como funciona:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Financiamento de Veículos:</strong> Crédito para comprar carros, motos,
                    caminhões ou outros veículos novos e usados, com entrada facilitada e diversas
                    opções de parcelamento.
                  </li>
                  <li>
                    <strong>Financiamento de Imóveis:</strong> Solução para aquisição de imóveis
                    residenciais, comerciais ou terrenos, com prazos estendidos e condições
                    atrativas.
                  </li>
                  <li>
                    <strong>Financiamento de Maquinário Agrícola:</strong> Crédito voltado para
                    produtores rurais que desejam investir em equipamentos agrícolas modernos e de
                    alta produtividade.
                  </li>
                </ul>
              </li>

              <li>
                <h1>
                  <strong>Vantagens:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Taxas competitivas:</strong> Juros acessíveis para viabilizar sua
                    aquisição de forma planejada e econômica.
                  </li>
                  <li>
                    <strong>Prazo flexível:</strong> Ampla variedade de prazos para pagamento,
                    adaptados ao seu orçamento e tipo de financiamento.
                  </li>
                  <li>
                    <strong>Entrada facilitada:</strong> Possibilidade de negociar condições de
                    entrada que se ajustem ao seu momento financeiro.
                  </li>
                  <li>
                    <strong>Atendimento especializado:</strong> Equipe preparada para orientar e
                    ajudar a encontrar a melhor solução para seu projeto.
                  </li>
                </ul>
              </li>

              <li>
                <h1>
                  <strong>Quem pode contratar:</strong>
                </h1>
                <ul>
                  <li>
                    <strong>Financiamento de Veículos:</strong> Pessoas físicas ou jurídicas que
                    desejam adquirir veículos novos ou usados.
                  </li>
                  <li>
                    <strong>Financiamento de Imóveis:</strong> Interessados na compra de imóveis
                    residenciais, comerciais ou terrenos.
                  </li>
                  <li>
                    <strong>Financiamento de Maquinário Agrícola:</strong> Produtores rurais que
                    buscam modernizar sua produção com equipamentos agrícolas.
                  </li>
                </ul>
              </li>

              <p>
                O <strong>Financiamento de Veículos, Imóveis e Maquinário Agrícola</strong> é a
                escolha certa para quem quer conquistar bens de grande valor com condições
                acessíveis e prazos que respeitam seu planejamento financeiro.
              </p>
            </ol>
          </div>

          <button>Faça sua simulação</button>
        </div>
      </div>
    </div>
  );
}

export default Product04;
