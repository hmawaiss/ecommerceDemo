import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

const BasketButton = ({ onPress }: { onPress: () => void }) => {
    const basket = useSelector((state: RootState) => state.basket);

    const basketItemCount = basket.length;

    return (
        <TouchableOpacity onPress={onPress} style={{ marginRight: 10 }}>
            <Text>Basket ({basketItemCount})</Text>
        </TouchableOpacity>
    );
};

export default BasketButton;
