import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import style from './Chart.module.scss'
import { useDashboard } from '../context';

function Chart({ mini }) {
  const { state } = useDashboard();
  const warn = state.filter((msg) => msg.level === 'warn');
  const error = state.filter((msg) => msg.level === 'error');
  const status = state.filter((msg) => msg.level === 'status');
  const wPercent = warn.length / state.length || 0;
  const ePercent = error.length / state.length || 0;
  const sPercent = status.length / state.length || 0;

  return (
    <PieChart
      className={mini ? style.small : style.big}
      data={[
        { title: 'warn', value: wPercent, color: '#3f51b5' },
        { title: 'error', value: ePercent, color: '#f50057' },
        { title: 'status', value: sPercent, color: '#e0e0e0' },
      ]}
    />
  );
}

export default Chart;
