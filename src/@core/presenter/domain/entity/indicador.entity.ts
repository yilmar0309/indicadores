export interface IndicadorEntity {
    name: string;
    data: Data
    
}

interface Data {
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: string;
}

export interface IndicadorByTypeEntity {
    fecha: string;
    valor: string;
}