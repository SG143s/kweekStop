package op

import (
	sq "github.com/SG143s/kweekStop/ecommerce/sqlop"
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func HomeGen(base strs.Home) strs.Home {
	base.PopCat = sq.Getrandcat()
	base.Popprod = sq.Getpoprod()
	base.RandCat = sq.Getrandcat()
	base.Cheaprod = sq.Getchprod()

	return base
}
