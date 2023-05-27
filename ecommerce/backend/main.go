package main

import (
	hand "github.com/SG143s/kweekStop/ecommerce/handler"
)

func main() {
	hand.SqlStart()
	hand.Start()
}
