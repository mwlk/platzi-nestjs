import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('')
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products ${limit}, ${offset} and brand ${brand}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      body: payload,
    };
  }
}
