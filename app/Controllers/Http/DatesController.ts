// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class DatesController {
  async submit({ request, session, view }) {
    // return view.render("pages/project1");
    // console.log(request.body());
    let data = request.body();
    const users = await User.query().insert(
      { fname: data.fname },
      { lname: data.lname },
      { email: data.email },
      { password: data.password },
      { dob: data.dob },
      { qualification: data.qualification }
    );
  }
}
