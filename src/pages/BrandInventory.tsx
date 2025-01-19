// ... (keep existing imports)

const BrandInventory = () => {
  // ... (keep existing code until the image section)

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96 bg-gray-100 flex items-center justify-center p-16">
              <img
                src={brandData.image}
                alt={brandData.brand}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">{brandData.brand}</h1>
              </div>
            </div>
            
            {/* ... (keep existing content section) */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandInventory;