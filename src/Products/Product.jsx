import React from 'react';


function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
	return <div>
		name: {
			isEdit
			? <input value={name} onChange={event => editProd(id, 'name', event)} />
			: <span>{ name }</span>
		}
		<br/>
		cost: {
			isEdit
			? <input value={cost} onChange={event => editProd(id, 'cost', event)} />
			: <span>{ cost }</span>
		}
		<br/>
		
		<button onClick={() => toggleMode(id)}>
			{isEdit ? 'save': 'edit'}
		</button>
	</div>;
}

export default Product;