import React, {Component} from "react"; 
import { StyleSheet, View } from 'react-native'
import t from "tcomb-form-native";
const Form = t.form.Form;
import {RegisterStruct, RegisterOptions} from "../../forms/register";
import {Button, Text} from "react-native-elements";
export default class Register extends Component {
   
    constructor (){
        super();

        this.state = {
            formData:{
            name: "",
            email: "",
            password: "", 
            passwordConfirmation: ""
            },
            formErrorMessage: "Error"
        };
    }

    register = () => {
        const {password, passwordConfirmation} = this.state.formData;

        if (password === passwordConfirmation){
        const validate = this.refs.registerForm.getValue();
            if (validate) {
                console.log ("Formulario Correcto");
            }
            else console.log ("Formulario Invvalido");
        } 
        else console.log  ("Las contrasenas no son iguales");
        
    };

    onChangeFormRegister = (formValue) => {
        this.setState({
            formData: formValue
        });
        console.log(this.state.formData);
    }
    render(){
        const {formErrorMessage} = this.state;

        return (
            <View style={styles.viewBody}>
                <Form
                ref="registerForm"
                type={RegisterStruct}
                options={RegisterOptions}
                value= {this.state.formData}
                onChange= {(formValue) => this.onChangeFormRegister(formValue)}
                />
                <Button 
                buttonStyle={styles.buttonRegisterContainer}
                title="Unirse" 
                onPress= {() =>this.register() }/>
                <Text>
                    {formErrorMessage}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewBody : {
        flex:1,
        marginLeft:40,
        marginRight:40,
        justifyContent:'center'
    },
    buttonRegisterContainer :{
        backgroundColor: "#00a680",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
})