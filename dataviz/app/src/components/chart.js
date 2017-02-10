import React from 'react'
import { XAxis, LineChart, Tooltip, CartesianGrid, Line } from 'recharts'

const defaultData = [
      {name: 'CPI66Q1', uv: 4000, pv: 2400, amt: 2400},
      {name: 'CPI66Q2', uv: 3000, pv: 1398, amt: 2210},
      {name: 'CPI66Q3', uv: 2000, pv: 9800, amt: 2290},
      {name: 'CPI66Q4', uv: 2780, pv: 3908, amt: 2000},
      {name: 'CPI67Q1', uv: 1890, pv: 4800, amt: 2181},
      {name: 'CPI67Q2', uv: 2390, pv: 3800, amt: 2500},
      {name: 'CPI67Q3', uv: 3490, pv: 4300, amt: 2100},
      {name: 'CPI67Q4', uv: 3490, pv: 4300, amt: 2100},
];

const Chart = ({}) => (
  <LineChart
    width={1000}
    height={600}
    data={defaultData}
    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
  >
    <XAxis dataKey='name' />
    <Tooltip />
    <CartesianGrid stroke='#f5f5f5' />
    <Line type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0} />
    <Line type='monotone' dataKey='pv' stroke='#387908' yAxisId={1} />
  </LineChart>
)

export default Chart

import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
