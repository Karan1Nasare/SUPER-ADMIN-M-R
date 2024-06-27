import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AreaChartLayout = () => {
  const data = [
    { name: 'Jan', Student: 60000, Staff: 30000 },
    { name: 'Feb', Student: 50000, Staff: 40000 },
    { name: 'Mar', Student: 40000, Staff: 35000 },
    { name: 'Apr', Student: 55000, Staff: 50000 },
    { name: 'May', Student: 60000, Staff: 45000 },
    { name: 'Jun', Student: 70000, Staff: 55000 },
    { name: 'Jul', Student: 65000, Staff: 50000 },
    { name: 'Aug', Student: 60000, Staff: 45000 },
    { name: 'Sep', Student: 70000, Staff: 50000 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-secondary__fill p-3 rounded-lg text-white'>
          {payload.map((item, index) => (
            <div
              key={index}
              className='flex flex-col text-xs font-semibold whitespace-nowrap rounded-lg shadow-2xl bg-slate-900 max-w-[147px]'
            >
              <div className='flex gap-2 px-3 pt-1.5 pb-1'>
                <div
                  className={`shrink-0 my-auto w-2 h-2 rounded-lg`}
                  style={{ backgroundColor: item.color }}
                />
                <div className='flex-1 text-white text-start'>
                  {item.dataKey}
                </div>
                <div className='self-start text-gray-400'>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderDot = props => {
    const { cx, cy, stroke, index } = props;
    if (index === Math.floor(data.length / 2)) {
      return (
        <g>
          {/* Outer white circle */}
          <circle
            cx={cx}
            cy={cy}
            r={6}
            fill='#fff'
            stroke={stroke}
            strokeWidth={2}
          />
          {/* Inner colored dot */}
          <circle cx={cx} cy={cy} r={3} fill={stroke} />
        </g>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorStudent' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#635BFF' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#635BFF' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorStaff' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#FF6692' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#FF6692' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey='name' />
        <YAxis />
        <CartesianGrid stroke='rgba(255, 255, 255, 0.02)' />
        <Legend
          verticalAlign='top'
          align='right'
          iconType='circle'
          iconSpacing={20}
          margin={{ bottom: 10 }}
        />
        <Area
          type='monotone'
          dataKey='Student'
          stroke='#635BFF'
          activeDot={{ r: 8 }}
          fill='url(#colorStudent)'
          dot={renderDot}
        />
        <Area
          type='monotone'
          dataKey='Staff'
          stroke='#FF6692'
          fill='url(#colorStaff)'
          dot={renderDot}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartLayout;
