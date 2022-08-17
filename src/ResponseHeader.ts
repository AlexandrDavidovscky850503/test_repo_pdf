import { createParamDecorator } from '@nestjs/common';
import { CustomParamFactory } from '@nestjs/common/interfaces';
import { Request } from 'express';

export const ResponseHeader = createParamDecorator(((_data, req) => {
  return req.res.set.bind(req.res);
}) as CustomParamFactory<string, Request, HeaderFunction>);

export type HeaderFunction = (
  name: string,
  value: number | string | string[],
) => void;
