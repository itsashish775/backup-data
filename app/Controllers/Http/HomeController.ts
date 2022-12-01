// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    async project1({ request, session, view }) {
        return view.render("pages.project1");
    }
    async project2({ request, session, view }) {
        return view.render("pages.project2");
    }
    async project3({ request, session, view }) {
        return view.render("pages.project3");
    }
    async project4({ request, session, view }) {
        return view.render("pages.project4");
    }
    async project5({ request, session, view }) {
        return view.render("pages.project5");
    }
    async project6({ request, session, view }) {
        return view.render("pages.project6");
    }
    async project7({ request, session, view }) {
        return view.render("pages.project7");
    }
    async project8({ request, session, view }) {
        return view.render("pages.project8");
    }
    async project9({ request, session, view }) {
        return view.render("pages.project9");
    }
}
