const reservas = [
    {
        nome: 'Bruno Brás 1',
        telemovel: '912813460',
        email: 'bmabras@gmail.com',
        hora: '20:30',
        nrPessoas: 2
    },
    {
        nome: 'Bruno Brás 2',
        telemovel: '912813460',
        email: 'bmabras@gmail.com',
        hora: '20:30',
        nrPessoas: 2

    },
    {
        nome: 'Bruno Brás 3',
        telemovel: '912813460',
        email: 'bmabras@gmail.com',
        hora: '20:30',
        nrPessoas: 2

    },
    {
        nome: 'Bruno Brás 4',
        telemovel: '912813460',
        email: 'bmabras@gmail.com',
        hora: '20:30',
        nrPessoas: 2

    },
]

function listar(dados) {
    // Recebe o pointer para o container onde colocar os dados
    const container = document.querySelector('#lista')


    // Variavel de buffer, que recebe as tags html para as colocar no container
    let buffer = []


    for (i = 0; i < dados.length; i++) {
        var str =`
            < a href = "#" class="list-group-item list-group-item-action " aria - current="true" >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${dados[i].nome}</h5>
          <small>${dados[i].nome}</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">email</p>
          <small>Nr Pessoas</small>
        </div>
        <small>Telemovel</small>
      </a > `
        console.log(dados[i].nome)

    }

}

listar(reservas)