import React from 'react';
import PageDefault from '../../components/PageDefault';

import './404.css';

function Pagina404() {
    return (
<PageDefault>

<body className="bodypag">

	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>:(</h1>
			</div>
			<h2> 404 - Page not found</h2>
                <p>A página que você está procurando pode ter sido removida, ter tido o nome alterado ou está temporariamente indisponível.</p>
			<a href="/">home page</a>
		</div>
	</div>

</body>

</PageDefault>
    );
}

export default Pagina404;


