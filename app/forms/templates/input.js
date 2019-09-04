import React from "react-native";
import {StyleSheet, View} from "react-native";
import {Input, Icon} from "react-native-elements";

export default (inputTemplate = locals => {
   return ( 
   <View> 
    <Input placeholder= "Texto"
        />
    </View>
    );
});

const styles =StyleSheet.create({}); 