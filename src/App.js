import React from 'react';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Title title="Задание 1 - Профиль социальной сети" />

      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Title title="Задание 2 - Секция статистики" />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Title title="Задание 3 - Список друзей" />

      <FriendList friends={friends} />

      <Title title="Задание 4 - История транзакций" />

      <TransactionHistory items={transactions} />
    </>
  );
}
