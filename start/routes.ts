/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("home");
Route.get("project1", "HomeController.project1");
Route.get("project2", "HomeController.project2");
Route.get("project3", "HomeController.project3");
Route.get("project4", "HomeController.project4");
Route.get("project5", "HomeController.project5");
Route.get("project6", "HomeController.project6");
Route.get("project7", "HomeController.project7");
Route.get("project8", "HomeController.project8");
Route.get("project9", "HomeController.project9");
Route.get("signup", "HomeController.showsignup");
Route.post("submit", "DatesController.submit");
