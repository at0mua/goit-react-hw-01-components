import React from 'react';

import Title from './components/Title/Title';
import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Title title="Задание 1 - Профиль социальной сети" />

      <Profile {...user} />

      <Title title="Задание 2 - Секция статистики" />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Title title="Задание 3 - Список друзей" />

      <FriendList friends={friends} />

      <Title title="Задание 4 - История транзакций" />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
