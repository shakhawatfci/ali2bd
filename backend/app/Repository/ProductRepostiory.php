<?php

namespace App\Repository;

use App\Http\Resources\ProductResource;
use App\Models\Product;

class ProductRepository
{
    public function getProductList($data)
    {
        $per_page = 12;
        if ($data['per_page']) {
            $per_page = $data['per_page'];
        }
        $product = Product::orderBy('updated_at', 'desc');
        if ($data['keyword'] != '') {
            $product->where('name', 'LIKE', '%' . $data['keyword'] . '%');
        }
        if ($data['order_by_price'] != '') {
            $product->orderBy('price', $data['order_by']);
        }

        if ($data['no_paginate']) {
            if ($data['take_only']) {
                $product->take($data['take_only']);
            }

            $product = $product->get();
        } else {
            $product = $product->paginate($per_page);
        }

        return ProductResource::collection($product);
    }

    public function getSingleProduct($id)
    {
        $product = Product::find($id);
        return new ProductResource($product);
    }
}
