import axios from "axios";
import R from "ramda";

import { IndicadorContract } from "@presenter/domain/contracts/indicador.contract";
import { IndicadorByTypeEntity, IndicadorEntity } from "@presenter/domain/entity/indicador.entity";

export class IndicadoresAxiosRepo implements IndicadorContract {

    async getIndicadores(): Promise<IndicadorEntity[]> {
        try {
            const request: any = await axios.get('https://mindicador.cl/api');
            let newData: any = []
            Object.keys(request.data).map((key) => {
                if (key !== 'version' && key !== 'autor' && key !== 'fecha') {
                    newData.push({ name: key, data: request.data[key] })
                }
            })
            const sortByNameCaseInsensitive: any = R.sortBy(R.compose(R.toLower, R.prop('name')));
            return sortByNameCaseInsensitive(newData);
        } catch (error) {
            console.log('***** Error IndicadoresAxiosRepo -> getIndicadores *****', error.message);
            throw new Error(error);
        }
    }
    
    async getIndicadoresByType(type: string): Promise<IndicadorByTypeEntity[]> {
        try {
            const request: any = await axios.get(`https://mindicador.cl/api/${type}`);
            return request.data.serie
        } catch (error) {
            console.log('***** Error IndicadoresAxiosRepo -> getIndicadoresByType *****', error.message);
            throw new Error(error);
        }
    }

}