import { product } from "@/data";

export function ProductDetails() {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>

        <div
          className="prose prose-sm mt-4 text-gray-500"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8">
        <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

        <div className="prose prose-sm mt-4 text-gray-500">
          <ul role="list">
            {product.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
