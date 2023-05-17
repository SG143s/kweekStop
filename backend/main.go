package main

import (
	hand "github.com/SG143s/DesireGarden/handler"
)

func main() {
	hand.StartMongo()
	hand.Start()
}
