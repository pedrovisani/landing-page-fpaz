import { useState } from 'react';
import { Link } from 'react-router-dom';
import Simulator from './Simulator';
import styles from '../Products.module.css';

function Product05({ setProductTab }) {
  const [simulatorTab, setSimulatorTab] = useState(false);

  if (!simulatorTab) {
    return (
      <div className="flex-end-center wh-100 pr">
        <i
          onClick={() => setProductTab('')}
          className="i-return flex-center i-p icon-arrow-left"
        ></i>
        <div className={styles['product-details']}>
          <div className="flex-column gap-28">
            <p className={styles['product-details-title']}>
              CONSÓRCIO DE CARROS, IMÓVEIS E SERVIÇOS
            </p>
            <div className={styles['product-details-description']}>
              <p>Realize seus sonhos de forma planejada, econômica e segura!</p>
              <p>
                O <strong>consórcio</strong> é a maneira inteligente de conquistar seu carro, imóvel
                ou serviço sem pagar juros altos. Através de um grupo de pessoas que contribuem
                mensalmente, é possível adquirir bens ou serviços de maneira programada, com
                parcelas acessíveis e excelente custo-benefício.
              </p>
              <ol>
                <li>
                  <h1>
                    <strong>Como funciona</strong>:
                  </h1>
                  <ul>
                    <li>Você adere a um grupo de consórcio e paga parcelas mensais.</li>
                    <li>
                      Mensalmente, são realizadas assembleias para contemplar participantes por
                      sorteio ou lance.
                    </li>
                    <li>
                      Ao ser contemplado, você recebe a carta de crédito para adquirir seu carro,
                      imóvel ou serviço.
                    </li>
                  </ul>
                </li>
                <li>
                  <h1>
                    <strong>Modalidades disponíveis</strong>:
                  </h1>
                  <ul>
                    <li>
                      Consórcio de Carros: conquiste seu veículo novo ou seminovo de forma
                      econômica.
                    </li>
                    <li>
                      Consórcio de Imóveis: realize o sonho da casa própria, invista ou reforme.
                    </li>
                    <li>
                      Consórcio de Serviços: contrate viagens, tratamentos estéticos, cirurgias,
                      festas, reformas e muito mais.
                    </li>
                  </ul>
                </li>
                <li>
                  <h1>
                    <strong>Quem pode contratar?</strong>
                  </h1>{' '}
                  <ul>
                    <li>Pessoas físicas ou jurídicas maiores de 18 anos.</li>
                    <li>
                      Pessoas que desejam planejar suas conquistas sem recorrer a financiamentos
                      tradicionais.
                    </li>
                  </ul>
                </li>
                <li>
                  <h1>
                    <strong>Vantagens</strong>:
                  </h1>
                  <ul>
                    <li>Sem juros: apenas taxa de administração e fundo de reserva.</li>
                    <li>
                      Parcelas que cabem no seu bolso: valores planejados de acordo com sua
                      necessidade.
                    </li>
                    <li>
                      Flexibilidade de uso: compre carros novos, usados, imóveis residenciais,
                      comerciais ou até serviços como cirurgias, viagens e reformas.
                    </li>
                    <li>
                      Lances para antecipação: aumente suas chances de ser contemplado mais rápido.
                    </li>
                    <li>
                      Planejamento financeiro: ideal para quem quer comprar sem pressa e com
                      organização.
                    </li>
                  </ul>
                  <p>
                    Com o consórcio, você transforma seus projetos em realidade, pagando menos e
                    organizando suas finanças de forma inteligente!
                  </p>
                </li>
              </ol>
            </div>
            <Link to="/produtos">
              <button onClick={() => setSimulatorTab(!simulatorTab)}>Faça uma simulação</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <Simulator setProductTab={setProductTab} />;
  }
}

export default Product05;
