import { ProductInfo } from "@/components/product/ProductInfo";
import { ImageGallery } from "@/components/product/ImageGallery";
import { ColorPicker } from "@/components/product/ColorPicker";
import { SizePicker } from "@/components/product/SizePicker";
import { ProductDetails } from "@/components/product/ProductDetails";
import { Policies } from "@/components/product/Policies";
import { Reviews } from "@/components/product/Reviews";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { AddToCart } from "@/components/product/AddToCart";

export default function HomePage() {
  return (
    <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:col-start-8">
          <ProductInfo />
        </div>

        <ImageGallery />

        <div className="mt-8 lg:col-span-5">
          <div>
            <ColorPicker />
            <SizePicker />
            <AddToCart />
          </div>

          <ProductDetails />
          <Policies />
        </div>
      </div>

      <Reviews />
      <RelatedProducts />
    </main>
  );
}
