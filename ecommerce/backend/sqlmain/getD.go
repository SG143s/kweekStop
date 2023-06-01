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
