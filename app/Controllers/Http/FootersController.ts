// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FootersController {
    async home({ request, session,response, view }) {
        response.redirect().toRoute('home_show');
    }
}
