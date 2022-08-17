import { Injectable } from '@nestjs/common';
import React from 'react';
// import ReactPDF from '@react-pdf/renderer';
import { response } from 'express';

import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { wrap } from 'module';

@Injectable()
export class AppService {
  async getHello(): Promise<NodeJS.ReadableStream> {
    const pdfStream = await ReactPDF.renderToStream(null);
    response.setHeader('Content-Type', 'application/pdf');
    pdfStream.pipe(response);
    pdfStream.on('end', () => console.log('Done streaming, response sent.'));
    return pdfStream;
  }
}
