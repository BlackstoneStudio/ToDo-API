/* eslint-disable @typescript-eslint/ban-types */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

class Response {
  @ApiProperty()
  status: number;

  @ApiProperty()
  description: string;
}

class ApiResponse {
  status: number;
  description: string;
  type?: Type<unknown> | Function | [Function] | string;
}

class ConstraintsError {
  [key: string]: string;
}

class MessageError {
  @ApiProperty()
  field: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  validation: string;

  @ApiProperty()
  constraints: ConstraintsError;
}

class ValidationError {
  @ApiProperty({ type: [MessageError] })
  errors: Array<MessageError>;
}

export { ApiResponse, ValidationError };
export default Response;
