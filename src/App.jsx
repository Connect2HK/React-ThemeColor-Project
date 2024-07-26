import { useState } from "react";
import Button from "./Buttons/Button";

function App() {
  let [useColor, setColor] = useState("aqua")
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: useColor }}
      >
        <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-md shadow-lg rounde-md">
            <Button
              onClick={() => setColor("red")}
              text="Red" colorType="red" />
            <Button
              onClick={() => setColor("green")}
              text="Green" colorType="green" />
            <Button
              onClick={() => setColor("yellow")}
              text="Yellow" colorType="yellow" />
            <Button
              onClick={() => setColor("pink")}
              text="Pink" colorType="pink" />
            <Button
              onClick={() => setColor("black")}
              text="Black" colorType="black" />
            <Button
              onClick={() => setColor("purple")}
              text="Purple" colorType="purple" />
            <Button
              onClick={() => setColor("blue")}
              text="Blue" colorType="blue" />
          </div>
        </div>

      </div>
    </>
  )
}
export default App;