import * as React from "react";
import { NavigationCotainer } from "@react-navigation/native";
import DrawerNavigator from "../navigation/DrawerNavigator";

export default function DashboardScreen() {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}