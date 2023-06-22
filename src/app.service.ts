import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  //getCarga(): double {
  //}
  }
  //SELECT
  // UNIDADE
  // , ID_CARGA_TRANSPORTE
  //  FROM
  //  COMMAV.CMV_CARGA_EXPORTAR_RP_SAP
  //  WHERE
  //  DATA_CARGA = :Str_data_Carga
  //  AND TRIP_NUMBER = :transporte_id;
}
