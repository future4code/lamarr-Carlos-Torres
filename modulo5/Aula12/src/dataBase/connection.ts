
import knex from "knex";
const connection=knex({
    client: "mysql",
    connection:{

        host:"35.226.146.116",
        port:3306,
        user:"4416666-carlos-torres",
        password:"xkbeKEG7K0RUvxCkDPU6",
        database:"jbl-4416666-carlos-torres",
        multipleStatements:true

    }
}
)
//Exportando a conexão
export default connection

