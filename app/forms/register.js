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
export const RegisterOptions = {
    fields:{
        name:{
            template: inputTemplate,
            config: {
                placeHolder: "Nombre(s) y Apellido(s)",
                iconName: "user-circle",
                iconType:"font-awesome"
            }

        },

        email:{
            template: inputTemplate,
            config: {
            placeHolder: "TuEmail@Algo.com",
            iconName: "envelope",
            iconType:"font-awesome"
            }
            
        },

        password:{
            template: inputTemplate,
            config: {
                placeHolder: "Constraseña",
                password:true,
                secureTextEntry: true,
                iconName: "lock",
                iconType:"font-awesome"
                }
            
        },
        
        passwordConfirmation:{
            template: inputTemplate,
            config: {
                placeHolder: "Repita Constraseña",
                password:true,
                secureTextEntry: true,
                iconName: "lock",
                iconType:"font-awesome"
                }
        }
    }
}
