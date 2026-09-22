'use client'

import { BookContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import { Bar, BarChart, BarShapeProps, CartesianGrid, Label, LabelList, LabelProps, Tooltip, XAxis, YAxis } from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// #region Sample data
// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
}

const ReadingChartPage = () => {
    const { readBook } = useContext(BookContext);

    const data = readBook.map((book: IBookType, indx: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: indx + 1,
            amt: indx + 1,

        }
    })
    return (
        <div>
            {
                readBook.length > 0 ?
                    <BarChart
                        style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={data}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid />
                        <Tooltip cursor={{ fillOpacity: 0.5 }} />
                        <XAxis dataKey="name" />
                        <YAxis width="auto" />
                        <Bar dataKey="uv" shape={TriangleBar} activeBar>
                            <LabelList content={CustomColorLabel} position="top" />
                        </Bar>
                        {/* <RechartsDevtools /> */}
                    </BarChart>
                    :
                    <div>
                        <p className='text-lg font-bold text-center'>No data to show on the chart</p>
                        <p className='text-center'>Read books and mark as read to display them on this chart</p>
                    </div>
            }
        </div>
    );
};

export default ReadingChartPage;