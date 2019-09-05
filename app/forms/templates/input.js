import React from "react";
import {StyleSheet, View} from "react-native";
import {Input, Icon} from "react-native-elements";

export default (inputTemplate = locals => {
   return ( 
   <View style={styles.viewContainer} > 
    <Input  placeholder= {locals.config.placeHolder}
            password = {locals.config.password}
            secureTextEntry = {locals.config.secureTextEntry}
    />
    </ View>
    );
});

const styles = StyleSheet.create ({
        viewContainer:{
        marginBottom: 12,
        marginTop:12}
})
