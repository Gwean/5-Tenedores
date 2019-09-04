import React from "react";
import {StyleSheet, View} from "react-native";
import {Input, Icon} from "react-native-elements";

export default (inputTemplate = locals => {
   return ( 
   <View> 
    <Input  placeholder= {locals.config.placeholder} 
            password = {locals.config.password}
            secureTextEntry = {locals.config.secureTextEntry}
            />
    </View>
    );
});

const styles =StyleSheet.create({}); 