package handler

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

type loginInfo struct {
	User     string `json:"user"`
	Password string `json:"password"`
	Ip       string `json:"ip"`
	Port     string `json:"port"`
	Db       string `json:"database"`
}

var db sql.DB

func SqlStart() {
	dbt, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/kweekstop")

	if err != nil {
		panic(err)
	}
	db = *dbt
	dbt.Close()

}

func GetDB() sql.DB {
	return db
}

func SqlStop() {
	db.Close()
}
