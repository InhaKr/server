const { SSL_OP_LEGACY_SERVER_CONNECT } = require('constants');
let http = require('http'); //загрузка библиотеки http
let static = require('node-static');//загрузка библиотеки node-static
let file = new static.Server('.'); //где существует наш сервер 
//и как наш сервер будет отдавать файлы. При обращении к корню сервера, 
//он вернет нам index.html к.т лежит в корне
let port = 9798;



console.log('before');
http.createServer(function(req, res) { //непосредственно создаем веб сервер
  let x = {
    person: '1',
    person_name: 'Oleg',
    person_surname: 'Ivanov',
    person_adress: 'Tombovska-street',
    person_post: '3456'
  }

  if(req.url === '/person') {
    console.log('Ok');

    res.write(x.person);
    res.end();
  }

  if(req.url === '/person_name') {

    res.write(x.person_name);
    res.end();
  }

  if(req.url === '/person_surname') {

    res.write(x.person_surname);
    res.end();
  }
  if(req.url === '/person_adress') {

    res.write(x.person_adress);
    res.end();
  }

  if(req.url === '/person_post') {

    res.write(x.person_post);
    res.end();
    return
  }

  console.log('between');

  
  file.serve(req, res);
}).listen(port);

console.log('after');

console.log(`Server running on port ${port}`);

