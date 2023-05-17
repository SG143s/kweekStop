package main

import (
	hand "github.com/SG143s/kweekStop/handler"
)

func main() {
	hand.StartMongo()
	hand.Start()
}
