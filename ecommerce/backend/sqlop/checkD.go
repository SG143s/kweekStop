package sqlop

import (
	hand "github.com/SG143s/kweekStop/ecommerce/sqlmain"
)

var db = hand.GetDB()

func checkEmail(email string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM users WHERE email =? LIMIT 1)", email)
	if err != nil {
		panic(err)
	}
	var res bool
	for result.Next() {
		err = result.Scan(&res)
		if err != nil {
			panic(err)
		}
	}

	return res
}

func getIdMail(mail string) string {
	var id string
	row, err := db.Query("SELECT iduser FROM users where email = ?", mail)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err = row.Scan(&id)
		if err != nil {
			panic(err)
		}
	}

	return id
}

func getPass(id string) string {
	var pass string
	row, err := db.Query("SELECT password FROM users where iduser = ?", id)
	if err != nil {
		panic(err)
	}
	for row.Next() {
		err = row.Scan(&pass)
		if err != nil {
			panic(err)
		}
	}

	return pass
}

func CheckAuth(em string, ps string) bool {
	if !checkEmail(em) {
		return false
	}
	id := getIdMail(em)

	psc := getPass(id)

	if ps == psc {
		return true
	} else {
		return false
	}

}
