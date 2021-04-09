import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export const Pievisual = () => {

    const data = [
        { name: "Fruits", value: 20 },
        { name: "Vegetables", value: 30 },
        { name: "Grains", value: 25 },
        { name: "Proteins", value: 25 }
    ];

    const COLORS = ["#d5ecc2", "#98ddca", "#ffaaa7", "#ffd3b4"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={80}
                outerRadius={170}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}


export default Pievisual;
