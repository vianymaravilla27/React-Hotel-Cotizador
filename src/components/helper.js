


export function obtenerMenores(menores){
    let preciomenores;
    switch(menores){
        case '1':
            preciomenores = 300;
            break;
        case '2':
            preciomenores = 600;
            break;
        case '3':
            preciomenores = 900;
            break;
        default:
    }

    return preciomenores;
}

export function obtenerMayores(adultos){
    let precioadultos;
    switch(adultos){
        case '1':
            precioadultos = 500;
            break;
        case '2':
            precioadultos = 1000;
            break;
        case '3':
            precioadultos = 1500;
            break;
        default:
    }

    return precioadultos;
}