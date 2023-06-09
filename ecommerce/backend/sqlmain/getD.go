package sqlmain

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func Getrandcat() []strs.CatLink {
	var t1 strs.CatLink
	var t2 []strs.CatLink

	row, err := db.Query("SELECT * FROM category")
	if err != nil {
		panic(err)
	}

	for row.Next() {
		err := row.Scan(&t1.ID, &t1.Name, &t1.Img)
		if err != nil {
			panic(err)
		}
		t2 = append(t2, t1)
	}

	return t2
}

func Getpoprod() []strs.ProdSim {
	var t1 strs.ProdSim
	var t2 []strs.ProdSim

	row, err := db.Query("CALL getpoprod()")
	if err != nil {
		panic(err)
	}

	for row.Next() {
		err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
		if err != nil {
			panic(err)
		}
		t1.DisPrice = t1.Base.Price
		t2 = append(t2, t1)
	}
	return t2
}

func Getallprod(sort string) []strs.ProdSim {
	var t1 strs.ProdSim
	var t2 []strs.ProdSim

	if sort == "-" {
		row, err := db.Query("CALL getallprod()")
		if err != nil {
			panic(err)
		}

		for row.Next() {
			err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
			if err != nil {
				panic(err)
			}
			t1.DisPrice = t1.Base.Price
			t2 = append(t2, t1)
		}
	} else if sort == "ch" {
		row, err := db.Query("CALL sortchprod()")
		if err != nil {
			panic(err)
		}

		for row.Next() {
			err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
			if err != nil {
				panic(err)
			}
			t1.DisPrice = t1.Base.Price
			t2 = append(t2, t1)
		}
	} else if sort == "ex" {
		row, err := db.Query("CALL sortexprod()")
		if err != nil {
			panic(err)
		}

		for row.Next() {
			err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
			if err != nil {
				panic(err)
			}
			t1.DisPrice = t1.Base.Price
			t2 = append(t2, t1)
		}
	} else if sort == "rate" {
		row, err := db.Query("CALL sortpoprod()")
		if err != nil {
			panic(err)
		}

		for row.Next() {
			err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
			if err != nil {
				panic(err)
			}
			t1.DisPrice = t1.Base.Price
			t2 = append(t2, t1)
		}
	}

	return t2
}

func Getchprod() []strs.ProdSim {
	var t1 strs.ProdSim
	var t2 []strs.ProdSim

	row, err := db.Query("CALL getchprod()")
	if err != nil {
		panic(err)
	}

	for row.Next() {
		err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
		if err != nil {
			panic(err)
		}
		t1.DisPrice = t1.Base.Price
		t2 = append(t2, t1)
	}
	return t2
}

func GetUserIn(id string) strs.UserTop {
	var usr strs.UserTop

	row, err := db.Query("SELECT username from users where id = ?", id)
	if err != nil {
		panic(err)
	}

	for row.Next() {
		err := row.Scan(&usr.UserName)
		if err != nil {
			panic(err)
		}
	}
	usr.ID = id
	usr.Log = true

	usr.ProfilePic = "./anonymousprofile"

	return usr
}

func GetProfile(base strs.Profile) strs.Profile {
	row, err := db.Query("SELECT name, username, email, password")
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err := row.Scan(&base.Base.Name, &base.Base.UserName, &base.Base.Email, &base.Base.Password)
		if err != nil {
			panic(err)
		}
	}
	base.Base.ProfilePic = "./anonymousprofile"

	row, err = db.Query("CALL getusorder(?)", base.Base.ID)
	if err != nil {
		panic(err)
	}
	var orders strs.OrderSim
	for row.Next() {
		err := row.Scan(&orders.ID, &orders.PaydetID, &orders.Status, &orders.Paystatus, &orders.Total, &orders.Date)
		if err != nil {
			panic(err)
		}
		row1, err := db.Query("CALL getusorderdet(?)", orders.ID)
		if err != nil {
			panic(err)
		}
		var prods strs.ProdOr
		for row1.Next() {
			err := row1.Scan(&prods.ID, &prods.Name, &prods.Quantity, &prods.SPrice, &prods.TPrice, &prods.Imgpath)
			if err != nil {
				panic(err)
			}
			orders.Prods = append(orders.Prods, prods)
		}
		base.Orders = append(base.Orders, orders)
	}
	row, err = db.Query("CALL getshopown(?)", base.Base.ID)
	if err != nil {
		panic(err)
	}

	var shops strs.ShopSim
	for row.Next() {
		err := row.Scan(&shops.ID, &shops.Name, &shops.Rate)
		if err != nil {
			panic(err)
		}
		base.Shops = append(base.Shops, shops)
	}
	return base
}

func GetCart(uid string) strs.Cart {
	var cart strs.Cart
	var prod strs.ProdCart

	row, err := db.Query("CALL getprodcart(?)", uid)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err := row.Scan(&prod.ID, &prod.Name, &prod.Quantity, &prod.SPrice, &prod.ToPrice, &prod.Imgpath)
		if err != nil {
			panic(err)
		}
		cart.Data = append(cart.Data, prod)
	}
	return cart
}

func GetTotP(paydetid string) float32 {
	var tot float32
	row, err := db.Query("SELECT total FROM paymentdetails where id = ?", paydetid)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err := row.Scan(&tot)
		if err != nil {
			panic(err)
		}
	}
	return tot
}

func GetProdShop(pid string) string {
	var sid string
	row, err := db.Query("SELECT shopid from product where id = ?", pid)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err := row.Scan(&sid)
		if err != nil {
			panic(err)
		}
	}
	return sid
}

func Getshprod(sid string) []strs.ProdSim {
	var t1 strs.ProdSim
	var t2 []strs.ProdSim

	row, err := db.Query("CALL getprodbyshop(?)", sid)
	if err != nil {
		panic(err)
	}

	for row.Next() {
		err := row.Scan(&t1.Base.ID, &t1.Base.Name, &t1.Base.Price, &t1.Base.Category, &t1.Base.Rating, &t1.Base.SReview, &t1.Imgpath)
		if err != nil {
			panic(err)
		}
		t1.DisPrice = t1.Base.Price
		t2 = append(t2, t1)
	}
	return t2
}
