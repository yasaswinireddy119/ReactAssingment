function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Link to="/user">User</Link>
      <Route path="*" element={<NotFound/>}/>
      <Route path="user/:id" element={<User/>}/>


    </Routes>
    </BrowserRouter>

    

  )
}
export default App;