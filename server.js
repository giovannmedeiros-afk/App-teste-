const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'public');
http.createServer((req,res)=>{
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const file = {'/':'index.html','/app.js':'app.js','/style.css':'style.css'}[pathname];
  if(!file){res.writeHead(404);res.end('Não encontrado');return;}
  res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8');
  fs.createReadStream(path.join(root,file)).pipe(res);
}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Agenda iniciada na porta '+(process.env.PORT||3000)));
