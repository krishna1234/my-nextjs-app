// pages/index.js
"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicTable = dynamic(() => import("../components/DynamicTable"), {
    ssr: false,
});

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt"
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data Table</h1>
            <DynamicTable data={data} />
        </div>
    );
};

export default Home;
