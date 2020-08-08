const express = require('express')

const server = express()

const{pageLanding,pageStudy,pageGiveClasses, saveClasses} = require('./pages')
//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//puxar o css da pasta public
//configurar arquivos estaticos(css, scripts, images)
server
//receber os dados do req. body
.use(express.urlencoded({extended:true}))
.use(express.static("public"))
    //configurar rotas da aplicação
    //pagina inicial
    .get("/", pageLanding)
    //pagina study  no index.html não possui mais extensao.html
    .get("/study", pageStudy)
    //assim como give-classes também não
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes",saveClasses)
    .listen(5500)
//npm run dev para executar
