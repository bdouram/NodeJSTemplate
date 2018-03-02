class Database{
    constructor(){
        this.db = require ('mongodb').MongoClient
        this.url = 'mongodb://localhost:27017'
        this.databaseName = 'my_database'
    }

    // metodo que instancia a conexao com o banco de dados e com a coleção.
    instance(client,colecao){
        return client.db(this.databaseName).collection(colecao)
    }

    set url(url){this._url = url}
    get url (){return this._url}
    set db(conn){this._conexao = conn}
    get db(){return this._conexao}
    set databaseName(database){this._database = database}
    get databaseName(){return this._database}
}

module.exports = Database