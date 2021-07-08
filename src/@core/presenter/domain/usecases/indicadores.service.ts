import { IndicadorContract } from "../contracts/indicador.contract";
import { IndicadorByTypeEntity, IndicadorEntity } from "../entity/indicador.entity";

export class IndicadoresService {
    constructor(private indicadoresRepo: IndicadorContract) {};

    /**
     * @author Alexis Noriega
     * @description Funcion para obtener todos los indicadores
     * @returns 
     */
    async getIndicadores(): Promise<IndicadorEntity[]> {
        try {
            return await this.indicadoresRepo.getIndicadores();
        } catch (error) {
            console.log('***** Error IndicadoresService -> getIndicadores *****', error.message);
            throw new Error(error);
        }
    }

    async getIndicadoresByType(type: string): Promise<IndicadorByTypeEntity[]> {
        try {
            return await this.indicadoresRepo.getIndicadoresByType(type);
        } catch (error) {
            console.log('***** Error IndicadoresService -> getIndicadoresByType *****', error.message);
            throw new Error(error);
        }
    }
}