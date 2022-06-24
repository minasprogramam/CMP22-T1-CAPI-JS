// https://teste-api-lilit.herokuapp.com/api-docs/#/

let getWelcome = async () => {
 try {
  const response = await fetch('https://teste-api-lilit.herokuapp.com/')
  const welcomeJson = await response.json()
  console.log(welcomeJson)
 }
 catch(err) {
  console.error(err)
 }
}

// getWelcome()

// fetch('https://teste-api-lilit.herokuapp.com/') //retorna uma promise
// .then((response) => response.json())
// .then((welcomeJson) => console.log(welcomeJson))
// .catch((err) => console.error(err))

let getBeginers = async () => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers', {
      method: 'GET', //opcional
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      }
    })
    const beginers = await response.json()
    console.log(beginers)
   }
   catch(err) {
    console.error(err)
   }
}

// getBeginers()

let beginerData = {
  "name": "Lina",
  "phone": "11999999999",
  "email": "lina@hackear.com",
  "linkedin": "https://linkedin.com/in/username",
  "github": "https://github.com/username",
  "city": "Cidade",
  "state": "Estado",
  "studyTime": 2,
  "stacksOfInterest": "Back-end",
  "priorKnowledge": [
    "Node",
    "Typescript",
    "Mongodb"
  ],
  "englishLevel": 2,
  "othersPrograms": "{reprograma}",
  "hasComputer": true,
  "internetAccess": true,
  "message": "Textinho bonitinho",
  "findUs": "Amiges"
}

let createBeginer = async (body = beginerData) => {
  try {
    const response = await fetch('https://teste-api-lilit.herokuapp.com/beginers/register', {
      method: 'POST', // obrigatório
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      },
      body: JSON.stringify(body)
    })
    const newBeginer = await response.json()
    console.log(newBeginer)
   }
   catch(err) {
    console.error(err)
   }
}

let beginerDataToUpdate = {
  "city": "internacional"
}

let updateBeginer = async (id, body = beginerDataToUpdate) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/update/${id}`, {
      method: 'PATCH', // obrigatório
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      },
      body: JSON.stringify(body)
    })
    const updateBeginer = await response.json()
    console.log(updateBeginer)
   }
   catch(err) {
    console.error(err)
   }
}

let deleteBeginer = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/delete/${id}`, {
      method: 'DELETE', // obrigatório
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      }
    })
    const deleted = await response.json()
    console.log(deleted)
   }
   catch(err) {
    console.error(err)
   }
}

let getBeginersByFilter = async (field, value) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/filter?${field}=${value}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      }
    })
    const beginerByFilter = await response.json()
    console.log(beginerByFilter)
   }
   catch(err) {
    console.error(err)
   }
}

// getBeginersByFilter("state", "sp")
// getBeginersByFilter("name", "lina")

let getBeginerById = async (id) => {
  try {
    const response = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1NTY2NjI0NiwiaWF0IjoxNjU1NjY2MjQ2fQ._72xg8XziqbmYJ6a4RLZjNucJnvpdWzGoBmvlDMEAko"
      }
    })
    const beginerById = await response.json()
    console.log(beginerById)
   }
   catch(err) { 
    console.error(err)
   }
}

getBeginerById("62b4f2cb6332410004fed18a")
