"use client";

export default function SimpleFloatingButton() {
  const handleClick = () => {
    console.log("FAB clicked!");
    alert("FAB is working!");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
      >
        TEST FAB
      </button>
    </div>
  );
}
