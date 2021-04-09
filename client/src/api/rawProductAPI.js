import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2',
    headers: {
        'x-app-id': '7b14ebd4',
        'x-app-key': 'f27ea0520b4309e18a209cf9aa440e42'
    }
});

// header1
// headers: {
//     'x-app-id': 'f7b33457',
//     'x-app-key': '0c4bce30ca0088e1c732829e9b018c48'
// }

// header2
// headers: {
//     'x-app-id': '7b14ebd4',
//     'x-app-key': 'f27ea0520b4309e18a209cf9aa440e42'
// }