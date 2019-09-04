import React from "react";
import { Icon } from 'react-native-elements'

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from "react-navigation";

//Screens

import HomeScreen from "../screens/home";
import TopFiveScreen from "../screens/topfive";
import SearchScreen from "../screens/search";
import MyAccountScreen from "../screens/myAccount/myaccount";
import RegisterScreen from "../screens/myAccount/register";

const HomeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title:"Home"
        })
    } 
});
const TopFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({ navigation }) => ({
            title:"Top 5 Restaurantes"
        })
    } 
});
const SearchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            title:"Buscar"
        })
    } 
});
const MyAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({ navigation }) => ({
            title:"Mi Perfil"
        })
    }, 
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({navigation}) => ({
            title: "Sign In"
        })
    }
});



const RootStack = createBottomTabNavigator ({
    Home: {
        screen: HomeScreenStack,
        navigationOptions : ({ navigation }) => ({
            tabBarLabel: "Home",
                tabBarIcon: ({ tintColor}) => (
                    <Icon 
                        name='home'
                        color={tintColor}/>
                )
            
            })

        },
    TopFive: {
            screen: TopFiveScreenStack,
            navigationOptions : ({ navigation})=>({
                tabBarLabel: "Top 5 Restaurantes",
                tabBarIcon: ({ tintColor}) => (
                    <Icon 
                        name='grade'
                        color={tintColor}/>
                )
            }) 
        }, 
    Search: {
        screen: SearchScreenStack,
        navigationOptions : ({ navigation})=>({
            tabBarLabel: "Buscar",
            tabBarIcon: ({ tintColor}) => (
                <Icon 
                    name='search'
                    color={tintColor}/>
            )
        }) 
    }, 
    TopFive: {
        screen: TopFiveScreenStack,
        navigationOptions : ({ navigation})=>({
            tabBarLabel: "Top 5 Restaurantes",
            tabBarIcon: ({ tintColor}) => (
                <Icon 
                    name='grade'
                    color={tintColor}/>
            )
        }) 
    }, 
    MyAccount: {
        screen: MyAccountScreenStack,
        navigationOptions : ({ navigation})=>({
            tabBarLabel: "Mi Perfil",
            tabBarIcon: ({ tintColor}) => (
                <Icon 
                    name='face'
                    color={tintColor}/>
            )
        }) 
    }
},
{
        initialRouteName: "MyAccount", 
        order: ["Home", "TopFive", "Search", "MyAccount"]
    }
  );

export default createAppContainer (RootStack);