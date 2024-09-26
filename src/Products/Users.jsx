import React, {useState} from 'react';
import {User} from './User';

const initUsers = [
    {id: "123", name: 'user1', surn: 'surn1', age: 10, isEdit: false},
    {id: "321312", name: 'user3', surn: 'surn2', age: 20, isEdit: false},
    {id: "2132131", name: 'user2', surn: 'surn3', age: 30, isEdit: false},
];

export function Users() {
	const [prods, setProds] = useState(initUsers);


	function toggleMode(id) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod.isEdit = !prod.isEdit;
			}
			
			return prod;
		}));
	}
	
	function editProd(id, field, event) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod[field] = event.target.value;
			}
			
			return prod;
		}));
	}
	
	const result = prods.map(prod => {
		return <User
			key ={prod.id}
			id  ={prod.id}
			name={prod.name}
			surn={prod.surn}
            age={prod.age}
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
		/>;
	});
	
	return <div>
		{result}
	</div>;
}