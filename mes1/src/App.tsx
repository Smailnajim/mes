import { Route, Routes } from "react-router-dom"
import Test from "./components/test"
import Index from "./Layouts";
import Test2 from "./components/test2";


export default function App() {
  console.log('App');
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Test/>}/>
        <Route path="new" element={<Test2/>}/>
      </Route>
    </Routes>
  );
}