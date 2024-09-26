export function User({ id, name, surn, age, isEdit, toggleMode, editProd }) {
return <div>
		name: {
			isEdit
			? <input value={name} onChange={event => editProd(id, 'name', event)} />
			: <span>{ name }</span>
		}
		<br/>
		cost: {
			isEdit
			? <input value={surn} onChange={event => editProd(id, 'surn', event)} />
			: <span>{ surn }</span>
		}
		<br/>
        age: {
			isEdit
			? <input value={age} onChange={event => editProd(id, 'age', event)} />
			: <span>{ age }</span>
		}
		<br/>
		
		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save': 'edit'}
		</button>
	</div>;
}
