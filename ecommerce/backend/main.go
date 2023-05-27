package main

import (
	hthand "github.com/SG143s/kweekStop/ecommerce/handler"
	sqhand "github.com/SG143s/kweekStop/ecommerce/sqlmain"
)

func main() {
	sqhand.SqlStart()
	hthand.Start()
}
