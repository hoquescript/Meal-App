import React from 'react';
import { View, Text } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
const headerButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent = {Ionicons}
            iconSize = {23} 
            color = '#fff'
        />
    )
}

export default headerButton;
