import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    // Sử dụng hàm Date() của javascript để lấy thời gian hiện tại
    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    const clockNumbers = Array.from({ length: 12 }, (_, i) => {
        const number = i + 1;
        const angle = (number * 30 - 90) * (Math.PI / 180);
        const radius = 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return { number, x, y };
    });

    // Side Effect để cập nhật thời gian mỗi giây
    useEffect(() => {
        setMounted(true);

        const interval = setInterval(() => {
            setTime(new Date());
        }, 500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // kiểm tra xem component đã được mount chưa
    if (!mounted) {
        return null;
    }

    // tính góc quay của các kim đồng hồ
    const getRotation = (unit: number, max: number) => (unit / max) * 360;

    const secondsRotation = getRotation(time.getSeconds(), 60);
    const minutesRotation =
        getRotation(time.getMinutes(), 60) + secondsRotation / 60;
    const hoursRotation =
        getRotation(time.getHours() % 12, 12) + minutesRotation / 12;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative w-64 h-64 border-4 border-gray-800 rounded-full flex items-center justify-center bg-white">
                {/* Vạch phân chia phút, mỗi vạch cách 5 phút */}
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-gray-600"
                        style={{
                            width: i % 5 === 0 ? "2px" : "1px",
                            height: i % 5 === 0 ? "10px" : "5px",
                            transform: `rotate(${i * 6}deg) translateY(-120px)`,
                        }}
                    ></div>
                ))}

                {/* Số chỉ trên mặt đồng hồ */}
                {clockNumbers.map(({ number, x, y }) => (
                    <div
                        key={number}
                        className="absolute text-gray-800 font-bold text-sx"
                        style={{
                            transform: `translate(${x * 1.3}px, ${y * 1.3}px)`,
                        }}
                    >
                        {number}
                    </div>
                ))}

                {/* Tâm đồng hồ */}
                <div className="absolute w-2 h-2 bg-black rounded-full z-10"></div>

                {/* Kim giờ */}
                <div
                    className="absolute bg-black rounded-full"
                    style={{
                        width: "4px",
                        height: "45px",
                        transformOrigin: "bottom center",
                        transform: `translateY(-22px) rotate(${hoursRotation}deg)`,
                        transition: "transform 300ms linear",
                    }}
                ></div>

                {/* Kim phút */}
                <div
                    className="absolute bg-gray-700 rounded-full"
                    style={{
                        width: "3px",
                        height: "60px",
                        transformOrigin: "bottom center",
                        transform: `translateY(-30px) rotate(${minutesRotation}deg)`,
                        transition: "transform 200ms linear",
                    }}
                ></div>

                {/* Kim giây */}
                <div
                    className="absolute bg-red-500 rounded-full"
                    style={{
                        width: "2px",
                        height: "70px",
                        transformOrigin: "bottom center",
                        transform: `translateY(-35px) rotate(${secondsRotation}deg)`,
                        transition:
                            "transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1)",
                        //"transform 1s linear", //kim giây chuyển động đều mà không bị khựng
                    }}
                ></div>
            </div>
        </div>
    );
}

export default App;
