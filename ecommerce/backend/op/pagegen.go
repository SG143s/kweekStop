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

func ProdShop(base strs.Prods, sid string) strs.Prods {
	base.Prod = sq.Getshprod(sid)

	return base
}

func ProdPGen(base strs.ProdP) strs.ProdP {
	base.Base = sq.GetProd(base.Base)
	base.Base = sq.GetImg(base.Base)
	base.Base.Shop = sq.GetShop(base.Base.Shop)
	base.RelIt = sq.GetRelateprod(base.Base.Base.ID)
	base.Rev = sq.GetRev(base.Base.Base.ID)
	return base
}
