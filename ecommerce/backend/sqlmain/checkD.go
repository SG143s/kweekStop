package sqlmain

func checkUsName(uname string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM users WHERE username =? LIMIT 1)", uname)
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

func GetIdUname(uname string) string {
	var id string
	row, err := db.Query("SELECT id FROM users where username = ?", uname)
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
	row, err := db.Query("SELECT password FROM users where id = ?", id)
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
	if !checkUsName(em) {
		return false
	}
	id := GetIdUname(em)

	psc := getPass(id)

	if ps == psc {
		return true
	} else {
		return false
	}

}

func CheckOwner(uid string, shid string) bool {
	result, err := db.Query("CALL checkownership(?, ?)", uid, shid)
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

func CheckOrderExist(uid string, oid string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM orders WHERE userid = ? AND id = ? LIMIT 1)", uid, oid)
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

func CheckPayExist(paydetid string) bool {
	result, err := db.Query("SELECT EXISTS(SELECT 1 FROM paymentdetails WHERE id = ? LIMIT 1)", paydetid)
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
