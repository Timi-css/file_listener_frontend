import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import axios from 'axios'

const Dashboard = () => {
        const [fileData, setFiledata] = useState({ total: 0, counts: {} })

        useEffect(() => {
                axios.get('http://localhost:5454/api/files')
                        .then(response => setFiledata(response.data))
                        .catch(error => console.error('Error fetching file data: ', error))
        }, [])

        const chartData = Object.entries(fileData.counts).map(([ext, count]) => ({
                name: ext,
                value: count
        }))

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

        return (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Card>
                                <CardContent>
                                        <Typography variant="h5">Total Files: {fileData.total}</Typography>
                                </CardContent>
                        </Card>
                        <Card>
                                <CardContent>
                                        <Typography variant="h5">File Type Distribution</Typography>
                                        <ResponsiveContainer width="100%" height={300}>
                                                <PieChart>
                                                        <Pie data={chartData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8">
                                                                {chartData.map((entry, index) => (
                                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                ))}
                                                        </Pie>
                                                        <Tooltip />
                                                </PieChart>
                                        </ResponsiveContainer>
                                </CardContent>
                        </Card>
                </Box>
        )
}

export default Dashboard