package sqlop

import (
	"database/sql"

	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func getprodsim() *sql.Rows {

	row, err := db.Query("SELECT ")
	if err != nil {
		panic(err)
	}
	return row
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
