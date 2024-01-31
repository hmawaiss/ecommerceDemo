import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketScreen from '../screens/BasketScreen';
import ProductListScreen from '../screens/ProductListScreen';
import BasketButton from '../components/BasketButton';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen
                    name="Products"
                    component={ProductListScreen}
                    options={({ navigation }) => ({
                        headerRight: () => <BasketButton onPress={() => navigation.navigate('Basket')} />,
                    })}
                />
                <Stack.Screen name="Basket" component={BasketScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
