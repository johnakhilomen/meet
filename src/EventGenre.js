import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const getData = (events = []) => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  const data = genres.map((genre) => {
    const relevantEvents = events.filter(({ summary }) => {
      const words = summary.split(" ");
      return words.some(word => word.indexOf(genre) >= 0)
    });
    
    return { name: genre, value: relevantEvents.length };
  })
  return data.filter((data) => data.value >= 1);
};

const EventGenre = ({ events }) => {
  const colors = ['#e3fdfd', '#cbf1f5', '#a6e3e9', '#71c9ce', '#30e3ca']
  const data = getData(events);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % colors.length]}
            name={entry.name}
          />
        ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;