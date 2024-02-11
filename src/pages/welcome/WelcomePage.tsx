import { useNavigate } from "react-router-dom";

export function WelcomePage() {
  const navigator = useNavigate();

  function handleButtonClick() {
    navigator({ pathname: "./editor" });
  }

  return (
    <div className="h-screen bg-gray-700 text-white p-1">
      <h3 className="text-4xl text-center mt-10">GUI Editor</h3>
      <button
        className="block mx-auto my-3 bg-gray-500 px-3 py-1 rounded"
        onClick={handleButtonClick}
      >
        Go To Editor
      </button>
    </div>
  );
}
