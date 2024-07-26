function useButton(colorType) {
    let buttonStyle = {
        red : "bg-red-600 rounded-lg text-white shadow-lg outline-none px-3 py-1 ",
        green :"bg-green-500 rounded-xl text-white shadow-lg outline-none px-3 py-1",
        yellow : "bg-yellow-500 rounded-xl text-white shadow-lg outline-none px-3 py-1",
        black : "bg-black rounded-xl text-white shadow-lg outline-none px-3 py-1",
        pink : "bg-pink-500 rounded-xl text-white shadow-lg outline-none px-3 py-1",
        blue : "bg-blue-400 rounded-xl text-white shadow-lg outline-none px-3 py-1",
        purple : "bg-purple-500 rounded-xl text-white shadow-lg outline-none px-3 py-1",
    }
    return buttonStyle[colorType] || ""

}
export default useButton;