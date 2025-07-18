export default function TestPage() {
  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl mb-8">Image Test Page</h1>

      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="border border-gray-500 p-4">
            <h3 className="text-lg mb-2">Image {item}</h3>
            <img
              src={`/images/img${item}.jpg`}
              alt={`Test image ${item}`}
              className="w-full h-48 object-cover bg-gray-800"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
