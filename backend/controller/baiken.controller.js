import { Modelopersonaje } from "../models/personaje.models.js";

Modelopersonaje.create({
    name: "baiken",
    genero: "mujer",
    edad: 35,
    es: "samurai"
},
{
 name: "leona",
 genero:"mujer",
 edad: 20,
 es: "soldado"

},
{
    name: "goku",
    genero:"hombre",
    edad: 30,
    es:"taquero"
   
   },
   {
    name: "vegeta",
    genero:"hombre",
    edad: 40,
    es:"trabaja en el ciber"
   
   },
   {
    name: "pocoyo",
    genero:"hombre",
    edad: 10,
    es:"trabaja en burger king"
   
   },
)

export const test = ()=> {
    console.log("funciona bien")
}