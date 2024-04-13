const Cart = () => {
  return (
    <div className="p-2 m-2 w-8/12 mx-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Food"
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Food Item 1</h2>
                  <p className="text-gray-500">Price: $10.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="text-red-500 focus:outline-none">-</button>
                <span className="mx-2">1</span>
                <button className="text-green-500 focus:outline-none">+</button>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between">
            <p className="text-lg font-semibold">Total: $10.00</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
