// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";


export default class DatesController {
  async submit({ request, session, response, view }) {
    console.log(request.body());
    const coverImage = request.file("photo", {
      size: "2mb",
      extnames: ["jpg", "png", "gif"],
    });
    if (!coverImage.isValid) {
      return coverImage.errors;
    }
    // console.log(coverImage);

    if (coverImage) {
      // await coverImage.move(Application.tmpPath("uploads"));
      await coverImage.moveToDisk("./");
    }
    const fileName = coverImage.fileName;
    console.log(fileName);
    let pic = "http://127.0.0.1:3001/uploads/" + fileName;

    let data = request.body();
    // const users = await User.query().insert(
    //   { fname: data.fname },
    //   { lname: data.lname },
    //   { email: data.email },
    //   { password: data.password },
    //   { dob: data.dob },
    //   { qualification: data.qualification }
    // );
    // const rows = Database.table("users").insert({
    //   fname: data.fname,
    //   lname: data.lname,
    //   email: data.email,
    //   password: data.password,
    //   dob: data.dob,
    //   qualification: data.qualification,
    // });
    //   .table('users') // 👈 gives an instance of insert query builder
    // .insert({ username: 'virk', email: 'virk@adonisjs.com' })
    await Database.table("users") // 👈 gives an instance of insert query builder
      .insert({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        dob: data.dob,
        password: data.password,
        qualification: data.qualification,
        profile_pic: pic,
      });
    // return view.render("pages/project9");
    response.redirect().toRoute("users.show");
  }
}
