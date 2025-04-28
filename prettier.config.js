/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always', // Sempre colocar parênteses em arrow functions
  bracketSpacing: true, // Espaçamento entre chaves { }
  endOfLine: 'lf', // Usar LF como terminador de linha
  htmlWhitespaceSensitivity: 'ignore', // Ignorar espaços em HTML
  insertPragma: false, // Não inserir comentário @format no início dos arquivos
  jsxSingleQuote: false, // Usar aspas duplas no JSX
  printWidth: 100, // Quebrar linha após 100 caracteres
  proseWrap: 'always', // Sempre quebrar texto em markdown
  quoteProps: 'as-needed', // Só colocar aspas em propriedades de objeto quando necessário
  requirePragma: false, // Não exigir @format para formatar
  semi: true, // Sempre usar ponto-e-vírgula
  singleQuote: true, // Usar aspas simples em strings JS
  tabWidth: 2, // Indentação de 2 espaços
  trailingComma: 'all', // Sempre usar vírgula no final (objetos, arrays, parâmetros)
  useTabs: false, // Não usar tabs (usar espaços)
  vueIndentScriptAndStyle: false, // Não indentação especial em Vue <script> ou <style>
  embeddedLanguageFormatting: 'off', // Não formatar linguagens embutidas (tipo CSS no HTML)
};

export default config;
