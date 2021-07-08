import { IndicadorByTypeEntity, IndicadorEntity } from "@presenter/domain/entity/indicador.entity";
import { IndicadoresService } from "@presenter/domain/usecases/indicadores.service";
import { IndicadoresAxiosRepo } from "../repositories/indicadores.axios.repo";

const indicadoresRepo = new IndicadoresAxiosRepo();
const indicadoresService = new IndicadoresService(indicadoresRepo);

export class IndicadoresController {

    async getIndicadores(): Promise<IndicadorEntity[]> {
        try {
            return await indicadoresService.getIndicadores();
        } catch (error) {
            console.log('***** Error IndicadoresController -> getIndicadores *****', error.message);
            throw new Error(error);
        }
    }

    async getIndicadoresByType(type: string): Promise<IndicadorByTypeEntity[]> {
        try {
            return await indicadoresService.getIndicadoresByType(type);
        } catch (error) {
            console.log('***** Error IndicadoresController -> getIndicadoresByType *****', error.message);
            throw new Error(error);
        }
    }
}