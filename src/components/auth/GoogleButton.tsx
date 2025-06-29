export default function GoogleButton() {
  return (
    <button
      className="w-full cursor-pointer border border-gray-300 rounded-md py-2 flex justify-center items-center gap-2 hover:bg-gray-50 transition"
      type="button"
    >
      <img src="https://icon2.cleanpng.com/20240216/yhs/transparent-google-logo-google-logo-with-colorful-letters-on-black-1710875297222.webp" alt="Google" className="h-5 w-5" />
      <span className="text-sm text-gray-700">Continue with Google</span>
    </button>
  );
}
