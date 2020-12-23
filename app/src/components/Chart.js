import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useDashboard } from '../context';

function Chart() {
  const { messages } = useDashboard();
  const warn = messages.filter((msg) => msg.level === 'warn');
  const error = messages.filter((msg) => msg.level === 'error');
  const status = messages.filter((msg) => msg.level === 'status');
  const wPercent = warn.length / messages.length || 0;
  const ePercent = error.length / messages.length || 0;
  const sPercent = status.length / messages.length || 0;

  return (
    <PieChart
      style={{ width: '15%' }}
      data={[
        { title: 'warn', value: wPercent, color: '#3f51b5' },
        { title: 'error', value: ePercent, color: '#f50057' },
        { title: 'status', value: sPercent, color: '#e0e0e0' },
      ]}
    />
  );
}

export default Chart;
