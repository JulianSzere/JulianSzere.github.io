const textVariables = [
    ['Todo'], 
    ['estará', 'se hallará', 'permanecerá', 'se quedará', 'se encontrará', 'habitará', 'se ubicará', 'radicará', 'existirá', 'vivirá'], 
    ['en', 'por'], 
    ['sus'], 
    ['ciegos', 'invidentes', 'cegados', 'ofuscados'], 
    ['volúmenes.', 'tomos.', 'ejemplares.', 'libros.', 'textos.'], 
    ['Todo:'], 
    ['la'], 
    ['historia', 'crónica', 'relación', 'biografía', 'memoria', 'semblanza', 'patraña', 'habladuría', 'excusa', 'mentira'], 
    ['minuciosa', 'meticulosa', 'puntillosa', 'metódica', 'cuidadosa', 'quisquillosa', 'exhaustiva', 'rigurosa', 'concienzuda'], 
    ['del'], 
    ['porvenir,', 'futuro,', 'destino,'], 
    ['Los'], 
    ['egipcios'], 
    ['de'], 
    ['Esquilo,'], 
    ['el'], 
    ['número'], 
    ['preciso', 'imperioso', 'conciso', 'específico', 'determinado', 'riguroso', 'estricto', 'severo', 'rígido', 'minucioso', 'escrupuloso', 'quisquilloso', 'puntilloso'], 
    ['de'], 
    ['veces', 'ocasiones', 'oportunidades', 'situaciones', 'momentos'], 
    ['que'], 
    ['las'], 
    ['aguas'], 
    ['de'], 
    ['Ganges'], 
    ['han'], 
    ['reflejado', 'reflectado', 'plasmado', 'manifestado', 'evidenciado', 'reverberado'], 
    ['el'], 
    ['vuelo', 'ascenso', 'viaje', 'desplazamiento', 'trayecto'], 
    ['de'], 
    ['un'], 
    ['halcón,', 'águila,', 'búho,'], 
    ['el'], 
    ['secreto', 'misterioso', 'enigmático', 'oculto', 'ingoto'], 
    ['y', 'pero'], 
    ['verdadero', 'verídico', 'correcto', 'genuino', 'auténtico', 'legítimo', 'fidedigno', 'probado', 'sincero'], 
    ['nombre', 'apelativo', 'título', 'prestigio'], 
    ['de'], 
    ['Roma,'], 
    ['la'], 
    ['enciclopedia'], 
    ['que'], 
    ['hubiera', 'habría'], 
    ['edificado', 'consturido', 'elevado', 'levantado', 'alzado', 'fabricado', 'obrado'], 
    ['Novalis,'], 
    ['mis'], 
    ['sueños'], 
    ['y'], 
    ['entresueños'], 
    ['en', 'durante', 'por'], 
    ['el'], 
    ['alba', 'alborada', 'amanecer'], 
    ['del'], 
    ['catorce'], 
    ['de'], 
    ['agosto'], 
    ['de'], 
    ['1934,'], 
    ['la'], 
    ['demostración', 'prueba'], 
    ['del'], 
    ['teorema'], 
    ['de'], 
    ['Pierre'], 
    ['Fermat,'], 
    ['los'], 
    ['no', 'jamás', 'nunca'], 
    ['escritos'], 
    ['capítulos', 'títulos'], 
    ['de'], 
    ['Edwin'], 
    ['Drood,'], 
    ['esos', 'aquellos'], 
    ['mismos', 'idénticos', 'exactos'], 
    ['capítulos', 'títulos'], 
    ['traducidos', 'transcritos', 'convertidos'], 
    ['al'], 
    ['idioma', 'lenguaje'], 
    ['que'], 
    ['hablaron', 'verbalizaron', 'conversaron', 'dialogaron', 'trataron', 'conversaron', 'versaron',  'trataron', 'versaron', 'murmuraron', 'cuchichearon', 'criticaron', 'dominaron', 'manejaron', 'evocaron'], 
    ['los'], 
    ['garamantas,'], 
    ['las'], 
    ['paradojas', 'contradicciones'], 
    ['que'], 
    ['ideó', 'pensó', 'imaginó', 'concibió', 'discurrió', 'proyectó', 'inventó', 'esbozó'], 
    ['Berkeley'], 
    ['acerca'], 
    ['del'], 
    ['Tiempo'], 
    ['y'], 
    ['que'], 
    ['no', 'jamás', 'nunca'], 
    ['publicó,', 'divulgó,', 'difundió,', 'propagó,', 'reveló,'], 
    ['los'], 
    ['libros', 'ejemplares', 'tomos', 'volúmenes', 'textos'], 
    ['de'], 
    ['hierro', 'metal'], 
    ['de'], 
    ['Urizen,'], 
    ['las'], 
    ['prematuras', 'precoces', 'precipitadas'], 
    ['epifanías', 'revelaciones'], 
    ['de'], 
    ['Stephen'], 
    ['Dedalus'], 
    ['que'], 
    ['antes'], 
    ['de'], 
    ['un'], 
    ['ciclo', 'periodo', 'lapso', 'periodo'], 
    ['de'], 
    ['mil'], 
    ['años'], 
    ['nada'], 
    ['querrán', 'podrán', 'lograrán', 'conseguirán', 'serán capaz de'], 
    ['decir,', 'expresar'], 
    ['el'], 
    ['evangelio'], 
    ['gnóstico'], 
    ['de'], 
    ['Basílides,'], 
    ['el'], 
    ['cantar', 'canto'], 
    ['que'], 
    ['cantaron', 'interpretaron', 'entonaron', 'chillaron'], 
    ['las'], 
    ['sirenas,'], 
    ['el'], 
    ['catálogo', 'índice'], 
    ['fiel', 'noble', 'confiable', 'sincero'], 
    ['de'], 
    ['la'], 
    ['Biblioteca,'], 
    ['la'], 
    ['demostración', 'prueba', 'razón', 'justificación'], 
    ['de'], 
    ['la'], 
    ['falacia', 'imposibilidad', 'falsedad', 'inexactitud'], 
    ['de'], 
    ['ese', 'aquel'], 
    ['catálogo.', 'índice.'], 
    ['Todo,'], 
    ['pero', 'mas', 'aunque'], 
    ['por', 'para'], 
    ['una'], 
    ['línea', 'oración', 'frase'], 
    ['razonable', 'prudente', 'suficiente'], 
    ['o'], 
    ['una'], 
    ['justa', 'simple', 'sencilla', 'inocente'], 
    ['noticia', 'comunicación', 'nota', 'novedad', 'idea'], 
    ['habrá', 'existirán', 'se encontrarán'], 
    ['millones'], 
    ['de'], 
    ['insensatas', 'alocadas', 'locas', 'desatinadas', 'irrazonables', 'ilógicas'], 
    ['cacofonías,', 'disonancias,', 'discordancias,', 'discrepancias'], 
    ['de'],
    ['fárragos', 'revoltijos', 'maremagnos'], 
    ['verbales'], 
    ['y'], 
    ['de'], 
    ['incoherencias.', 'incongruencias.', 'contradicciones.', 'absurdos.', 'barbaridades.'], 
    ['Todo,'], 
    ['pero', 'mas', 'aunque'], 
    ['las'], 
    ['generaciones'], 
    ['de'], 
    ['los'], 
    ['hombres', 'humanos'], 
    ['pueden'], 
    ['pasar', 'cambiar', 'acabar', 'sufrir'], 
    ['sin'], 
    ['que'], 
    ['los'], 
    ['anaqueles', 'estantes'], 
    ['vertiginosos'], 
    ['-los'], 
    ['anaqueles', 'estantes'], 
    ['que'], 
    ['obliteran', 'obturan', 'taponan', 'atrancan'], 
    ['el'], 
    ['día'], 
    ['y'], 
    ['en', 'durante', 'por'], 
    ['los'], 
    ['que'], 
    ['habita', 'vive', 'mora', 'anida', 'se asienta', 'existe'], 
    ['el'], 
    ['caos-', 'desorden-', 'desconcierto-'], 
    ['les'], 
    ['hayan'], 
    ['otorgado', 'regalado', 'donado', 'cedido', 'concedido', 'consentido', 'dispensado'], 
    ['una'], 
    ['página', 'hoja'], 
    ['tolerable.', 'soportable.', 'leible.']
];

const titleVariables = [
    ['La'],
    ['biblioteca'],
    ['total', 'completa', 'integral', 'entera', 'cabal', 'general', 'universal', 'absoluta', 'exhaustiva', 'global']
];

function newCombination(synonyms) {
    let text = '';
    for (let i = 0; i < synonyms.length; i++) {
        let synonym = synonyms[i];
        let word = synonym[Math.floor(Math.random() * synonym.length)];
        text += ' ' + word;
    }
    return text;
}

const textElement = document.createElement('p');
const titleElement = document.createElement('h1');

textElement.innerHTML = newCombination(textVariables);
titleElement.innerHTML = newCombination(titleVariables);

document.body.appendChild(titleElement);
document.body.appendChild(textElement);
