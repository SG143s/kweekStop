package main

import (
	hand "github.com/SG143s/kweekStop/ecommerce/handler"
	sqlhand "github.com/SG143s/kweekStop/ecommerce/sqlmain"
)

func main() {
	sqlhand.SqlStart()
	hand.Start()
}
