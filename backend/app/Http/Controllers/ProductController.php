<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Repository\ProductRepository;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Throwable;

class ProductController extends Controller
{
    public $productRepo;
    public function __construct(ProductRepository $productRepo)
    {
        $this->productRepo = $productRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        return $this->productRepo->getProductList($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'  => 'required',
            'price' => 'required|numeric|gt:0',
            'qty'   => 'required|integer|gt:0',
            'image' => 'nullable|image64:jpeg,png,gif,jpg,webp,bmp',
        ]);

        try
        {
            $product              = new Product();
            $product->name        = $request->name;
            $product->price       = $request->price;
            $product->qty         = $request->qty;
            $product->description = $request->description;
            // base64 image
            $image = $request->get('image');

            $imageData = $request->get('image');

            if ($imageData) {

                $fileName = uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
                Image::make($imageData)->resize(null, 470, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->encode('jpg', 70)
                    ->save('image/product/' . $fileName);

                $product->image = $fileName;

            }

            $product->save();
            return $this->successResponse('Product Added');
        } catch (Throwable $th) {
            return $this->errorResponse($th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->productRepo->getProductList($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'  => 'required',
            'price' => 'required|numeric|gt:0',
            'qty'   => 'required|integer|gt:0',
            'image' => 'nullable|image64:jpeg,png,gif,jpg,webp,bmp',
        ]);

        try
        {
            $product->name        = $request->name;
            $product->price       = $request->price;
            $product->qty         = $request->qty;
            $product->description = $request->description;
            // base64 image
            $image = $request->get('image');

            $imageData = $request->get('image');

            if ($imageData) {
                if (file_exists('image/product' . $product->image) && !empty($product->image)) {
                    unlink('image/product' . $product->image);
                }
                $fileName = uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
                Image::make($imageData)->resize(null, 470, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->encode('jpg', 70)
                    ->save('image/product/' . $fileName);

                $product->image = $fileName;

            }

            $product->update();
            return $this->successResponse('Product Updated');
        } catch (Throwable $th) {
            return $this->errorResponse($th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try
        {

            if (file_exists('image/product' . $product->image) && !empty($product->image)) {
                unlink('image/product' . $product->image);
            }

            $product->delete();
            return $this->successResponse('Product Added');
        } catch (Throwable $th) {
            return $this->errorResponse($th->getMessage());
        }
    }
}
