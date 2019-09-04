import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/validation.js";
import inputTemplate from "./templates/input.js";

export const RegisterStruct = t.struct ({
    name: t.String,
    email:formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password
});

export const RegisterOptions ={
    fields:{
        name:{
            label:"Nombre (*)",
            placeHolder: "Nombre(s) y Apellido(s)",
            error: "Nombre Invalido" 


        },
        email:{
            label: "Email(*)",
            placeHolder: "TuEmail@Algo.com",
            error:"Email Invalido", 
            
        },
        password:{
            label:"Constraseña (*)",
            placeHolder:"Constraseña",
            error: "Contraseña Invalida",
            password:true,
            secureTextEntry: true
        },
        passwordConfirmation:{
            label: "Repetir Contraseña (*)",
            placeHolder: "Constraseña",
            error: "Contraseña Invalida",
            password:true,
            secureTextEntry: true
        }
    }
}