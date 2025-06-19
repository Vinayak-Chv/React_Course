import Students from "./Students.jsx"

function App() {
  return(
    <>
      <Students name="Spongebob" age={30} isStudent={true} />
      <Students name="Patrick" age={42} isStudent={false} />
      <Students name="Squidward" age={50} isStudent={false} />
      <Students name="Sandy" age={27} isStudent={true} />
      <Students />
    </>
  )
}

export default App
