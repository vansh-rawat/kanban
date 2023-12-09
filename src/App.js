import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import DisplayOptions from './components/DisplayOptions';
import { fetchData } from './services/api';
import './styles.css';
const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    fetchData().then((data) => setTickets(data.tickets));
  }, []);

  const groupAndSortTickets = () => {
    let groupedTickets = [...tickets];

    switch (groupBy) {
      case 'status':
        groupedTickets = groupByStatus(groupedTickets);
        break;
      case 'user':
        groupedTickets = groupByUser(groupedTickets);
        break;
      case 'priority':
        groupedTickets = groupByPriority(groupedTickets);
        break;
      default:
        break;
    }

    switch (sortOption) {
      case 'priority':
        groupedTickets.sort((a, b) => b.priority - a.priority);
        break;
      case 'title':
        groupedTickets.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      default:
        break;
    }

    return groupedTickets;
  };



  const groupByStatus = (tickets) => {
    const groupedByStatus = [];

    tickets.forEach((ticket) => {
      const status = ticket.status;
      const existingGroup = groupedByStatus.find((group) => group.label === status);

      if (existingGroup) {
        existingGroup.tickets.push(ticket);
      } else {
        groupedByStatus.push({ label: status, tickets: [ticket] });
      }
    });

    return groupedByStatus;
  };

  const groupByUser = (tickets) => {
    const groupedByUser = [];

    tickets.forEach((ticket) => {
      const userId = ticket.userId;
      const existingGroup = groupedByUser.find((group) => group.label === userId);

      if (existingGroup) {
        existingGroup.tickets.push(ticket);
      } else {
        groupedByUser.push({ label: userId, tickets: [ticket] });
      }
    });

    return groupedByUser;
  };

  const groupByPriority = (tickets) => {
    const groupedByPriority = [];

    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      const existingGroup = groupedByPriority.find((group) => group.label === priority);

      if (existingGroup) {
        existingGroup.tickets.push(ticket);
      } else {
        groupedByPriority.push({ label: priority, tickets: [ticket] });
      }
    });

    return groupedByPriority;
  };


  return (
    <div className="app">
      <DisplayOptions
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <Board tickets={groupAndSortTickets()} />
    </div>
  );
};

export default App;
