fetch('https://api.github.com/user/repos').
then(res => res.json()).
then(json => console.log(json))


const token = 'ebc9f3377e3f49d92a343527542175fc114d2be9'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
