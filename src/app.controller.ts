import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { HeaderFunction, ResponseHeader } from './ResponseHeader';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(
    @ResponseHeader() header: HeaderFunction,
    @Res() res: Response,
  ): Promise<void> {
    const document: NodeJS.ReadableStream = await this.appService.getHello();
    header('Content-Type', 'application/pdf');
    //header("Content-Disposition", `attachment; filename="${picklist.name.toUpperCase().trim()}${reportDate}.pdf"`);
    document.pipe(res);
  }
}
