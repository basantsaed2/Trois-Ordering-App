import React, { useState } from "react";
import m1 from "../../assets/Images/menu_one.jpg";
import m2 from "../../assets/Images/menu_two.jpg";
import m3 from "../../assets/Images/menu_three.jpg";
// import m4 from "../../assets/Images/m.jpeg";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon

const menuImages = [m2, m3,m1,];

const NewMenuPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {menuImages.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`menu-item-${index}`}
            className="w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => setSelectedImage(src)}
          />
        </div>
      ))}

      {/* Fullscreen Image View */}
      {selectedImage && (
        <div className="fixed inset-0 p-4 flex items-center justify-center bg-black bg-opacity-80 z-50">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <AiOutlineClose size={24} />
          </button>

          <img src={selectedImage} className="max-w-full max-h-full rounded-lg" alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default NewMenuPage;
