const createBoard = (rows, columns) => {
    return Array(rows)
        .fill(0)
        .map((_, row) => {
            return Array(columns)
                .fill(0)
                .map((_, column) => {
                    return {
                        row,
                        column,
                        opened: false,
                        flaged: false,
                        mined: false,
                        exploded: false,
                        nearMines: false,
                    };
                });
        });
};

const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10);
        const columnsSel = parseInt(Math.random() * columns, 10);

        if (!board[rowSel][columnsSel].mined) {
            board[rowSel][columnsSel].mined = true;
            minesPlanted++;
        }
    }
};

const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
};

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field};
        });
    });
};

//Obter todos os fields vizinhos do que foi clicado
const getNeighbords = (board, row, column) => {
    const neighbords = [];
    const rows = [row - 1, row, row + 1];
    const columns = [column - 1, column, column + 1];

    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length;
            const validColumn = c >= 0 && c < board[0].length;
            if (different && validColumn && validRow) {
                neighbords.push(board[r][c]);
            }
        });
    });
    return neighbords;
};

//Com base nos fields vizinhos, retorna se a zona esta totalmente segura ou não
const safeNeighboards = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined;
    return getNeighbords(board, row, column).reduce(safes, true);
};

//Abre os fields de forma recursiva tanto o clicado quanto o ao redor se a zona
//estiver segura.
const openField = (board, row, column) => {
    const field = board[row][column];
    if (!field.opened) {
        field.opened = true;
        if (field.mined) {
            field.exploded = true;
        } else if (safeNeighboards(board, row, column)) {
            getNeighbords(board, row, column).forEach(n =>
                openField(board, n.row, n.column),
            );
        } else {
            const neighbords = getNeighbords(board, row, column);
            field.nearMines = neighbords.filter(n => n.mined).length;
        }
    }
};

//Retorna todos os fields sem a necessicade de realizar um loop dentro do outro
//para percorrer linhas e colunas
const fields = board => [].concat(...board);

//Com base em todos os campos do tabuleiro (board) aplica-se o filter
// e se ao menos um field estiver com exploded true, retorna true
const hadExplosion = board =>
    fields(board).filter(field => field.exploded).length > 0;

//retorna true se existir (algum campo minado && não marcado) Ou
//(algum campo minado && não aberto) pra ser usado para descobrir
//se o jogador ganhou o jogo.
const pendding = field =>
    (field.mined && !field.flaged) || (!field.mined && !field.opened);

const wonGame = board => fields(board).filter(pendding).length === 0;

//com base no board retorne todos os fields filtre e retorne
//apenas os com mined true e percorra os minados true e set o opened para true
const showMines = board =>
    fields(board)
        .filter(field => field.mined)
        .forEach(field => (field.opened = true));

const invertFlag = (board, row, colum) => {
    const field = board[row][colum];
    field.flaged = !field.flaged;
};

const flagedUsed = board => fields(board).filter(field => field.flaged).length;

export {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagedUsed,
};
