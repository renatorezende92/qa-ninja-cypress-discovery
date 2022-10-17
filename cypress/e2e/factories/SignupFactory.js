var faker = require('faker')
var cpf = require('gerador-validador-cpf')
 
export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
             cpf: cpf.generate(),
             email: faker.internet.email(firstName),
             whatsapp: '81999999999',
             address: {
                 postalCode: '50790000',
                 street: 'Rua Leandro Barreto',
                 number: '355',
                 details: 'cond felipe camarao',
                 district: 'Jardim São Paulo',
                 city_state: 'Recife/PE'
             },
             delivery_method: 'Moto',
             cnh: 'cnh-digital.jpg'
         }

         return data

    }

}