package sqlop

import (
	"database/sql"

	hand "github.com/SG143s/kweekStop/ecommerce/handler"
)

func getprodsim() *sql.Rows {

	db := hand.GetDB()
	row, err := db.Query("SELECT ")
	if err != nil {
		panic(err)
	}
	return row
}
