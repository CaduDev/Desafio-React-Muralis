import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '@/container/Dashboard';

import { Home } from "@/screens/Home";

import { Register } from "@/screens/Register";

import { Error } from '@/screens/Error';

import { dashboard_itens } from '@/data/dashboard';

export default function App() {
  return (
    <Routes>
      <Route element={<Dashboard menuList={dashboard_itens} />}>
        <Route index path="/" element={<Home />}/>
        <Route index path="/ingressantes" element={<Register />}/>
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}