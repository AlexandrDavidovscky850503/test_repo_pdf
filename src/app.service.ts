import { Injectable } from '@nestjs/common';
import ReactPDF from '@react-pdf/renderer';
import ShippingMemorandumReport from './test';

const testData: any = {
  header: {
    pmusa_document: 'PMUSA Quality System Document',
    document_name: 'SHIPPING MEMORANDUM/WAREHOUSE RECEIPT',
    reference_number: 0,
    date: '17/08/2022',
    crop_year: '2022',
    tobacco_type: 'BL',
    container_type: 'Z',
    note: 'USE SEPARATE FORMS FOR EACH DIFFERENCE IN THE ABOVE INFORMATION',
    shipper: 'Park 500 PMUSA',
    location: 'CHESTER, VA',
    carrier: 'EPES',
    car_number: '999',
    customer_account: 'PHILIP MORRIS USA P.O. BOX 6603 RICHMOND VA',
    destination: 'consignee3, street, city, Virginia, 0123456789, usa',
    seals_number: '777',
  },
  batches: [
    {
      mark: '8T08139',
      batch_number: '8T08139',
      containers: [
        {
          container_number: 23296,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
        {
          container_number: 23840,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
        {
          container_number: 23843,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
        {
          container_number: 23846,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
        {
          container_number: 23849,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
        {
          container_number: 23852,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
      ],
      gross_weight: 6042,
      tare_weight: 732,
      net_weight: 5310,
    },
    {
      mark: '8U08142',
      batch_number: '8U08142',
      containers: [
        {
          container_number: 21019,
          gross_weight: 1007,
          tare_weight: 122,
          net_weight: 885,
        },
      ],
      gross_weight: 1007,
      tare_weight: 122,
      net_weight: 885,
    },
  ],
  footer: {
    shipment_number: '0809_002_RLBD',
    shipping_signature: null,
    pk_fo: 'PK-FO-015-001',
    rev: 'Rev. 1.1',
    date: '17/08/2022',
    document_owner: 'Document Owner: Park 500 Production',
  },
};
@Injectable()
export class AppService {
  async getHello(): Promise<NodeJS.ReadableStream> {
    const pdfStream = await ReactPDF.renderToStream(
      ShippingMemorandumReport({ data: testData }),
    );
    return pdfStream;
  }
}
