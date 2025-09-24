//** / Navbar **//
import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2">เนื้อหาหลักของหน้าเว็บ</h1>
          <p className="text-gray-700">
            นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar
            ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
          </p>
        </div>
      </main>
    </div>
  );
};
export default App;


// ** ProductCard **//
import React from "react";
import './components/ProductCard'
import ProductCard from "./components/ProductCard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <ProductCard
        imageUrl="./image/Kobe/kobe-4.jpg.avif"
        title="Kobe 4 Protro Mambacita"
        description="Kobe 4 Protro Mambacita ยกย่องให้กับ Gianna Gigi Bryant และเฉลิมฉลองให้สไตล์การเล่นของเธอที่ใฝ่ชัยชนะ ร่าเริง และไม่เหมือนใคร ดีไซน์นี้จะเปิดตัวในวันเกิดปีที่ 17 ของเธอ มาในคู่สีที่สื่อถึงชุดยูนิฟอร์มทีมบาสเก็ตบอลรุ่นเยาวชนที่เธออยู่ ลายตารางรอบส้นสื่อถึงเสื้อสักหลาดที่ Gigi ชอบผูกไว้ที่เอวบ่อยๆ Swoosh ที่พื้นรองเท้าชั้นนอกเป็นสีแดง"
        price={206.25}
        onAddToCart={() => alert("Added Wireless Headphones to cart!")}
      />

            <ProductCard
        imageUrl="./image/Kobe/kobe-5.jpg.avif"
        title="Kobe 5 Protro Bruce Lee"
        description="Kobe 5 Protro Bruce Lee ขอแสดงความอาลัยถึงปรมาจารย์ท่านนี้ด้วยรองเท้าที่มาในคู่สีคลาสสิกจากปี 2010 ส่วนบนสีดำเหลืองกับรอยข่วนสีแดงเป็นการกล่าวขวัญถึงเอกลักษณ์ต่างๆ อันน่าจดจำจากชีวิตการทำงานของท่าน"
        price={228.13}
        onAddToCart={() => alert("Added Wireless Headphones to cart!")}
      />

            <ProductCard
        imageUrl="./image/Kobe/kobe-6.jpg.avif"
        title="Kobe 6 Protro Green Apple"
        description="Kobe 6 Protro ใช้สีตามคู่สีโปรดที่แต่เดิมเปิดตัวในวันคริสต์มาสเมื่อปี 2010 คู่นี้โดดเด่นด้วยส่วนบนที่ได้แรงบันดาลใจจากเกล็ดสัตว์เลื้อยคลานพร้อมสี Lime Green ซึ่งเป็นสีสันขี้เล่นที่ผลิตขึ้นมาใหม่เพื่อตัวตนในแบบ Black Mamba ของ Kobe โดยมาในทรงที่ต่ำลง โฉบเฉี่ยวขึ้น และดูรวดเร็วกว่ารุ่นก่อน"
        price={1134.81}
        onAddToCart={() => alert("Added Wireless Headphones to cart!")}
      />
    </div>
  );
};
export default App;








// import './App.css'

// function App() {
//   return (
//     <h1 className='text-3xl font-bold underline text-red-600'>
//       Hello world
//     </h1>
//   )
// }
// export default App;



// import { useState } from "react";
// import './App.css'

// function App() {
//   return(
//     <>
//       <div className="bg-red-500 p-4 sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500">
//         ปรับสีพื้นหลังตามขนาดจอ
//       </div>

//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 bg-gray-200 p-4">คอลัมน์ 1</div>
//         <div className="w-full md:w-1/2 bg-gray-200 p-4">คอลัมน์ 2</div>
//       </div>

//       <p className="text-sm md:text-base lg:text-lg">
//         ขนาดตัวอักษรเปลี่ยนไปตามขนาดจอ
//       </p>
//     </>
//   )
// }
// export default App;



// import React from "react";
// import Button from "./components/Button";

// const App: React.FC = () => {
//   const handleButtonClick = (type: string) => {
//     alert(`${type} button clickend!`);
//   }
//   return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4">
//             <h1 className="text-3xl font-bold text-gray-800">Button Component Test</h1>

//             <div className="bg-green-200 border border-green-500 text-green-700 p-4 rounded-md mb-6">
//                 If you see this box styled, Tailwind base setup is likely working.
//             </div>

//             <div className="space-x-2">
//                 <Button variant="primary" size="sm" onClick={() => handleButtonClick('Primary SM')}>
//                     Primary SM
//                 </Button>
//                 <Button variant="primary" size="md" onClick={() => handleButtonClick('Primary MD')}>
//                     Primary MD
//                 </Button>
//                 <Button variant="primary" size="lg" onClick={() => handleButtonClick('Primary LG')}>
//                     Primary LG
//                 </Button>
//             </div>

//             <div className="space-x-2 mt-4">
//                 <Button variant="secondary" size="sm" onClick={() => handleButtonClick('Secondary SM')}>
//                     Secondary SM
//                 </Button>
//                 <Button variant="secondary" size="md" onClick={() => handleButtonClick('Secondary MD')}>
//                     Secondary MD (Default Size)
//                 </Button>
//             </div>

//             <div className="space-x-2 mt-4">
//                 <Button variant="danger" size="lg" onClick={() => handleButtonClick('Danger LG')}>
//                     Danger LG
//                 </Button>
//                 <Button variant="danger" size="md" disabled>
//                     Danger Disabled
//                 </Button>
//             </div>

//             <div className="space-x-2 mt-4">
//                 <Button variant="outline" size="md" onClick={() => handleButtonClick('Outline MD')}>
//                     Outline MD
//                 </Button>
//                 <Button variant="outline" size="sm" className="custom-hover-effect"> {/* ตัวอย่างการเพิ่ม custom class */}
//                     Outline SM Custom
//                 </Button>
//             </div>

//             {/* ถ้าไม่ส่ง variant หรือ size จะใช้ค่า default */}
//             <div className="mt-4">
//                 <Button onClick={() => handleButtonClick('Default Button')}>
//                     Default (Primary MD)
//                 </Button>
//             </div>
//         </div>
//     );
// };
// export default App;




