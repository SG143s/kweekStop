package main

import (
	hthand "github.com/SG143s/kweekStop/ecommerce/handler"
	//op "github.com/SG143s/kweekStop/ecommerce/op"
	sqhand "github.com/SG143s/kweekStop/ecommerce/sqlmain"
)

func main() {
	sqhand.SqlStart()
	hthand.Start()
}
