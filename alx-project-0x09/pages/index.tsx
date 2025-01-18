import ImageCard from "@/components/common/ImageCard";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import { ImageProps } from "@/interfaces";
import { useState } from "react";


>>>>>>> c19b82e461ca22c41684063fff989be34d6f5a6d

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
<<<<<<< HEAD
=======
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>(
    []
  );
>>>>>>> c19b82e461ca22c41684063fff989be34d6f5a6d
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleGenerateImage = async () => {
<<<<<<< HEAD
    setIsLoading(true);
    const resp = await fetch('/api/generate-image', {
      method: 'POST',
      body: JSON.stringify({
        prompt
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })


    if (!resp.ok) {
      setIsLoading(false)
      return;
    }

    const data = await resp.json()
    setIsLoading(false)
=======
    console.log("Generating Image");
    console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
>>>>>>> c19b82e461ca22c41684063fff989be34d6f5a6d
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
<<<<<<< HEAD
            
            {
              isLoading ? "Loading..." : "Generate Image"
            }
          </button>
        </div>

        {imageUrl && <ImageCard action={() => setImageUrl(imageUrl)} imageUrl={imageUrl} prompt={prompt} />}
=======
            {/* {
              isLoading ? "Loading..." : "Generate Image"
            } */}
            Generate Image
          </button>
        </div>

        {imageUrl && <ImageCard action={() => setImageUrl(imageUrl)} imageUrl={imageUrl} prompt={prompt} width={""} height={""} />}
>>>>>>> c19b82e461ca22c41684063fff989be34d6f5a6d
      </div>
    </div>
  );
};

export default Home;