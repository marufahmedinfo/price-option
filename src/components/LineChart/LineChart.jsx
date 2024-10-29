import { LineChart as ChartLine, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const marksData = [
        { id: 1, name: "Maruf Rafi", math: 78, physics: 82, chemistry: 75 },
        { id: 2, name: "Rifat", math: 85, physics: 88, chemistry: 80 },
        { id: 3, name: "Arif", math: 90, physics: 92, chemistry: 89 },
        { id: 4, name: "masud", math: 65, physics: 70, chemistry: 68 },
        { id: 5, name: "Rakin", math: 88, physics: 45, chemistry: 50 },
        { id: 6, name: "Shahin", math: 72, physics: 75, chemistry: 74 },
        { id: 7, name: "Lappu", math: 95, physics: 91, chemistry: 35 },
        { id: 8, name: "Joone Engle", math: 68, physics: 65, chemistry: 70 },
        { id: 9, name: "Sala Uddin", math: 81, physics: 78, chemistry: 80 },
        { id: 10, name: "Sabit Hussen", math: 77, physics: 80, chemistry: 76 }
      ];


    return (
        <div>
            <ChartLine width={800} height={400} data={marksData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey={'physics'} stroke="purple"></Line>
            </ChartLine>
        </div>
    );
};

export default LineChart;