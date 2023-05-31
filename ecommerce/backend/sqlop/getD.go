package sqlop

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func Getrandcat() []strs.CatLink {
	var t1 strs.CatLink
	var t2 []strs.CatLink

	row, err := db.Query("SELECT * FROM category ORDER BY RAND() LIMIT 10")
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
		err := row.Scan(&t1.ID, &t1.Name, &t1.Price, &t1.Category, &t1.Rating, &t1.SReview)
		if err != nil {
			panic(err)
		}
		t1.DisPrice = t1.Price
		t2 = append(t2, t1)
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
		err := row.Scan(&t1.ID, &t1.Name, &t1.Price, &t1.Category, &t1.Rating, &t1.SReview)
		if err != nil {
			panic(err)
		}
		t1.DisPrice = t1.Price
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
