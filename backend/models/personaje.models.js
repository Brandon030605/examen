import { Schema, model } from "mongoose";

const Esquemabaiken = new Schema({
    name: String,
    genero: String,
    edad: Number,
    es: String

})

export const Modelopersonaje = new model("characters", Esquemabaiken)