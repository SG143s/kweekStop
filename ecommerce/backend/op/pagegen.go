package op

import (
	sq "github.com/SG143s/kweekStop/ecommerce/sqlmain"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func HomeGen(base strs.Home) strs.Home {
	base.PopCat = sq.Getrandcat()
	base.Popprod = sq.Getpoprod()
	base.RandCat = sq.Getrandcat()
	base.Cheaprod = sq.Getchprod()

	return base
}

func ProdGen(base strs.Prods, sort string) strs.Prods {
	base.Prod = sq.Getallprod(sort)

	return base
}
