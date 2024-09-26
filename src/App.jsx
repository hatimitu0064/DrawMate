import './App.css'
import AllCreateText from './components/AllCreateText/AllCreateText'
import CreateCategory from './components/CreateCategory/CreateCategory'
import CreateTag from './components/CreateTag/CreateTag'
import CreateTitle from './components/CreateTitle/CreateTitle'
import ImgForm from './components/ImgForm/ImgForm'
import Save from './components/Save/Save'

function App() {

  return (
    <>
			<ImgForm />
			<CreateTitle />
			<CreateTag />
			<CreateCategory />
			<AllCreateText />
			<Save />
		</>
  )
}

export default App
