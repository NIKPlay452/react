function Products() {
	const [prods, setProds] = useState(initProds);
    const initProds = [
        {id: id(), name: 'product1', cost: 100, isEdit: false},
        {id: id(), name: 'product2', cost: 200, isEdit: false},
        {id: id(), name: 'product3', cost: 300, isEdit: false},
    ];

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
		return <Product
			key ={prod.id}
			id  ={prod.id}
			name={prod.name}
			cost={prod.cost}
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
		/>;
	});
	
	return <div>
		{result}
	</div>;
}
export default Products