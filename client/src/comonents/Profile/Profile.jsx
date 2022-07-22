import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Text } from "@geist-ui/core";

function totalScore(stats) {
  return stats.reduce(
    (s, i) => s + i.score, 0
  );
}

export default function Profile() {
  const { user } = useSelector(state => state.user);
  const [stats, setStats] = useState([]);

  const getStats = () => {
    fetch('http://localhost:4000/api/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    }).then(
      response => response.json()
    ).then(
      data => setStats(data.stats)
    );
  };

  useEffect(getStats, []);

  return (
    <Card shadow>
      <Text h4 my={0}>{user ? user.name : 'Unknown'}</Text>
      <Text>Кол-во игр: {stats.length}</Text>
      <Text>Кол-во баллов: {stats.length ? totalScore(stats) : 'Unknown'}</Text>
    </Card>
  );
};
