import React, { useEffect, useState } from 'react'
import {
  AreaChart, XAxis, YAxis,
  CartesianGrid, Tooltip, Area
} from 'recharts'
import { Typography } from '@material-ui/core'

export type StockProps = {
  data: {
    name: string
    value: number
  }[]
}

const MAX_WIDTH = 630

const Stock: React.FC<StockProps> = ({ data }) => {
  const [width, setWidth] = useState(MAX_WIDTH)
  useEffect(() => {
    const listener = () => setWidth(
      document.body.offsetWidth > MAX_WIDTH ? MAX_WIDTH : (document.body.offsetWidth - 40)
    )
    window.addEventListener('resize', listener)
    listener()
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography variant='h5'>Rutabaga Price Trend</Typography>
      <AreaChart width={width} height={250} data={data}>
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8}/>
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0}/>
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8}/>
            <stop offset='95%' stopColor='#82ca9d' stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey='name'/>
        <YAxis/>
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <Area
          type='monotone' dataKey='value' stroke='#8884d8' fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </div>
  )
}

export default Stock
