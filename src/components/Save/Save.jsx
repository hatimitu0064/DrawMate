import "./Save.scss"

const Save = ({onClick}) => {
	return (
		<div className="save-btn-container">
			<button className="save-btn" onClick={onClick}>保存</button>
		</div>
	)
}

export default Save