import { Route, Routes } from 'react-router-dom';

import { SignIn } from "@/screens/SignIn";

import { Error } from "@/screens/Error";

export default function Auth() {
  return (
    <Routes>
      <Route index path="/" element={<SignIn />}/>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}