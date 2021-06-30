import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import SingleItem from './SingleItem';
import ScrollToTop from './ScrollToTop';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Home setCategories={setCategories} filterItems={filterItems} />
      <Switch>
        <Route exact path="/">
          <div class="heading">Our Foods</div>
          <Categories filterItems={filterItems} Categories={categories} />
          <Menu menuItems={menu} />
        </Route>
        <Route exact path="/item/:id">
          <SingleItem menuItems={menu} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
