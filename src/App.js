import { useEffect } from 'react';
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ItemList } from './components/ItemList';
import { Admin } from './components/Admin';
import { SearchBlock } from './components/SearchBlock';
import { Drawer } from './components/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamps } from './store/reducers/asyncActions';
import { Auth } from './components/Auth';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    color: var(--tg-theme-text-color);
  }

  body {
    background: var(--tg-theme-secondary-bg-color);
  }

  html {
    overflow-y: ${props => props.overflowY || ''};
  }
`

const Layout = styled('div')`
  & {
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px;
  }
`

function App() {

  const { tg } = useTelegram()
  const dispatch = useDispatch()
  const filteringValues = useSelector(state => state.filter.values)
  const modalState = useSelector(state => state.modal.value)

  useEffect(() => {
    tg.ready();
  }, [])

  useEffect(() => {
    dispatch(fetchCamps(filteringValues.join('&')))
  }, [filteringValues])

  return (
    <Layout>
      <GlobalStyle 
        overflowY={modalState && 'hidden'}
      />
      <SearchBlock />
      <Drawer />
      <Routes>
        {/* <Route index element={<Auth />} /> */}
        <Route path={'/user'} element={<ItemList admin={false} />} />
        <Route path={'/admin'} element={<Admin admin={true} />} />
      </Routes>
    </Layout>
  );
}

export default App;
