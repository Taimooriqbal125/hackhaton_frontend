import React, { useState } from "react";
import { CloudUpload, ImagePlus, Loader2 } from "lucide-react";

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Image uploaded and sent for analysis!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl transition-transform duration-500 hover:scale-[1.02]">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Upload Location Photo for Disaster Detection
        </h1>

        <div className="border-4 border-dashed border-blue-300 rounded-xl p-8 text-center hover:bg-blue-50 transition duration-300">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-64 object-contain rounded-lg shadow-lg"
            />
          ) : (
            <div className="text-gray-500">
              <ImagePlus className="mx-auto h-16 w-16 mb-4 text-blue-400" />
              <p>Drag & drop your image here or click to upload</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="opacity-0 absolute inset-0 cursor-pointer"
          />
        </div>

        {image && (
          <button
            onClick={handleUpload}
            className="mt-6 w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
          >
            {loading ? <Loader2 className="animate-spin" /> : <CloudUpload />} Upload Image
          </button>
        )}
      </div>
    </div>
  );
}
