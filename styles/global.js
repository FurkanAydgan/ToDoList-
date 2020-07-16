import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        fontSize: 25,
    }
    ,
    titleText: {
        fontFamily: 'Fondamento-Italic',
        fontSize: 22,
        color: '#333'
    }
    ,
    paragraf: {
        marginVertical: 8,
        fontSize: 22,
        lineHeight: 20,
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    },

    Header: {
        fontSize: 29,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 18,
        fontSize: 18,
        borderRadius: 6,
    },

    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'

    }

});

export const Images = {

    ratings: {
        '1': require('../assets/rating-1.png'),

        '2': require('../assets/rating-2.png'),

        '3': require('../assets/rating-3.png'),

        '4': require('../assets/rating-4.png'),

        '5': require('../assets/rating-5.png'),

    }

}

