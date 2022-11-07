function clearInputs() {
	document.getElementById("nome").value = "";
	document.getElementById("rg").value = "";
}

/********************************************************
 * 	OS METODOS DE EVENTOS ABAIXO SÃO UTILIZADOS         *
 *  PARA ABERTURA E FECHAMENTO DO MODAL DE CADASTRO     *
 ********************************************************/

document.getElementById("fazer-registrar")/* ABRE O MODAL */
.addEventListener("click", () => document.getElementById("modal-registro")
.style.display = "block" );

document.getElementById("fecha-modal")/* FECHA O MADAL */
.addEventListener("click", () => {
	document.getElementById("modal-registro").style.display = "none";
	clearInputs();
});

/* NOME DO BANCO DE DADO PRINCIPAL */
const DATABASE = "main_DB";

/********************************************************
 *  ESTA FUNÇÃO OBTÉM O BANCO DE DADO (JSON) E          *
 *  CONVERTE PARA UM TIPO (OBJECT)                      *
 ********************************************************/
function getDataBase() {
	const db = localStorage.getItem(DATABASE);
	return JSON.parse(db);
}

/********************************************************
 *  ESTA FUNÇÃO ADICONA UM NOVO VALOR (NOME E RG) NO    *
 *  BANCO DE DADOS (EM JSON).                           *
 ********************************************************/
function addNewValue(nm, r) {
	const db = getDataBase();
	db.push({ nome: nm, rg: r});

	localStorage.setItem(DATABASE, JSON.stringify(db))
}


document.getElementById("registrar")
.addEventListener("click", (e) => {
	e.preventDefault();

	const nome= document.getElementById("nome").value;
	const rg = document.getElementById("rg").value;

	if (nome != "" && rg != "") {
		addNewValue(nome, rg);
	}

	document.getElementById("modal-registro").style.display = "none";
	clearInputs();
});