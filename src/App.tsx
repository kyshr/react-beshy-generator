import { useState } from "react";

function App() {
    const [beshy, setBeshy] = useState("");

    const handleBeshyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.target.value.trim().replaceAll(" ", "🤸");
        setBeshy(value);
    };
    return (
        <>
            <div className="w-full min-h-screen font-poppins bg-[#F5F7F7] flex items-center justify-center">
                <div className="space-y-8 w-full max-w-lg px-3">
                    <p className="min-[380px]:text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-blue-700">
                        🤸 Beshy Generator 🤸
                    </p>
                    <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none w-full p-3"
                        placeholder="Enter beshy message"
                        onChange={handleBeshyChange}
                    />
                    <p className="text-md md:text-2xl font-medium text-center">
                        <span>{beshy}</span>{" "}
                        {beshy ? (
                            <button
                                className="bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 rounded text-xs p-1"
                                onClick={() => {
                                    navigator.clipboard.writeText(beshy);
                                }}>
                                Copy
                            </button>
                        ) : null}
                    </p>
                    <p className="text-xs text-gray-300 text-center">
                        Made with ❤️ by Kyle Joseph Timajo
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
