import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => {
    return (<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        {children}
    </TouchableWithoutFeedback>
    )
}

export default DismissKeyboard;